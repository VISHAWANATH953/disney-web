import "../styles/globals.scss";
import Layout from "../components/Layout";
import { FC } from "react";
import { AppProps } from "next/app";

const App: FC = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
