import Head from "next/head";
import { prefix } from "../constants";

const Header = () => (
  <Head>
    <title>disney clone</title>
    <meta
      name="description"
      content="This was disney clone project by vishwanath kokare"
    />
    <link rel="icon" href={prefix + "/favicon.ico"} />
    <link rel="manifest" href={`${prefix}/manifest.json`} />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no"
    />
    <meta name="keywords" content="Keywords" />
    <link rel="apple-touch-icon" href={`${prefix}/apple-icon.png`}></link>
    <meta name="theme-color" content="#010E7D" />
  </Head>
);

export default Header;
