// src/components/FloorPlans.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function FloorPlans() {

  return (
    <section id="floor-plans">
      <div className="container">
        <h2></h2>
        <p><Translate>Our primary floor plan covers 50 square meters and includes two bedrooms, one bathroom, and an optional loft area for additional sleeping space.</Translate></p>
        <ul>
          <li><Translate>50 square meters of living space</Translate></li>
          <li><Translate>Two bedrooms</Translate></li>
          <li><Translate>One bathroom</Translate></li>
          <li><Translate>Optional loft area for additional sleeping space</Translate></li>
        </ul>
      </div>
    </section>
  );
}

export default FloorPlans;