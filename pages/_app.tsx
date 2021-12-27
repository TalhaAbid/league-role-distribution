import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [region, setRegion] = useState("na1");

  return (
    <Layout setRegion={setRegion}>
      <Component region={region} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
