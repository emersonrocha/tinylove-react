import React, { Component } from 'react';
import './Hero.css';

const Hero = (props) => (
  <header class="hero">
        <h1 class="hero__title">{props.coisa}</h1>
        <h2 class="hero__subtitle">{props.subtitle}</h2>
        <p class="hero__text">
          {props.text}
        </p>
  </header>
);

export default Hero;