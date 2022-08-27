import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

/* 
  createSlice()
  1. 내부에 createAction 과 createReducer 함수가 사용되어있어, 따로 작성 안해도된다.
  2. 액션타입 자동생성된다. (name/reducer)
  3. extraReducers로 외부에서 만들어진 action을 통해 현재 slice에서 사용하는
     initialState에 변경을 가할 수 있다.(비동기 함수 처리 등에 사용됨)
  4. state에 직접 변경을 가하는 방식의 코드전개가 가능하다. 
    ( = 순수함수를 위해 굳이 newState정의하고 깊은복사 안해도된다)
*/
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 액션타입 자동생성 : counter/countUp
    countUp: (state) => {
      state.value += 1;
    },
    // 액션타입 자동생성 : counter/countDown
    countDown: (state) => {
      state.value -= 1;
    },
    // 액션타입 자동생성 : counter/setTarget
    setTarget: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// 슬라이스 : 액션함수들 + 리듀서
const { actions, reducer } = counterSlice;

// 액션 함수들
export const { countUp, countDown, setTarget } = actions;

export default reducer;
