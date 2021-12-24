// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {leaguesResponseType, leaguesSummonerType} from '../../types'

process.env.LEAGUE_API_PLATFORM_ID = 'na1'
process.env.LEAGUE_API_KEY = 'RGAPI-6246bc6e-ecd4-47d4-ad28-f3356d92dae3';

const LeagueJS = require('leaguejs')
const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY);

async function getSummoners(){
    const response = leagueJs.League.gettingChallengerLeague('RANKED_SOLO_5x5','na1');
    return response;
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<leaguesResponseType>
) {
  const data = await getSummoners();
  res.status(200).json(data.entries.sort((first:leaguesSummonerType,second:leaguesSummonerType) => second.leaguePoints - first.leaguePoints  ))
}
