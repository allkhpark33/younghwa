import React from "react";
import { IMG_URL } from "../utils/configuration";
import { Link } from "react-router-dom";
import "./Items.css";

const Items = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movie/${movie.id}`} movie={movie}>
        <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
      </Link>
    </div>
  );
};

export default Items;
