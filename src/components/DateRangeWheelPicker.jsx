import React, { useState, useEffect } from 'react';
import WheelDatePicker from './WheelDatePicker';
import { Calendar, Minus, Plus } from 'lucide-react';

export default function DateRangeWheelPicker({ onChange }) {
  const today = new Date();
  const defaultStart = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;

  const [startDateStr, setStartDateStr] = useState(defaultStart);
  const [durationDays, setDurationDays] = useState(7);

  const getEndDateStr = (startStr, days) => {
    const s = new Date(startStr);
    if (isNaN(s.getTime())) return '';
    const e = new Date(s);
    e.setDate(e.getDate() + days);
    return `${e.toLocaleString('default', { month: 'short' })} ${e.getDate()}, ${e.getFullYear()}`;
  };

  const getStartShortStr = (startStr) => {
    const s = new Date(startStr);
    if (isNaN(s.getTime())) return startStr;
    return `${s.toLocaleString('default', { month: 'short' })} ${s.getDate()}, ${s.getFullYear()}`;
  };

  const endDateStr = getEndDateStr(startDateStr, durationDays);
  const startShortStr = getStartShortStr(startDateStr);

  useEffect(() => {
    onChange({
      startDate: startDateStr,
      endDate: endDateStr,
      durationDays: durationDays
    });
  }, [startDateStr, durationDays]);

  const getExperienceTagline = (days) => {
    if (days <= 4) return '🐆 Express Mara Safari';
    if (days <= 7) return '🦁 Classic Kenya Safari (Mara & Amboseli)';
    if (days <= 10) return '🦒 Grand Wilderness Expedition';
    return '🚁 Ultimate Bush & Coastal Tour';
  };

  return (
    <div className="custom-safari-datepicker">
      {/* 1. 3D Date Wheel */}
      <WheelDatePicker
        value={startDateStr}
        onChange={(val) => setStartDateStr(val)}
      />

      {/* 2. Tactile Safari Stay Counter */}
      <div className="stay-counter-card">
        <div className="stay-counter-header">
          <span className="counter-label">Length of Safari</span>
          <span className="experience-badge">{getExperienceTagline(durationDays)}</span>
        </div>

        <div className="counter-controls">
          <button
            type="button"
            className="counter-btn"
            onClick={() => setDurationDays(prev => Math.max(1, prev - 1))}
            disabled={durationDays <= 1}
            aria-label="Decrease days"
          >
            <Minus size={16} />
          </button>

          <div className="counter-display">
            <span className="count-number">{durationDays}</span>
            <span className="count-text">{durationDays === 1 ? 'Day (0 Nights)' : `Days (${durationDays - 1} Nights)`}</span>
          </div>

          <button
            type="button"
            className="counter-btn"
            onClick={() => setDurationDays(prev => Math.min(30, prev + 1))}
            aria-label="Increase days"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* 3. Luxury Timeline Strip */}
      <div className="safari-timeline-strip">
        <div className="timeline-point">
          <Calendar size={14} className="timeline-icon" />
          <div className="point-info">
            <span className="point-tag">Start</span>
            <span className="point-val">{startShortStr}</span>
          </div>
        </div>

        <div className="timeline-connector">
          <div className="timeline-line"></div>
          <span className="timeline-badge">{durationDays} Days</span>
        </div>

        <div className="timeline-point right">
          <Calendar size={14} className="timeline-icon" />
          <div className="point-info">
            <span className="point-tag">End</span>
            <span className="point-val">{endDateStr}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
