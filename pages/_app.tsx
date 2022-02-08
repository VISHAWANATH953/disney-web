import "../styles/globals.scss";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
