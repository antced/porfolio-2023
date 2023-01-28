import React from 'react';
import Pdf from '../documents/Anthony_Cedrone_Resume.pdf';
// extract key value pairs from props
function NavButtons({ currentPage, handlePageChange }) {
  let onAbout = "";
  let onPortfolio = "";
  let onContact = "";
  
  if (currentPage === 'About') {
    onAbout = "btn hover-underline-animation active"
  } else {
    onAbout = "btn hover-underline-animation"
  }
  if (currentPage === 'Portfolio') {
    onPortfolio = "btn hover-underline-animation active"
  } else {
    onPortfolio = "btn hover-underline-animation"
  }
  if (currentPage === 'Contact') {
    onContact = "btn hover-underline-animation active"
  } else {
    onContact = "btn hover-underline-animation"
  }
  
  return (
    <div className="d-flex container viewport-header">
      <button
        href="#about"
        onClick={() => handlePageChange('About')}
        className={onAbout}
      >
        About
      </button>
      <button
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={onPortfolio}
      >
        Portfolio
      </button>
      <button
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={onContact}
      >
          Contact
        </button>
      <a
        href={Pdf}
        rel="noreferrer"
        target="_blank"
      >
        <button className="btn hover-underline-animation resume">
          Resume
        </button>
      </a>
    </div>
  );
}

export default NavButtons;
