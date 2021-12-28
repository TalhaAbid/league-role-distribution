// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { leaguesResponseType, leaguesSummonerType } from "../../types";
const LeagueJS = require("leaguejs");

async function getSummoners() {
  const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY, {
    PLATFORM_ID: "kr",
  });
  const response = leagueJs.League.gettingChallengerLeague(
    "RANKED_SOLO_5x5",
    "kr"
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
