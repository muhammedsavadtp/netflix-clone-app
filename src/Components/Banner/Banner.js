import axios from "../../Axios";
import { apiKey, imageUrl } from "./../Constants/Constants";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
  };
  useEffect(() => {
    setNumber(generateRandomNumber);
  }, []);
  useEffect(() => {
    if (number) {
      axios
        .get(`/trending/all/day?api_key=${apiKey}&language=en-US`)
        .then((response) => {
          setMovie(response.data.results[number]);
        });
    }
  }, [number]);

  return movie ? (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""} )`,
      }}
    >
      <div className="content">
        <h1 className="movie-name">{movie.title}</h1>
        <div className="banner-button">
          <button>Play</button>
          <button>My list</button>
          <div className="discription-container">
            <h4 className="description">{movie ? movie.overview : ""}</h4>
          </div>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Banner;
