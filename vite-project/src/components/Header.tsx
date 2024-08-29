import { memo } from "react";
import * as h from "../styles/headerStyle";

interface HeaderProps {
  totalIncome: number;
  totalSpend: number;
}

const Header: React.FC<HeaderProps> = ({ totalIncome, totalSpend }) => {
  const totalMoney = totalIncome - totalSpend;
  const formateTotal = totalMoney.toLocaleString();

  return (
    <h.StyledHeader>
      <h1>현재 내 자산은?</h1>
      <p>{formateTotal} 원</p>
    </h.StyledHeader>
  );
};

export default memo(Header);
