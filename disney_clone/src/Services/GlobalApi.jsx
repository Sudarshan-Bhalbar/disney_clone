import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "83c38649104277c8fc16295a0b6b9274";
// https://api.themoviedb.org/3/movie/11?api_key=83c38649104277c8fc16295a0b6b9274

const getTrendingVideos = axios.get(movieBaseUrl +
  "/trending/all/day?api_key=" + api_key
);

export default { getTrendingVideos };
