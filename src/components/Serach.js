import React from "react";
import Items from "./Items";

const Search = ({ searchMovies }) => {
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
