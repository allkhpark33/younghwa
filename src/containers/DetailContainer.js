import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../modules/movies";
import Detail from "../components/Detail";

const DetailContainer = ({ movieId }) => {
  const { data, loading, error } = useSelector((state) => state.movies.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(movieId));
  }, [movieId, dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error occured</div>;
  if (!data) return null;

  return <Detail movie={data} />;
};

export default DetailContainer;
