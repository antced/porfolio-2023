import React from 'react';
// import portfolio from '../../images/portfolio3.png'

export default function Portfolio() {
    return (
        <div className="main-page">
            {/* <img src={portfolio} alt="Portfolio Me" className="pageName" /> */}
            <section id="portfolio">

                <div className="port-container justify-content-start">

                    <div class="row">
                        
                        <a href="https://antced.github.io/after-afters/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 me-5 project project1">
                            after afters
                        </a>

                        <a href="https://blooming-lowlands-22066.herokuapp.com" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 project project2">
                            password tracker
                        </a>

                        <a href="https://antced.github.io/weather-dashboard/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 me-5 project project3">
                            weather dashboard
                        </a>

                        <a href="https://antced-note-taker.herokuapp.com/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 project project4">
                            note taker
                        </a>

                        <a href="https://antced.github.io/cat_create/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 me-5 project project5">
                            cat create
                        </a>

                        <a href="https://antced.github.io/rock-paper-scissors/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 project project6">
                            rps
                        </a>

                    </div>

                </div>

            </section>
        </div>
    );
}
