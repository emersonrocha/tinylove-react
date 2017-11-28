import React, { Component } from 'react';
import './Hero.css';

const Hero = (props) => (
  <header className="hero">
        <h1 className="hero__title">{props.coisa}</h1>
        <h2 className="hero__subtitle">{props.subtitle}</h2>
        <p className="hero__text">
          {props.text}
        </p>
  </header>
);

export default Hero;
