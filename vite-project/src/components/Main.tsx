import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as m from "../styles/mainStyle";
import RegistModal from "./RegistModal";
import { BigDateSelector } from "./BigDateSelector";
import IncomeReport from "../components/IncomeReport";
import SpendReport from "../components/SpendReport";
import Header from "./Header";
import { RootState, AppDispatch } from "../store";
import { fetchIncomeReports, addIncomeReport } from "../store/incomeSlice";

interface Report {
  id?: number;
  date: string;
  content: string;
  amount: number;
}

const Main: React.FC = () => {
  // useSelector : Redux 스토어의 상태를 읽는 Hook
  const incomeReports = useSelector((state: RootState) => state.income);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    console.log("fetchIncomeReports 수행 완료");
    dispatch(fetchIncomeReports());
  }, [dispatch]);
  // 수기로 입력한 값.

  const [spendReports, setSpendReports] = useState([
    { date: "2024-08-01", content: "까까사먹음", amount: 3500 },
    { date: "2024-08-01", content: "커피", amount: 2000 },
    { date: "2024-08-01", content: "강의 교재", amount: 55000 },
    { date: "2024-08-01", content: "동창 모임", amount: 47500 },
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
  const handleAddIncome = async (report: Report) => {
    try {
      // unwrap() : redux-toolkit createAsyncThunk에서 반환된 Promise의 결과 처리할 때 사용하는 메소드
      await dispatch(addIncomeReport(report)).unwrap();
      setShowModal(false);
      console.log("[성공] 수입 내역 1건 추가 완료", report);
    } catch (err) {
      console.error("[실패] 수입 내역 1건 추가 불가", err);
    }
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
              <m.AddButton bgcolor="#431EF5" onClick={clickShowModal}>
                수입+
              </m.AddButton>
              <m.AddButton bgcolor="#EB0130">지출+</m.AddButton>
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
              {incomeReports.map((report) => (
                <IncomeReport
                  key={report.id}
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
