// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { leaguesResponseType, leaguesSummonerType } from "../../types";
const LeagueJS = require("leaguejs");

process.env.LEAGUE_API_PLATFORM_ID = "na1";

console.log(process.env.LEAGUE_API_KEY);
const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY);

async function getSummoners() {
  const response = leagueJs.League.gettingChallengerLeague(
    "RANKED_SOLO_5x5",
    "na1"
  );
  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<leaguesResponseType>
) {
  let data: leaguesResponseType = await getSummoners();
  res.status(200).json(data);
}

/*
 * data.sort(
        (first: leaguesSummonerType, second: leaguesSummonerType) =>
          second.leaguePoints - first.leaguePoints
      )
 */
