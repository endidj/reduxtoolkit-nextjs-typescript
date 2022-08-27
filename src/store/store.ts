import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const isProduction = process.env.NODE_ENV === "production";

const initialState = {};

/*
  configureStore는 reduxThunk(미들웨어)와 devtool(리덕스 개발용 크롬 확장앱 연동)을 자동 세팅해준다.
*/
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //.concat(logger),
  devTools: !isProduction,
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers], //사용자 정의 미들웨어
});

// 셀렉터의 상태의 타입으로 쓰려고  EX) useSelector((state:RootState)=> {...로직...})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useAppSelector : 기존의 useSelector를 추상화한 것.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// useAppDispatch : 기존의 useDispatch를 추상화한 것.
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
