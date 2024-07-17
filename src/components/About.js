// src/components/Introduction.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function About() {

  return (
    <section id="about">
      <div class="card">
        <div class="card__header">
          <h2><Translate>About Humble Layout</Translate></h2>
        </div>
        <div class="card__body">
          <p><Translate>Humble Layout offers compact yet spacious home designs that provide the perfect balance between affordability and comfort. Our homes are designed to maximize space efficiency while maintaining a modern and stylish look.</Translate></p>
        </div>
      </div>
    </section>
  );
}

export default About;