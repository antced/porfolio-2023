import React from 'react';
import Pdf from '../documents/Anthony_Cedrone_Resume.pdf';

// extract key value pairs from props
function NavButtons({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex container justify-content-end viewport-header">
      <button
        href="#about"
        onClick={() => handlePageChange('About')}
        className="btn hover-underline-animation"
      >
        About
      </button>
      <button
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className="btn hover-underline-animation"
      >
        Portfolio
      </button>
      <button
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className="btn hover-underline-animation"
      >
          Contact
        </button>
      <a
        href={Pdf}
        rel="noreferrer"
        target="_blank"
      >
        <button className="btn hover-underline-animation">
          Resume
        </button>
      </a>
    </div>
  );
}

export default NavButtons;
