// src/components/Contact.js
import React from 'react';
import Translate from '@docusaurus/Translate';

function Contact() {

  return (
    <section id="contact">
      <div className="container">
        <h2><Translate>Contact Us</Translate></h2>
        <p><Translate>If you have any questions or would like to learn more about Humble Layout, feel free to contact us.</Translate></p>
        <p><Translate>Email: info@humblelayout.com</Translate></p>
        <p><Translate>Phone: +123 456 7890</Translate></p>
      </div>
    </section>
  );
}

export default Contact;