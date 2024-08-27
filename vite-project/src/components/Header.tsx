import { memo, useContext } from "react";
import * as h from "../styles/headerStyle";
import { ThemeContext } from "../context/ThemeContext";
interface HeaderProps {
  totalIncome: number;
  totalSpend: number;
}

const Header: React.FC<HeaderProps> = ({ totalIncome, totalSpend }) => {
  const totalMoney = totalIncome - totalSpend;
  const formateTotal = totalMoney.toLocaleString();
  const { isDarkMode, themeBttClicked } = useContext(ThemeContext);
  return (
    <h.StyledHeader>
      <h1>{isDarkMode ? "현재 내 자산은?-다크" : "현재 내 자산은?-라이트"}</h1>
      <p>{formateTotal} 원</p>
    </h.StyledHeader>
  );
};

export default memo(Header);
