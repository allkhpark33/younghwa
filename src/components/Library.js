import React from "react";
import Items from "./Items";

const getAllLikes = () => {
  const movies = [];

  for (const [key, value] of Object.entries(localStorage)) {
    if (!Number.isSafeInteger(Number(key))) continue;
    movies.push(JSON.parse(value));
  }

  return movies;
};

const Library = () => {
  const movies = getAllLikes();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <div>
              <Items key={movie.id} movie={movie} />
            </div>
          );
        })
      ) : (
        <p>There's no movie</p>
      )}
    </div>
  );
};

export default Library;
