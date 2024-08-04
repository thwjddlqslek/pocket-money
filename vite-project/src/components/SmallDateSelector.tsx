import * as m from "../styles/modalStyle";

interface SmallDateSelectorProps {
  selectedDate: (date: string) => void;
}

export const SmallDateSelector: React.FC<SmallDateSelectorProps> = ({
  selectedDate,
}) => {
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from(
    { length: 3 },
    (_, index) => currentYear - index
  );
  const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = (document.getElementById("year-select") as HTMLSelectElement)
      .value;
    const month = (document.getElementById("month-select") as HTMLSelectElement)
      .value;
    const day = (document.getElementById("day-select") as HTMLSelectElement)
      .value;
    selectedDate(`${year}-${month}-${day}`);
  };
  return (
    <>
      <m.SmallDateSelector>
        <div className="select-container">
          <select id="year-select" onChange={handleDateChange}>
            {years.map((year: number) => (
              <option key={year} value={year}>
                {year} 년
              </option>
            ))}
          </select>
          <select id="month-select" onChange={handleDateChange}>
            {months.map((month: number) => (
              <option key={month} value={month}>
                {month} 월
              </option>
            ))}
          </select>
          <select id="day-select" onChange={handleDateChange}>
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
