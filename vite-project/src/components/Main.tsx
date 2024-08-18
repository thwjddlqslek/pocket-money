import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as m from "../styles/mainStyle";
import RegistModal from "./RegistModal";
import { BigDateSelector } from "./BigDateSelector";
import IncomeReport from "../components/IncomeReport";
import SpendReport from "../components/SpendReport";
import Header from "./Header";
import { RootState, AppDispatch } from "../store";
import {
  fetchIncomeReports,
  addIncomeReport,
  deleteIncomeReport,
} from "../store/incomeSlice";

import {
  fetchSpendReports,
  addSpendReport,
  deleteSpendReport,
} from "../store/spendSlice";

interface Report {
  id?: number;
  date: string;
  content: string;
  amount: number;
}

const Main: React.FC = () => {
  // useSelector : Redux 스토어의 상태를 읽는 Hook
  const incomeReports = useSelector((state: RootState) => state.income);
  const spendReports = useSelector((state: RootState) => state.spend);
  const dispatch: AppDispatch = useDispatch();
  const isMount = useRef(false);
  // useEffect로 라이플사이클 제어하기
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("fetchIncomeReports, fetchSpendReports 수행 완료");
    dispatch(fetchIncomeReports());
    dispatch(fetchSpendReports());
  }, [dispatch]);

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
  };

  const totalIncome = incomeReports.reduce((acc, curr) => acc + curr.amount, 0);
  const totalSpend = spendReports.reduce((acc, curr) => acc + curr.amount, 0);
  const [showModal, setShowModal] = useState(false);
  const [modalColor, setModalColor] = useState("#EB0130"); // 지출 기준
  const [modalTitle, setModalTitle] = useState("지출"); // 지출 기준
  const [isSpendBttClicked, setIsSpendBttClicked] = useState(false); // 지출 기준

  /* Modal 함수 ===================================================================================================*/
  const clickShowModal = (
    color: string,
    title: string,
    spendClicked: boolean
  ) => {
    setModalColor(color);
    setModalTitle(title);
    setIsSpendBttClicked(spendClicked);
    setShowModal(true);
  };
  const clickCloseModal = () => {
    setShowModal(false);
  };

  /* 수입 내역 함수 ===================================================================================================*/
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
  const handleDeleteIncome = async (id: number) => {
    try {
      await dispatch(deleteIncomeReport(id)).unwrap();
      console.log("[성공] 수입 내역 1건 삭제 완료", id);
    } catch (err) {
      console.error("[실패] 수입 내역 1건 삭제 불가", err);
    }
  };

  const filteredIncomeReports = incomeReports.filter((report) => {
    const reportDate = new Date(report.date);
    return (
      reportDate.getFullYear() === selectedYear &&
      reportDate.getMonth() + 1 === selectedMonth
    );
  });

  const sortedIncomeReports = filteredIncomeReports.sort((a, b) => {
    if (a.date === b.date) {
      return a.amount - b.amount;
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  /* ===================================================================================================================== */

  /* 지출 내역 함수 ===================================================================================================*/
  const handleAddSpend = async (report: Report) => {
    try {
      // unwrap() : redux-toolkit createAsyncThunk에서 반환된 Promise의 결과 처리할 때 사용하는 메소드
      await dispatch(addSpendReport(report)).unwrap();
      setShowModal(false);
      console.log("[성공] 지출 내역 1건 추가 완료", report);
    } catch (err) {
      console.error("[실패] 지출 내역 1건 추가 불가", err);
    }
  };
  const handleDeleteSpend = async (id: number) => {
    try {
      await dispatch(deleteSpendReport(id)).unwrap();
      console.log("[성공] 지출 내역 1건 삭제 완료", id);
    } catch (err) {
      console.error("[실패] 지출 내역 1건 삭제 불가", err);
    }
  };

  const filteredSpendReports = spendReports.filter((report) => {
    const reportDate = new Date(report.date);
    return (
      reportDate.getFullYear() === selectedYear &&
      reportDate.getMonth() + 1 === selectedMonth
    );
  });

  const sortedSpendReports = filteredSpendReports.sort((a, b) => {
    if (a.date === b.date) {
      return a.amount - b.amount;
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  /* ===================================================================================================================== */

  return (
    <>
      <Header totalIncome={totalIncome} totalSpend={totalSpend} />
      <m.MainContainer>
        <m.PocketContainer>
          <div>
            <BigDateSelector
              onYearChange={handleYearChange}
              onMonthChange={handleMonthChange}
              selectedMonth={selectedMonth}
            />
            <p>의 수입과 지출 내역</p>
            <div className="button-container">
              <m.AddButton
                $bgColor="#431EF5"
                onClick={() => clickShowModal("#431ef5", "수입", false)}
              >
                수입+
              </m.AddButton>
              <m.AddButton
                $bgColor="#EB0130"
                onClick={() => clickShowModal("#EB0130", "지출", true)}
              >
                지출+
              </m.AddButton>
              <RegistModal
                show={showModal}
                onClose={clickCloseModal}
                isSpendBttClicked={isSpendBttClicked}
                onAddIncome={handleAddIncome}
                onAddSpend={handleAddSpend}
                modalColor={modalColor}
                modalTitle={modalTitle}
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
              {sortedIncomeReports.map((report) => (
                <IncomeReport
                  key={report.id!}
                  id={report.id!}
                  date={report.date}
                  content={report.content}
                  amount={report.amount}
                  onDelete={() => handleDeleteIncome(report.id!)}
                />
              ))}
            </div>
            <div>
              {sortedSpendReports.map((report) => (
                <SpendReport
                  key={report.id!}
                  id={report.id!}
                  date={report.date}
                  content={report.content}
                  amount={report.amount}
                  onDelete={() => handleDeleteSpend(report.id!)}
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
