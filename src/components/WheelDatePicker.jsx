import React, { useState, useEffect, useRef } from 'react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function WheelDatePicker({ value, onChange }) {
  const currentYear = new Date().getFullYear();
  const YEARS = [currentYear, currentYear + 1, currentYear + 2];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
  const daysCount = getDaysInMonth(selectedMonth, selectedYear);
  const DAYS = Array.from({ length: daysCount }, (_, i) => i + 1);

  // Validate day on month change
  useEffect(() => {
    if (selectedDay > daysCount) {
      setSelectedDay(daysCount);
    }
  }, [selectedMonth, selectedYear, daysCount, selectedDay]);

  // Notify parent on state change
  useEffect(() => {
    const formatted = `${MONTHS[selectedMonth]} ${selectedDay}, ${selectedYear}`;
    onChange(formatted);
  }, [selectedMonth, selectedDay, selectedYear]);

  // Buttery 60fps Scroll Column
  const ScrollColumn = ({ items, selectedIndex, onSelect }) => {
    const listRef = useRef(null);
    const itemHeight = 44;
    const isProgrammaticScroll = useRef(false);
    const scrollTimeout = useRef(null);

    // Initial position on mount only
    useEffect(() => {
      if (listRef.current) {
        isProgrammaticScroll.current = true;
        listRef.current.scrollTop = selectedIndex * itemHeight;
        setTimeout(() => { isProgrammaticScroll.current = false; }, 50);
      }
    }, []);

    const handleScroll = (e) => {
      if (isProgrammaticScroll.current) return;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const scrollTop = e.target.scrollTop;
      // Debounce React state updates so GPU momentum scrolling runs at 60fps without re-render thrashing
      scrollTimeout.current = setTimeout(() => {
        const index = Math.round(scrollTop / itemHeight);
        const clampedIndex = Math.max(0, Math.min(items.length - 1, index));
        if (clampedIndex !== selectedIndex) {
          onSelect(clampedIndex);
        }
      }, 50);
    };

    const handleItemClick = (index) => {
      onSelect(index);
      if (listRef.current) {
        isProgrammaticScroll.current = true;
        listRef.current.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
        setTimeout(() => { isProgrammaticScroll.current = false; }, 300);
      }
    };

    return (
      <div
        className="wheel-column"
        ref={listRef}
        onScroll={handleScroll}
      >
        {/* Top spacer */}
        <div className="wheel-spacer" style={{ height: itemHeight * 2, flexShrink: 0 }} />

        {items.map((item, index) => {
          const isSelected = index === selectedIndex;
          return (
            <div
              key={index}
              className={`wheel-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </div>
          );
        })}

        {/* Bottom spacer */}
        <div className="wheel-spacer" style={{ height: itemHeight * 2, flexShrink: 0 }} />
      </div>
    );
  };

  return (
    <div className="wheel-date-picker">
      <div className="wheel-container">
        {/* Active Center Lens */}
        <div className="wheel-lens" />
        {/* Cylinder Fades */}
        <div className="wheel-fade-top" />
        <div className="wheel-fade-bottom" />

        <div className="wheel-columns">
          <ScrollColumn
            items={MONTHS}
            selectedIndex={selectedMonth}
            onSelect={setSelectedMonth}
          />
          <ScrollColumn
            items={DAYS}
            selectedIndex={selectedDay - 1}
            onSelect={(idx) => setSelectedDay(idx + 1)}
          />
          <ScrollColumn
            items={YEARS}
            selectedIndex={YEARS.indexOf(selectedYear)}
            onSelect={(idx) => setSelectedYear(YEARS[idx])}
          />
        </div>
      </div>

      <div className="wheel-selected-preview">
        Selected: <strong>{MONTHS[selectedMonth]} {selectedDay}, {selectedYear}</strong>
      </div>
    </div>
  );
}
