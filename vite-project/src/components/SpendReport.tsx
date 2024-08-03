import React from "react";
import * as m from "../styles/mainStyle";
import styled from "styled-components";

const SpendColor = styled.p`
    color: #EB0130;
`

interface SpendReportProps {
    date: Date;
    text: string;
    number: number;
}

const SpendReport: React.FC<SpendReportProps> = ({date, text, number}) => {
    const formateDate = date.toLocaleDateString('ko-KR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    })

    return(
        <m.OneReport>
        <h1>{formateDate}</h1>
        <p>{text}</p><SpendColor>{number}</SpendColor>
        </m.OneReport>
    );
};

export default SpendReport;