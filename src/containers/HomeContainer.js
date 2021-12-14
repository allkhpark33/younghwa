import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../modules/movies";
import Home from "../components/Home";

const HomeContainer = () => {
  const { data, loading, error } = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (loading & !data) return <div>loading...</div>;
  if (error) return <div>error occured</div>;
  if (!data) return null;

  const randomMovie = data[Math.floor(Math.random() * data.length)];

  return <Home randomMovie={randomMovie} />;
};

export default HomeContainer;
