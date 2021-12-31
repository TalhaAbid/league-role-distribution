import React, { useMemo, useState, useEffect } from "react";
import { leaguesResponseType, leaguesSummonerType } from "../types";
import { Table } from "./Table";
import axios from "axios";
import Loading from "./Loading";

interface RankingsPropTypes {
  _region: string;
}

interface GenerateTableProps {
  _data: leaguesResponseType;
  loading: boolean;
  region: string;
}

async function summonerHelper(summonerId: string, region: string) {
  let res = await axios({
    method: "post",
    url: "/api/getSummonerId",
    headers: {
      "Content-Type": "applications/json",
    },
    data: {
      summonerId: summonerId,
      region: region,
    },
  });
  return res;
}

function getSummonerPuuid(summonerId: string, region: string) {
  return summonerHelper(summonerId, region);
}

const GenerateTable = ({ region, _data, loading }: GenerateTableProps) => {
  const data = useMemo(() => _data, [_data]);

  const columns = useMemo(() => {
    let count = 1;
    return [
      {
        Header: "Rank",
        accessor: () => count++,
      },
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
      {
        Header: "summonerId",
        accessor: "summonerId",
      },
      {
        Header: "Winrate",
        accessor: (summoner: leaguesSummonerType) =>
          `${Math.round(
            ((summoner.wins / (summoner.wins + summoner.losses)) * 100 +
              Number.EPSILON) *
            100
          ) / 100
          } %`,
      },
      {
        Header: "puuid",
        accessor: (summoner: leaguesSummonerType) => {
          let res = getSummonerPuuid(summoner.summonerId, region);
          console.log("inside table", res);
          return "a";
        },
      },
    ];
  }, [region]);
  return loading ? <Loading /> : <Table data={data} columns={columns} />;
};

const Rankings = ({ _region }: RankingsPropTypes) => {
  const region = useMemo(() => _region, [_region]);
  const [challengerData, setChallengerData] = useState<leaguesResponseType>([]);
  const [loading, setLoading] = useState(false);
  let url: string;
  switch (region) {
    case "na1":
      url = "/api/getSummoners";
      break;
    case "kr":
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
    async function fetchData() {
      setLoading(true);
      const response = await axios({
        method: "get",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          region: "na1",
        },
      });
      let puuiDs = [];
      const data: leaguesResponseType = response.data.entries.sort(
        (first: leaguesSummonerType, second: leaguesSummonerType) =>
          second.leaguePoints - first.leaguePoints
      );
      setChallengerData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return (
    <GenerateTable region={region} loading={loading} _data={challengerData} />
  );
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
