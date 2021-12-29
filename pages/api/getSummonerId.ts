import type { NextApiRequest, NextApiResponse } from "next";

const LeagueJS = require("leaguejs");

async function getSummonerInfo(summonerId: string, region: string) {
  const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY, {
    PLATFORM_ID: region,
  });
  const response = leagueJs.Summoner.gettingById(summonerId, region);
  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  console.log("body", JSON.parse(req.body));
  //let data = await getSummonerInfo(body.summonerId, body.region);
  res.status(200).json({ region: body.region, id: body.summonerId });
}
