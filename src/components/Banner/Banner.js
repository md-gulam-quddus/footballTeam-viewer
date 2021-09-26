import React from "react";
import "./Banner.css";

const Banner = ({ title, logo }) => {
  return (
    <div className="banner" id="overlay">
      <h1>{title}</h1>
      <img src={logo} alt="" />
    </div>
  );
};

export default Banner;
