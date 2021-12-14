import React, { useState } from "react";
import { IMG_URL } from "../utils/configuration";
import "./Detail.css";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

const Detail = ({ movie }) => {
  const [isLike, setIsLike] = useState(localStorage.getItem(movie.id) !== null);

  const onClick = () => {
    const newLike = localStorage.getItem(movie.id) === null;
    if (newLike) {
      localStorage.setItem(movie.id, JSON.stringify(movie));
    } else {
      localStorage.removeItem(movie.id);
    }
    setIsLike(newLike);
  };

  return (
    <div>
      <img
        className="mainImg"
        src={`${IMG_URL}${movie.backdrop_path}`}
        alt={`${movie.title}`}
      />
      <br />
      <div className="info">
        <img
          className="poster"
          src={`${IMG_URL}${movie.poster_path}`}
          alt={`${movie.title}`}
        />
        <div style={{ width: "500px" }}>
          <h5 className="title">
            {movie.title}
            <span className="thumb" onClick={onClick}>
              {isLike ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </span>
          </h5>
          <p className="description">{movie.overview}</p>
          <span>{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
