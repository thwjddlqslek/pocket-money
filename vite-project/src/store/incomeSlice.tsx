import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import supabase from "../supabaseClient";

interface Report {
  id?: number;
  date: string;
  content: string;
  amount: number;
}

const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    return null;
  }
  return data.user;
};

// 수입 내역 불러오기
export const fetchIncomeReports = createAsyncThunk<Report[]>(
  "income/fetchIncomeReports",
  async () => {
    const user = await getCurrentUser();
    let query = supabase.from("income_reports").select("*");

    if (user) {
      // user_id가 있는 경우 해당 사용자의 데이터만 가져옴
      query = query.eq("user_id", user.id);
    } else {
      // user_id가 null인 경우 null을 비교하기 위해 is 사용
      query = query.is("user_id", null);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching income reports:", error.message);
      throw error;
    }

    return data as Report[];
  }
);

// 수입 내역 추가하기
export const addIncomeReport = createAsyncThunk<Report, Report>(
  "income/addIncomeReport",
  async (report: Report) => {
    const user = await getCurrentUser();

    const { data, error } = await supabase
      .from("income_reports")
      .insert([{ ...report, user_id: user?.id ?? null }]) // insert() 배열 형식으로 데이터 처리(단일 객체도 배열)
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

// 수입 내역 업데이트
export const updateIncomeReport = createAsyncThunk<Report, Report>(
  "income/updateIncomeReport",
  async (report: Report) => {
    console.log("Update Report:", report);
    const { data, error } = await supabase
      .from("income_reports")
      .update({
        content: report.content,
        amount: report.amount,
      })
      .eq("id", report.id) // Update where `id` matches `report.id`
      .select(); // Fetch the updated row
    console.log(report.id);
    if (error) {
      throw new Error(error.message);
    }
    const insertedData = data[0]; // data 배열 형태

    // Assuming data is an array and we're interested in the updated record
    return insertedData as Report;
  }
);

// 수입 내역 삭제하기
export const deleteIncomeReport = createAsyncThunk(
  "income/deleteIncomeReport",
  async (id: number) => {
    const user = await getCurrentUser();
    if (user) {
      const { error } = await supabase
        .from("income_reports")
        .delete()
        .eq("id", id)
        .eq("user_id", user.id);
      if (error) {
        throw new Error(error.message);
      }
    } else {
      const { error } = await supabase
        .from("income_reports")
        .delete()
        .eq("id", id);
      if (error) {
        throw new Error(error.message);
      }
    }

    return id; // 성공적으로 삭제된 항목의 ID를 반환
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
    builder.addCase(deleteIncomeReport.fulfilled, (state, action) => {
      return state.filter((report) => report.id !== action.payload);
    });

    builder.addCase(updateIncomeReport.fulfilled, (state, action) => {
      const index = state.findIndex(
        (report) => report.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    });
  },
});

export default incomeSlice.reducer;
