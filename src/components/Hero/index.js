// src/components/Hero.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function Hero() {

  return (
    <header className="hero">
      <div className="container">
        <h1 className="hero__title"><Translate>Discover the Perfect Balance: Compact Yet Spacious Homes</Translate></h1>
        <p className="hero__subtitle"><Translate>Humble Layout - Your Ideal Home Redefined</Translate></p>
        <div className="buttons">
          <a className="button button--primary" href="#explore"><Translate>Explore Floor Plans</Translate></a>
        </div>
      </div>
    </header>
  );
}

export default Hero;