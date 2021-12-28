// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { leaguesResponseType, leaguesSummonerType } from "../../types";
const LeagueJS = require("leaguejs");

async function getSummoners() {
  const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY, {
    PLATFORM_ID: "euw1",
  });
  const response = leagueJs.League.gettingChallengerLeague(
    "RANKED_SOLO_5x5",
    "euw1"
  );
  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<leaguesResponseType>
) {
  console.log("body", req.body);
  let data: leaguesResponseType = await getSummoners();
  res.status(200).json(data);
}
