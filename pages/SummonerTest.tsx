import React, { useState } from "react";
import { useSortBy } from "react-table";
import axios from "axios";
const SummonerTest = () => {
  const [summonerId, setSummonerId] = useState("");
  const [data, setData] = useState({});
  const buttonClick = () => {
    axios({
      method: "post",
      url: "/api/getSummonerId",
      headers: {
        "Content-Type": "applications/json",
      },
      data: {
        summonerId: summonerId,
      },
    }).then((res) => setData(res.data));
  };
  return (
    <div className="flex flex-cols justify-center ">
      <div>data</div>
      <code>{JSON.stringify(data)}</code>
      <input
        type=""
        name=""
        value={summonerId}
        className="border border-black"
        onChange={(e) => setSummonerId(e.target.value)}
      />
      <button onClick={() => buttonClick()}>submit</button>
    </div>
  );
};

export default SummonerTest;
