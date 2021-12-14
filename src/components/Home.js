import React from "react";
import { IMG_URL } from "../utils/configuration";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ randomMovie }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${IMG_URL}${randomMovie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        position: "fixed",
        opacity: 0.95,
      }}
    >
      <h1 className="h1">{randomMovie.title.toUpperCase()}</h1>
      <h3 className="h3">
        <Link
          to={`/movie/${randomMovie.id}`}
          style={{ textDecoration: "none", color: "#FFF" }}
        >
          OVERVIEW
        </Link>
      </h3>
    </div>
  );
};

export default Home;
