import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import supabase from "../supabaseClient";

interface Report {
  id?: number;
  date: string;
  content: string;
  amount: number;
}

export const fetchIncomeReports = createAsyncThunk<Report[]>(
  "income/fetchIncomeReports",
  async () => {
    const { data, error } = await supabase.from("income_reports").select("*");

    if (error) throw error;

    return data as Report[];
  }
);

export const addIncomeReport = createAsyncThunk<Report, Report>(
  "income/addIncomeReport",
  async (report: Report) => {
    const { data, error } = await supabase
      .from("income_reports")
      .insert([report]) // insert() 배열 형식으로 데이터 처리(단일 객체도 배열)
      // 왜 배열인가? insert 메서드는 배열 형식으로 데이터 처리.
      // 단일 객체도 배열로 감싸야 올바르게 처리된다.
      .select(); // select() 없으면 삽입된 데이터 반환X

    // 내역 추가 시, 오류 처리

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error("No data returned from Supabase.");
    }

    // 반환된 데이터 형식 확인
    const insertedData = data[0]; // data 배열 형태
    if (!insertedData) {
      throw new Error("Invalid data format");
    }

    console.log("Supabase insert data:", insertedData);

    return insertedData as Report;
  }
);

const incomeSlice = createSlice({
  name: "income", //slice 이름 정의, Redux 상태의 키
  initialState: [] as Report[],
  reducers: {}, // 동기 액션 정의 객체(미사용)

  // Redux 비동기 작업(createAsyncThunk)의 상태 변경 관리 부분
  // 비동기 액션의 상태에 따라 state 변경 정의
  extraReducers: (builder) => {
    builder.addCase(
      // 데이터 가져오기 비동기 작업 요청 완료 왜 Report[] ?
      fetchIncomeReports.fulfilled,
      (state, action: PayloadAction<Report[]>) => {
        // Report[] : Report 객체의 배열, 여러 개 Report 객체 포함
        // action.payload로 새로운 상태 설정
        console.log("Fetched income reports:", action.payload);
        return action.payload;
      }
    );
    builder.addCase(
      addIncomeReport.fulfilled,
      // 새 수입 내역 추가 비동기 작업 요청 완료 왜 Report[] ?
      (state, action: PayloadAction<Report>) => {
        console.log("Adding income report:", action.payload);
        // state.push를 통해 배열에 새 내역 추가
        state.push(action.payload);
        console.log("State after adding report:", state);
      }
    );
  },
});

export default incomeSlice.reducer;
