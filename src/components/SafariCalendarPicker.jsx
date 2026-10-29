import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, RotateCcw } from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function SafariCalendarPicker({ 
  startDate, 
  endDate, 
  durationDays, 
  isFlexible = false,
  onChange 
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseDateStr = (dateStr) => {
    if (!dateStr || dateStr === 'Flexible Dates') return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  };

  const startObj = parseDateStr(startDate);
  const endObj = parseDateStr(endDate);

  // Default view to start date or today
  const initialDate = startObj || today;
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());
  const [hoverDate, setHoverDate] = useState(null);

  const formatDateDisplay = (dateObj) => {
    if (!dateObj) return '';
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(prev => prev - 1);
    } else {
      setViewMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(prev => prev + 1);
    } else {
      setViewMonth(prev => prev + 1);
    }
  };

  // Build current month calendar cells
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const calendarDays = [];

  // Previous month padding
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const date = new Date(viewYear, viewMonth - 1, dayNum);
    date.setHours(0, 0, 0, 0);
    calendarDays.push({ date, isCurrentMonth: false, isPast: date < today });
  }

  // Current month days
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(viewYear, viewMonth, i);
    date.setHours(0, 0, 0, 0);
    calendarDays.push({ date, isCurrentMonth: true, isPast: date < today });
  }

  // Next month padding to fill grid
  const remainingCells = 42 - calendarDays.length;
  const targetRemaining = remainingCells > 7 ? remainingCells - 7 : remainingCells;
  for (let i = 1; i <= targetRemaining; i++) {
    const date = new Date(viewYear, viewMonth + 1, i);
    date.setHours(0, 0, 0, 0);
    calendarDays.push({ date, isCurrentMonth: false, isPast: date < today });
  }

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  // Airbnb Range calculation
  const effectiveEndObj = endObj || (startObj && hoverDate && hoverDate > startObj ? hoverDate : null);

  const isInRange = (date) => {
    if (!startObj || !effectiveEndObj) return false;
    return date > startObj && date < effectiveEndObj;
  };

  // AIRBNB EXACT LOGIC:
  // 1. If no start date, or both start & end are already picked -> clicking sets new START DATE, clears end date.
  // 2. If start date is picked and no end date -> clicking after start date sets END DATE; clicking before resets start date.
  const handleDateClick = (date) => {
    if (date < today) return; // Cannot pick past dates

    if (!startObj || (startObj && endObj)) {
      // First click: Select start date only!
      onChange({
        startDate: formatDateDisplay(date),
        endDate: '',
        durationDays: 1,
        isFlexible: false
      });
      setHoverDate(null);
    } else if (startObj && !endObj) {
      // Second click:
      if (date <= startObj) {
        // Clicked on or before start date: reset start date to this clicked date
        onChange({
          startDate: formatDateDisplay(date),
          endDate: '',
          durationDays: 1,
          isFlexible: false
        });
      } else {
        // Clicked after start date: sets custom end date of ANY duration!
        const diffTime = Math.abs(date.getTime() - startObj.getTime());
        const diffDays = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
        onChange({
          startDate: formatDateDisplay(startObj),
          endDate: formatDateDisplay(date),
          durationDays: diffDays,
          isFlexible: false
        });
        setHoverDate(null);
      }
    }
  };

  const handleResetDates = () => {
    onChange({
      startDate: '',
      endDate: '',
      durationDays: 0,
      isFlexible: false
    });
    setHoverDate(null);
  };

  const handleToggleFlexible = () => {
    onChange({
      startDate: isFlexible ? '' : 'Flexible Dates',
      endDate: isFlexible ? '' : 'Approx. 7–10 Days',
      durationDays: 7,
      isFlexible: !isFlexible
    });
  };

  // Quick preset helper (adds days to start date or today)
  const handleDurationPreset = (days) => {
    const baseStart = startObj || today;
    const newEnd = new Date(baseStart);
    newEnd.setDate(newEnd.getDate() + days);

    onChange({
      startDate: formatDateDisplay(baseStart),
      endDate: formatDateDisplay(newEnd),
      durationDays: days,
      isFlexible: false
    });
  };

  const calculatedNights = endObj && startObj 
    ? Math.max(1, Math.round((endObj.getTime() - startObj.getTime()) / (1000 * 60 * 60 * 24)))
    : null;

  return (
    <div className="safari-theme-calendar airbnb-style">
      {/* Airbnb Dual-Tab Date Header */}
      <div className="airbnb-date-header">
        <div className={`airbnb-tab ${!startObj || (startObj && !endObj) ? 'active' : ''}`}>
          <span className="airbnb-tab-label">CHECK-IN / START</span>
          <span className="airbnb-tab-value">
            {startObj ? formatDateDisplay(startObj) : 'Select date'}
          </span>
        </div>

        <div className={`airbnb-tab ${startObj && !endObj ? 'waiting' : endObj ? 'active' : ''}`}>
          <span className="airbnb-tab-label">CHECK-OUT / RETURN</span>
          <span className="airbnb-tab-value">
            {endObj ? formatDateDisplay(endObj) : startObj ? 'Select return date' : 'Select date'}
          </span>
        </div>
      </div>

      {/* Month Navigation & Title */}
      <div className="calendar-header-bar" style={{ marginTop: '16px' }}>
        <button 
          type="button" 
          className="cal-nav-btn" 
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="cal-month-title">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>

        <button 
          type="button" 
          className="cal-nav-btn" 
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="cal-weekdays-row">
        {DAYS_OF_WEEK.map((day) => (
          <span key={day} className="cal-weekday-label">{day}</span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="cal-days-grid" onMouseLeave={() => setHoverDate(null)}>
        {calendarDays.map((item, idx) => {
          const isStart = isSameDay(item.date, startObj);
          const isEnd = isSameDay(item.date, endObj);
          const inRange = isInRange(item.date);
          const isHoverEnd = !endObj && startObj && hoverDate && isSameDay(item.date, hoverDate) && hoverDate > startObj;
          const isToday = isSameDay(item.date, today);

          let cellClass = 'cal-day-cell';
          if (!item.isCurrentMonth) cellClass += ' other-month';
          if (item.isPast) cellClass += ' past-day';
          if (isStart) cellClass += ' range-start';
          if (isEnd) cellClass += ' range-end';
          if (isHoverEnd) cellClass += ' range-end-preview';
          if (inRange) cellClass += ' in-range';
          if (isToday) cellClass += ' is-today';

          return (
            <button
              key={idx}
              type="button"
              disabled={item.isPast}
              className={cellClass}
              onClick={() => handleDateClick(item.date)}
              onMouseEnter={() => {
                if (startObj && !endObj && item.date >= startObj) {
                  setHoverDate(item.date);
                }
              }}
            >
              <span>{item.date.getDate()}</span>
            </button>
          );
        })}
      </div>

      {/* Status & Summary Banner */}
      <div className="cal-summary-banner" style={{ marginTop: '16px' }}>
        <div className="cal-summary-dates">
          <CalendarIcon size={16} color="#D8C3A5" />
          {isFlexible ? (
            <span><strong>Dates:</strong> Flexible / Open Season</span>
          ) : startObj && endObj ? (
            <span>
              <strong>{formatDateDisplay(startObj)}</strong> &mdash; <strong>{formatDateDisplay(endObj)}</strong>
            </span>
          ) : startObj ? (
            <span style={{ color: '#D8C3A5', fontWeight: 600 }}>
              &larr; Click any calendar day to set your departure date
            </span>
          ) : (
            <span>Click your arrival date to start</span>
          )}
        </div>

        {startObj && endObj && (
          <div className="cal-summary-duration">
            <Clock size={15} color="#D8C3A5" />
            <span><strong>{calculatedNights} Nights</strong> ({calculatedNights + 1} Days)</span>
          </div>
        )}

        {(startObj || endObj) && (
          <button
            type="button"
            onClick={handleResetDates}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.78rem',
              color: '#D8C3A5',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Quick Duration Shortcuts */}
      <div className="cal-duration-presets" style={{ marginTop: '12px' }}>
        <span className="presets-label">Custom Presets:</span>
        {[3, 5, 7, 10, 14, 21].map((days) => (
          <button
            key={days}
            type="button"
            className={`preset-pill ${durationDays === days && !isFlexible && endObj ? 'active' : ''}`}
            onClick={() => handleDurationPreset(days)}
          >
            {days} Days
          </button>
        ))}

        <button
          type="button"
          className={`preset-pill ${isFlexible ? 'active' : ''}`}
          onClick={handleToggleFlexible}
        >
          Flexible
        </button>
      </div>
    </div>
  );
}
