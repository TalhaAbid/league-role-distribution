import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import useSwr from "swr";
import { leaguesResponseType } from "../types";
import { summonersFetcher } from "./apiHelpers";
import Rankings from "@components/Rankings";
import Layout from "@components/Layout";

const Home: NextPage = () => {
  const [region, setRegion] = useState("na1");
  console.log(region);
  //const { data, error } = useSwr("/api/getSummoners", summonersFetcher);

  return (
    <Layout setRegion={setRegion}>
      <div className="grid items-center justify-items-center">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Rankings _region={region} />
      </div>
    </Layout>
  );
};

export default Home;

/**



*/
