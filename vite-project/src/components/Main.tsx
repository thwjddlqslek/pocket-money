import React from "react";
import * as m from "../styles/mainStyle";
import RegistModal from "./RegistModal";
import { BigDateSelector } from "./BigDateSelector";
import IncomeReport from "../components/IncomeReport";
import SpendReport from "../components/SpendReport";
import { useState } from "react";
import Header from "./Header";

interface Report {
  date: string;
  content: string;
  amount: number;
}

const Main: React.FC = () => {
  // 수기로 입력한 값.
  const [incomeReports, setIncomeReports] = useState<Report[]>([
    { date: "2024-08-01", content: "정기 용돈", amount: 500000 },
    { date: "2024-08-01", content: "알바", amount: 428100 },
    { date: "2024-08-01", content: "할아버지 용돈", amount: 100000 },
  ]);
  const [spendReports, setSpendReports] = useState<Report[]>([
    { date: "2024-08-01", content: "까까사먹음", amount: 3500 },
    { date: "2024-08-01", content: "커피", amount: 2000 },
    { date: "2024-08-01", content: "강의 교재", amount: 55000 },
    { date: "2024-08-01", content: "동창 모임", amount: 47500 },
    { date: "2024-08-01", content: "친구 생선", amount: 32000 },
    { date: "2024-08-01", content: "어버이날", amount: 30000 },
    { date: "2024-08-01", content: "하이디라오", amount: 87000 },
  ]);
  const totalIncome = incomeReports.reduce((acc, curr) => acc + curr.amount, 0);
  const totalSpend = spendReports.reduce((acc, curr) => acc + curr.amount, 0);
  const [showModal, setShowModal] = useState(false);
  const clickShowModal = () => {
    setShowModal(true);
  };
  const clickCloseModal = () => {
    setShowModal(false);
  };
  const handleAddIncome = (report: Report) => {
    setIncomeReports([...incomeReports, report]);
    setShowModal(false);
  };
  return (
    <>
      <Header totalIncome={totalIncome} totalSpend={totalSpend} />
      <m.MainContainer>
        <m.PocketContainer>
          <div>
            <BigDateSelector />
            <p>의 수입과 지출 내역</p>
            <div className="button-container">
              <m.AddButton bgColor="#431EF5" onClick={clickShowModal}>
                수입+
              </m.AddButton>
              <m.AddButton bgColor="#EB0130">지출+</m.AddButton>
              <RegistModal
                show={showModal}
                onClose={clickCloseModal}
                onAddIncome={handleAddIncome}
              />
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
                  content={report.content}
                  amount={report.amount}
                />
              ))}
            </div>
            <div>
              {spendReports.map((report, index) => (
                <SpendReport
                  key={index}
                  content={report.content}
                  amount={report.amount}
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
