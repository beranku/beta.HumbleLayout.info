// src/components/Testimonials.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function Testimonials() {

  return (
    <section id="testimonials">
      <div className="container">
        <h2><Translate>Customer Testimonials</Translate></h2>
        <blockquote><Translate>"Humble Layout provided us with a home that is both affordable and comfortable. The design maximizes space efficiently, and we love the modern look!" - Jane Doe</Translate></blockquote>
        <blockquote><Translate>"We were able to get a stylish, compact home that fits our budget perfectly. The optional loft area is a great addition for when we have guests." - John Smith</Translate></blockquote>
      </div>
    </section>
  );
}

export default Testimonials;