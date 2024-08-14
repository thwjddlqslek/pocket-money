import * as m from "../styles/modalStyle";
import { useEffect, useState } from "react";

interface SmallDateSelectorProps {
  selectedDate: (date: string) => void;
}

export const SmallDateSelector: React.FC<SmallDateSelectorProps> = ({
  selectedDate,
}) => {
  const currentYear: number = new Date().getFullYear();
  const currentMonth: number = new Date().getMonth() + 1;
  const currentDay: number = new Date().getDate();

  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number>(currentDay);

  const years: number[] = Array.from(
    { length: 3 },
    (_, index) => currentYear - index
  );
  const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
  };
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(e.target.value));
  };
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(Number(e.target.value));
  };

  useEffect(() => {
    selectedDate(`${selectedYear}-${selectedMonth}-${selectedDay}`);
  }, [selectedYear, selectedMonth, selectedDay, selectedDate]);

  return (
    <>
      <m.SmallDateSelector>
        <div className="select-container">
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map((year: number) => (
              <option key={year} value={year}>
                {year} 년
              </option>
            ))}
          </select>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month: number) => (
              <option key={month} value={month}>
                {month} 월
              </option>
            ))}
          </select>
          <select
            id="day-select"
            value={selectedDay}
            onChange={handleDayChange}
          >
            {days.map((day: number) => (
              <option key={day} value={day}>
                {day} 일
              </option>
            ))}
          </select>
        </div>
      </m.SmallDateSelector>
    </>
  );
};
