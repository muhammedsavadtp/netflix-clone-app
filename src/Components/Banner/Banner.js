import React from "react";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="movie-name">Move Title</h1>
        <div className="banner-button">
          <button>Play</button>
          <button>My list</button>
          <h4 className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            nulla
          </h4>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
