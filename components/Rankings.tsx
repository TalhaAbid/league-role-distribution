import React, { useMemo } from "react";
import { leaguesResponseType } from "../types";
import { useTable } from "react-table";
import { Table } from "./Table";

interface RankingsPropTypes {
  _data: leaguesResponseType;
}

const Rankings = ({ _data }: RankingsPropTypes) => {
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
  console.log("_data", _data);
  console.log("data", data[0]);

  return <Table data={data} columns={columns} />;
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
