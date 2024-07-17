// src/components/Hero.js
import React from "react";
import Translate from "@docusaurus/Translate";
import './Hero.css';  // Import CSS souboru

function Hero() {
  return (
    <header class="hero">
      <div class="container text--center">
        <h1 class="hero__title">
            humble<br/>LAYOUT
        </h1>
        <p class="hero__subtitle">
          <Translate>full-fledged living optimized floor plan</Translate>
        </p>
        {/* <div class="buttons">
          <a class="button button--secondary button--outline button--lg" href="#explore">
            <Translate>Explore Floor Plans</Translate>
          </a>
        </div> */}
      </div>
    </header>
  );
}

export default Hero;
