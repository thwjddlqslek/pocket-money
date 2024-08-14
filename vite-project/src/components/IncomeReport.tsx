import React from "react";
import * as m from "../styles/mainStyle";

interface IncomeReportProps {
  date: string;
  content: string;
  amount: number;
}

const IncomeReport: React.FC<IncomeReportProps> = ({
  date,
  content,
  amount,
}) => {
  const formateAmout = amount.toLocaleString();
  return (
    <m.OneReport>
      <p id="date">{date}</p>
      <p id="content">{content}</p>
      <p id="amount">{formateAmout}</p>
    </m.OneReport>
  );
};

export default IncomeReport;
