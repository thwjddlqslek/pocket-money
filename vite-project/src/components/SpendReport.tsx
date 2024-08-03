import React from "react";
import * as m from "../styles/mainStyle";
import styled from "styled-components";

const SpendColor = styled.p`
  color: #eb0130;
`;

interface SpendReportProps {
  content: string;
  amount: number;
}

const SpendReport: React.FC<SpendReportProps> = ({ content, amount }) => {
  /* const formateDate = date.toLocaleDateString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }); */

  return (
    <m.OneReport>
      <p>{content}</p>
      <SpendColor>{amount}</SpendColor>
    </m.OneReport>
  );
};

export default SpendReport;
