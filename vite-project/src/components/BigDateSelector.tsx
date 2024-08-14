import * as m from "../styles/mainStyle";

interface BigDateSelectorProps {
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
}

export const BigDateSelector: React.FC<BigDateSelectorProps> = ({
  onYearChange,
  onMonthChange,
}) => {
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from(
    { length: 3 },
    (_, index) => currentYear - index
  );
  const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      <m.BigDateSelector>
        <div className="select-container">
          <select onChange={(e) => onYearChange(parseInt(e.target.value))}>
            {years.map((year: number) => (
              <option key={year} value={year}>
                {year} 년
              </option>
            ))}
          </select>
          <select onChange={(e) => onMonthChange(parseInt(e.target.value))}>
            {months.map((month: number) => (
              <option key={month} value={month}>
                {month} 월
              </option>
            ))}
          </select>
        </div>
      </m.BigDateSelector>
    </>
  );
};
