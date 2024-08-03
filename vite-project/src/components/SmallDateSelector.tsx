import * as m from "../styles/modalStyle";

export const SmallDateSelector: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from(
    { length: 3 },
    (_, index) => currentYear - index
  );
  const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);
  return (
    <>
      <m.SmallDateSelector>
        <div className="select-container">
          <select>
            {years.map((year: number) => (
              <option key={year} value={year}>
                {year} 년
              </option>
            ))}
          </select>
          <select>
            {months.map((month: number) => (
              <option key={month} value={month}>
                {month} 월
              </option>
            ))}
          </select>
          <select>
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
