// src/components/Introduction.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function Introduction() {

  return (
    <section id="introduction">
      <div className="container">
        <h2><Translate>About Humble Layout</Translate></h2>
        <p><Translate>Humble Layout offers compact yet spacious home designs that provide the perfect balance between affordability and comfort. Our homes are designed to maximize space efficiency while maintaining a modern and stylish look.</Translate></p>
        <h3><Translate>Key Features</Translate></h3>
        <ul>
          <li><Translate>Cost-effectiveness: Affordable housing without compromising on quality.</Translate></li>
          <li><Translate>Efficient use of space: Smart design to utilize every square meter effectively.</Translate></li>
          <li><Translate>Modern design: Contemporary aesthetics that match today’s lifestyle.</Translate></li>
        </ul>
      </div>
    </section>
  );
}

export default Introduction;