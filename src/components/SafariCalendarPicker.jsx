import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function SafariCalendarPicker({ 
  startDate, 
  endDate, 
  durationDays = 7, 
  isFlexible = false,
  onChange 
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Initialize view date from startDate or today
  const initialDate = startDate ? new Date(startDate) : today;
  const [viewYear, setViewYear] = useState(isNaN(initialDate.getTime()) ? today.getFullYear() : initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(isNaN(initialDate.getTime()) ? today.getMonth() : initialDate.getMonth());

  const parseDateStr = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  };

  const startObj = parseDateStr(startDate);
  const endObj = parseDateStr(endDate);

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

  // Generate calendar grid days
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const calendarDays = [];

  // Previous month padding
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const date = new Date(viewYear, viewMonth - 1, dayNum);
    calendarDays.push({ date, isCurrentMonth: false, isPast: date < today });
  }

  // Current month days
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(viewYear, viewMonth, i);
    calendarDays.push({ date, isCurrentMonth: true, isPast: date < today });
  }

  // Next month padding to fill 35 or 42 cells
  const remainingCells = 42 - calendarDays.length;
  for (let i = 1; i <= (remainingCells > 7 ? remainingCells - 7 : remainingCells); i++) {
    const date = new Date(viewYear, viewMonth + 1, i);
    calendarDays.push({ date, isCurrentMonth: false, isPast: date < today });
  }

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const isInRange = (date) => {
    if (!startObj || !endObj) return false;
    return date > startObj && date < endObj;
  };

  const handleDateClick = (date) => {
    if (date < today) return; // Cannot pick past dates

    if (!startObj || (startObj && endObj)) {
      // Pick first date: automatically calculate default 7 days end date
      const defaultEnd = new Date(date);
      defaultEnd.setDate(defaultEnd.getDate() + 7);
      
      onChange({
        startDate: formatDateDisplay(date),
        endDate: formatDateDisplay(defaultEnd),
        durationDays: 7,
        isFlexible: false
      });
    } else if (startObj && !endObj) {
      if (date < startObj) {
        // If clicked earlier, treat as new start date
        const defaultEnd = new Date(date);
        defaultEnd.setDate(defaultEnd.getDate() + 7);
        onChange({
          startDate: formatDateDisplay(date),
          endDate: formatDateDisplay(defaultEnd),
          durationDays: 7,
          isFlexible: false
        });
      } else {
        // Calculate difference in days
        const diffTime = Math.abs(date.getTime() - startObj.getTime());
        const diffDays = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
        onChange({
          startDate: formatDateDisplay(startObj),
          endDate: formatDateDisplay(date),
          durationDays: diffDays,
          isFlexible: false
        });
      }
    }
  };

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

  const handleToggleFlexible = () => {
    onChange({
      startDate: isFlexible ? formatDateDisplay(today) : 'Flexible Dates',
      endDate: isFlexible ? formatDateDisplay(new Date(today.getTime() + 7 * 86400000)) : 'Approx. 7-10 Days',
      durationDays: 7,
      isFlexible: !isFlexible
    });
  };

  return (
    <div className="safari-theme-calendar">
      {/* Month Header */}
      <div className="calendar-header-bar">
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
      <div className="cal-days-grid">
        {calendarDays.map((item, idx) => {
          const isStart = isSameDay(item.date, startObj);
          const isEnd = isSameDay(item.date, endObj);
          const inRange = isInRange(item.date);
          const isToday = isSameDay(item.date, today);

          let cellClass = 'cal-day-cell';
          if (!item.isCurrentMonth) cellClass += ' other-month';
          if (item.isPast) cellClass += ' past-day';
          if (isStart) cellClass += ' range-start';
          if (isEnd) cellClass += ' range-end';
          if (inRange) cellClass += ' in-range';
          if (isToday) cellClass += ' is-today';

          return (
            <button
              key={idx}
              type="button"
              disabled={item.isPast}
              className={cellClass}
              onClick={() => handleDateClick(item.date)}
            >
              <span>{item.date.getDate()}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Range Display Banner */}
      <div className="cal-summary-banner">
        <div className="cal-summary-dates">
          <CalendarIcon size={16} color="var(--color-secondary)" />
          {isFlexible ? (
            <span><strong>Dates:</strong> Flexible / Planning Ahead</span>
          ) : startObj && endObj ? (
            <span>
              <strong>{formatDateDisplay(startObj)}</strong> &mdash; <strong>{formatDateDisplay(endObj)}</strong>
            </span>
          ) : (
            <span>Select arrival and departure dates</span>
          )}
        </div>

        <div className="cal-summary-duration">
          <Clock size={15} color="var(--color-secondary)" />
          <span>{durationDays} Days ({Math.max(1, durationDays - 1)} Nights)</span>
        </div>
      </div>

      {/* Quick Duration Shortcuts */}
      <div className="cal-duration-presets">
        <span className="presets-label">Quick duration:</span>
        {[5, 7, 10, 14].map((days) => (
          <button
            key={days}
            type="button"
            className={`preset-pill ${durationDays === days && !isFlexible ? 'active' : ''}`}
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
