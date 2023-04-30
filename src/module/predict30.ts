// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import { Predict30Api, initialStateType } from "../types/Predict30";

export const getPredict30Data = createAsyncThunk(
  "Predict30Slice/getPredict30Data",
  async ():Promise<Predict30Api> => {
    const lat:string | null = sessionStorage.getItem("latitude");
    const lon:string | null = sessionStorage.getItem("longtitude");
    const res = await axios.get<Predict30Api>(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb`
    );
    return res.data;
  }
);

const initialState: initialStateType = {
  status : "default",
  apiData: null
}

const Predict30Slice = createSlice({
  name: "predict30",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 불러오는 로딩
    builder.addCase(getPredict30Data.pending, (state): void => {
      state.status = "loading";
    });
    // 불러왔을 때
    builder.addCase(
      getPredict30Data.fulfilled,
      (state, action: PayloadAction<Predict30Api>): void => {
        state.apiData = action.payload;
        state.status = "complete";
      }
    );
    // 불러오기 실패
    builder.addCase(getPredict30Data.rejected, (state): void => {
      state.status = "error";
    });
  }
})

export const {} = Predict30Slice.actions;
export default Predict30Slice.reducer;