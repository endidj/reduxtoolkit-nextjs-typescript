// /*
//     ( slices/counterSlice.ts부터 보세요. )
//     액션이 발동됐을때, 비동기처리를 해야할때 사용하는
//     createAsyncThunk를 쓰는법.
// */

// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const getUsersThunk = createAsyncThunk(
//   "users/getUsersThunk",
//   async (thunkAPI) => {
//     try {
//       const res = await axios.get("https://api.github.com/users");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {},
//   // 비동기 처리 해야하는 액션함수 다루는방법
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUsersThunk.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(getUsersThunk.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(getUsersThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error; // action.error인 것을 주의
//       });
//   },
// });

// const { reducer } = counterSlice;

// export default reducer;
