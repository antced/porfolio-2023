import React from 'react';
// import portfolio from '../../images/portfolio3.png'

export default function Portfolio() {
    return (
        <div className="main-page">
            {/* <img src={portfolio} alt="Portfolio Me" className="pageName" /> */}
            <section id="portfolio">

                <div className="port-container">

                    <div class="row justify-content-start">

                        <a href="https://antced.github.io/after-afters/" className="col-5 m-2 me-5 project">
                            After Afters
                        </a>

                        <a href="https://blooming-lowlands-22066.herokuapp.com" className="col-5 m-2 project">
                            Password Tracker
                        </a>

                        <a href="https://antced.github.io/weather-dashboard/" className="col-5 m-2 me-5 project">
                            Weather Dashboard
                        </a>

                        <a href="https://antced-note-taker.herokuapp.com/" className="col-5 m-2 project">
                            Note Taker
                        </a>

                        <a href="https://antced.github.io/cat_create/" className="col-5 m-2 me-5 project">
                            Cat Create
                        </a>

                        <a href="https://antced.github.io/rock-paper-scissors/" className="col-5 m-2 project">
                            RPS
                        </a>

                    </div>

                </div>

            </section>
        </div>
    );
}
