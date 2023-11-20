import { store, persistor } from "@/core/redux/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NextUIProvider } from "@nextui-org/react";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <NextUIProvider>
        <NextNProgress color="red" />
        <Component {...pageProps} />
      </NextUIProvider>
    </PersistGate>
  </Provider>
);

export default MyApp;
