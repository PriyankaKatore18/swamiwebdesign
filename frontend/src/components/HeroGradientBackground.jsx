import React from "react";
import "./HeroGradientBackground.css";

const HeroGradientBackground = () => {
  return (
    <div className="hero-gradient-bg" aria-hidden="true">
      <div className="hero-gradient-bg__orb hero-gradient-bg__orb--1" />
      <div className="hero-gradient-bg__orb hero-gradient-bg__orb--2" />
      <div className="hero-gradient-bg__orb hero-gradient-bg__orb--3" />
      <div className="hero-gradient-bg__grid" />
    </div>
  );
};

export default HeroGradientBackground;
