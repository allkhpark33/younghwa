import React from "react";
import { useSelector } from "react-redux";
import Explore from "../components/Explore";

const ExploreContainer = () => {
  const { data } = useSelector((state) => state.movies.movies);
  return <Explore movies={data} />;
};

export default ExploreContainer;
