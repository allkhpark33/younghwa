import React from "react";
import Items from "./Items";

const Explore = ({ movies }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <Items key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Explore;
