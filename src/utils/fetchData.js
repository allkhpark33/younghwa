import axios from "axios";
import { BASE_URL, API_KEY } from "./configuration";

export const fetchPopularMovies = async () => {
  const response = await axios
    .get(`${BASE_URL}movie/popular?api_key=${API_KEY}`)
    .then((res) => res.data.results);
  return response;
};

export const fetchMovie = async (movie_id) => {
  const response = await axios
    .get(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`)
    .then((res) => res.data);
  return response;
};

export const fetchSearchMovies = async (value) => {
  const response = await axios
    .get(`${BASE_URL}search/movie/?api_key=${API_KEY}&query=${value}`)
    .then((res) => res.data.results);
  return response;
};
