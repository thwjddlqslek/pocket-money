import React from "react";
import * as m from "../styles/mainStyle";
import IncomeReport from "../components/IncomeReport";
import SpendReport from "../components/SpendReport";
import { useState } from "react";
import Header from "./Header";

const Main: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from(
    { length: 3 },
    (_, index) => currentYear - index
  );
  const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  // 수기로 입력한 값.
  const [incomeReports, setIncomeReports] = useState([
    { date: new Date(2024, 4, 1), text: "정기 용돈", number: 500000 },
    { date: new Date(2024, 4, 25), text: "알바", number: 428100 },
    { date: new Date(2024, 4, 30), text: "할아버지 용돈", number: 100000 },
  ]);
  const [spendReports, setSpendReports] = useState([
    { date: new Date(2024, 4, 27), text: "까까사먹음", number: 3500 },
    { date: new Date(2024, 4, 27), text: "커피", number: 2000 },
    { date: new Date(2024, 4, 27), text: "강의 교재", number: 55000 },
    { date: new Date(2024, 4, 27), text: "동창 모임", number: 47500 },
    { date: new Date(2024, 4, 27), text: "친구 생선", number: 32000 },
    { date: new Date(2024, 4, 27), text: "어버이날", number: 30000 },
    { date: new Date(2024, 4, 27), text: "하이디라오", number: 87000 },
    { date: new Date(2024, 4, 27), text: "현금 인출", number: 100000 },
  ]);
  const totalIncome = incomeReports.reduce((acc, curr) => acc + curr.number, 0);
  const totalSpend = spendReports.reduce((acc, curr) => acc + curr.number, 0);

  return (
    <>
      <Header totalIncome={totalIncome} totalSpend={totalSpend} />
      <m.MainContainer>
        <m.PocketContainer>
          <div>
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
            <p>의 수입과 지출 내역</p>
            <div className="button-container">
              <m.AddButton bgColor="#431EF5">수입+</m.AddButton>
              <m.AddButton bgColor="#EB0130">지출+</m.AddButton>
            </div>
          </div>
          <m.TotalContainer>
            <div>
              수입 :{" "}
              <m.ColorText color="#431EF5">
                {totalIncome.toLocaleString()} 원
              </m.ColorText>
            </div>
            <div>
              지출 :{" "}
              <m.ColorText color="#EB0130">
                {totalSpend.toLocaleString()} 원
              </m.ColorText>
            </div>
          </m.TotalContainer>
          <m.ReportContainer>
            <div>
              {incomeReports.map((report, index) => (
                <IncomeReport
                  key={index}
                  date={report.date}
                  text={report.text}
                  number={report.number}
                />
              ))}
            </div>
            <div>
              {spendReports.map((report, index) => (
                <SpendReport
                  key={index}
                  date={report.date}
                  text={report.text}
                  number={report.number}
                />
              ))}
            </div>
          </m.ReportContainer>
        </m.PocketContainer>
        <m.ChartContainer></m.ChartContainer>
        <m.ChartContainer></m.ChartContainer>
      </m.MainContainer>
    </>
  );
};

export default Main;
