import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Redux 적용 (for Next.js)
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
