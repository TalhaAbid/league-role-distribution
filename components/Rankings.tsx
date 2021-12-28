import React, { useMemo, useState, useEffect } from "react";
import { leaguesResponseType } from "../types";
import { Table } from "./Table";
import axios from "axios";

interface RankingsPropTypes {
  _region: string;
}

interface GenerateTableProps {
  _data: leaguesResponseType;
}

const GenerateTable = ({ _data }: GenerateTableProps) => {
  const data = useMemo(() => _data, [_data]);
  const columns = useMemo(
    () => [
      {
        Header: "IGN",
        accessor: "summonerName",
      },
      {
        Header: "league points",
        accessor: "leaguePoints",
      },
      {
        Header: "wins",
        accessor: "wins",
      },
      {
        Header: "losses",
        accessor: "losses",
      },
    ],
    []
  );
  return <Table data={data} columns={columns} />;
};

const Rankings = ({ _region }: RankingsPropTypes) => {
  const region = useMemo(() => _region, [_region]);
  const [challengerData, setChallengerData] = useState<leaguesResponseType>([]);
  let url: string;
  switch (region) {
    case "na1":
      url = "/api/getSummoners";
      break;
    case "lck":
      url = "/api/getSummonersKorea";
      break;
    case "euw1":
      url = "/api/getSummonersEu";
      break;
    default:
      url = "/api/getSummoners";
      break;
  }
  useEffect(() => {
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        region: "na1",
      },
    })
      .then((res) => res.data)
      .then((data) => data.entries)
      .then((arr: leaguesResponseType) =>
        setChallengerData(
          arr.sort((first, second) => second.leaguePoints - first.leaguePoints)
        )
      )
      .catch((err) => console.error(err));
  }, [url]);
  return <GenerateTable _data={challengerData} />;
};
export default Rankings;

/*



    <div>
      {data.map((player) => (
        <p key={player.summonerId}>
          ign:{player.summonerName} LP:{player.leaguePoints} winrate:{" "}
          {(player.wins / (player.losses + player.wins)) * 100}% wins:{" "}
          {player.wins} losses:{player.losses}
        </p>
      ))}
    </div>




*/
