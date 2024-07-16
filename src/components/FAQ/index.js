// src/components/FAQ.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function FAQ() {

  return (
    <section id="faq">
      <div className="container">
        <h2><Translate>FAQ</Translate></h2>
        <h3><Translate>Common Questions</Translate></h3>
        <p><strong><Translate>What is the size of the primary floor plan?</Translate></strong></p>
        <p><Translate>The primary floor plan covers 50 square meters.</Translate></p>
        <p><strong><Translate>How many bedrooms and bathrooms are included?</Translate></strong></p>
        <p><Translate>The floor plan includes two bedrooms and one bathroom.</Translate></p>
        <p><strong><Translate>Is there additional sleeping space available?</Translate></strong></p>
        <p><Translate>Yes, there is an optional loft area that can be used for additional sleeping space.</Translate></p>
      </div>
    </section>
  );
}

export default FAQ;