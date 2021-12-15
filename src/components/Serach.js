import React from "react";
import { useSelector } from "react-redux";
import Items from "./Items";

const Search = () => {
  const { data } = useSelector((state) => state.movies.searchMovies);
  const searchMovies = data;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {searchMovies &&
        searchMovies.map((movie) => {
          return <Items key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default Search;
