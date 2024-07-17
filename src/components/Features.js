// src/components/Introduction.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function Features() {

  return (
    <section id="features">
      <div class="card">
        <div class="card__header">
          <h2><Translate>Key Features</Translate></h2>
        </div>
        <div class="card__body">
        <ul>
          <li><strong><Translate>Cost-effectiveness:</Translate></strong> <Translate>Affordable housing without compromising on quality.</Translate></li>
          <li><strong><Translate>Efficient use of space:</Translate></strong> <Translate>Smart design to utilize every square meter effectively.</Translate></li>
          <li><strong><Translate>Modern design:</Translate></strong> <Translate>Contemporary aesthetics that match today’s lifestyle.</Translate></li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;