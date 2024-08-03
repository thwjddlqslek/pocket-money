import React from "react";
import * as m from "../styles/mainStyle";
import styled from "styled-components";

const IncomeColor = styled.p`
    color: #431EF5;
`

interface IncomeReportProps {
    date: Date;
    text: string;
    number: number;
}

const IncomeReport: React.FC<IncomeReportProps> = ({date, text, number}) => {
    const formateDate = date.toLocaleDateString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    })

    return(
        <m.OneReport>
        <h1>{formateDate}</h1>
        <p>{text}</p><IncomeColor>{number}</IncomeColor>
        </m.OneReport>
    );
};

export default IncomeReport;