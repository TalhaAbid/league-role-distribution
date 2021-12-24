export interface leaguesSummonerType {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leaguePoints: number;
  losses: number;
  rank: string;
  summonerId: string;
  summonerName: string;
  veteran: boolean;
  wins: number;
}

export type leaguesResponseType = Array<leaguesSummonerType>;
