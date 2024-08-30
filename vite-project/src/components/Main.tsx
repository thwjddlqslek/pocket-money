import React, { useState, useEffect, useRef, useContext } from "react";
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
import supabase from "../supabaseClient";
import {
  fetchSpendReports,
  addSpendReport,
  deleteSpendReport,
} from "../store/spendSlice";
import ChartComponent from "./ChartComponent";
import LoginButton from "../components/LoginButton";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";

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
    const fetchData = async () => {
      const { data } = await supabase.auth.getUser();
      console.log("fetchIncomeReports, fetchSpendReports 수행 완료", data);
      dispatch(fetchIncomeReports());
      dispatch(fetchSpendReports());
    };
    if (!isMount.current) {
      isMount.current = true;
      fetchData();
    }
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
  // 년도별 reports 반환
  const filterReportsByYear = (reports: Report[]) => {
    return reports.filter((report) => {
      const reportDate = new Date(report.date);
      return reportDate.getFullYear() === selectedYear;
    });
  };
  // 월별 총 수입/지출
  const getMonthTotals = (reports: Report[]) => {
    const monthTotal: { [key: number]: number } = {};
    reports.forEach((report) => {
      const date = new Date(report.date);
      const month = date.getMonth() + 1;
      if (!monthTotal[month]) {
        monthTotal[month] = 0;
      }
      monthTotal[month] += report.amount;
    });
    return Array.from({ length: 12 }, (_, i) => monthTotal[i + 1] || 0);
  };

  const totalIncome = incomeReports.reduce((acc, curr) => acc + curr.amount, 0);
  const totalSpend = spendReports.reduce((acc, curr) => acc + curr.amount, 0);
  const filterIncomeData = filterReportsByYear(incomeReports);
  const filterSpendData = filterReportsByYear(spendReports);
  const incomeData = getMonthTotals(filterIncomeData);
  const spendData = getMonthTotals(filterSpendData);
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

  /* 지출 내역 함수 ====================================a===============================================================*/
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

  const { isDarkMode } = useContext(ThemeContext);

  /* ===================================================================================================================== */

  return (
    <>
      <Header totalIncome={totalIncome} totalSpend={totalSpend} />
      <LoginButton />
      <ThemeButton />
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
                $bgColor={isDarkMode ? darkTheme.income : lightTheme.income}
                onClick={() =>
                  clickShowModal(
                    isDarkMode ? darkTheme.income : lightTheme.income,
                    "수입",
                    false
                  )
                }
              >
                수입+
              </m.AddButton>
              <m.AddButton
                $bgColor={isDarkMode ? darkTheme.spend : lightTheme.spend}
                onClick={() =>
                  clickShowModal(
                    isDarkMode ? darkTheme.spend : lightTheme.spend,
                    "지출",
                    true
                  )
                }
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
              총 수입 :{" "}
              <m.ColorText
                color={isDarkMode ? darkTheme.income : lightTheme.income}
              >
                {totalIncome.toLocaleString()} 원
              </m.ColorText>
            </div>
            <div>
              총 지출 :{" "}
              <m.ColorText
                color={isDarkMode ? darkTheme.spend : lightTheme.spend}
              >
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
        <ChartComponent
          incomeData={incomeData}
          spendData={spendData}
          selectedYear={selectedYear}
        />
        <m.PocketContainer></m.PocketContainer>
      </m.MainContainer>
    </>
  );
};

export default Main;
