import axios from "axios";
const summonersFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export { summonersFetcher };
