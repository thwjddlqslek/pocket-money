import React from "react";
import * as m from "../styles/mainStyle";

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
        <p>{text} : {number}</p>
        </m.OneReport>
    );
};

export default SpendReport;