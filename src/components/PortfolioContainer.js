import React, { useState } from 'react';
import NavButtons from './NavButtons';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/style.css';
import backgroundVideo from '../videos/red2.mp4'
// import videoplayback from '../videos/joe.mp4'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // if you're on this page, render this page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section>
      <div className="overlay"></div>
      <video id="video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <div className="section">
        <h1 id="title" className="text-light d-inline-block">anthony cedrone</h1>
        {/* calls the nav bar tabs with the current page */}
        <NavButtons currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* rendering the page */}
        {renderPage()}
        <div className="icons">
          <a href="https://github.com/antced"><i class="fa-brands fa-github fa-3x pt-2 pe-2"></i></a>
          <a href="https://www.linkedin.com/in/anthony-cedrone/"><i class="fa-brands fa-linkedin fa-3x pt-2 pe-2"></i></a>
          <a href="https://antced.bandcamp.com/album/whats-mine"><i class="fa-brands fa-bandcamp fa-3x pt-2"></i></a>
          </div>
      </div>
    </section>
  );
}
