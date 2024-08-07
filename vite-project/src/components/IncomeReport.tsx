import React from "react";
import * as m from "../styles/mainStyle";
import styled from "styled-components";

const IncomeColor = styled.p`
  color: #431ef5;
`;

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
  return (
    <m.OneReport>
      <p>{date}</p>
      <p>{content}</p>
      <IncomeColor>{amount}</IncomeColor>
    </m.OneReport>
  );
};

export default IncomeReport;
