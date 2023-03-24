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
                            <a href="https://github.com/antced/after-afters"><i className="fa-brands white-icon fa-github fa-2 pt-2 pe-2 ps-4"></i></a>
                        </a>

                        <a href="https://myfriendlymonster.herokuapp.com/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 project project2">
                            my friendly monster
                            <a href="https://github.com/antced/my-friendly-monster"><i className="fa-brands white-icon fa-github fa-2 pt-2 pe-2 ps-4"></i></a>
                        </a>

                        <a href="https://antced.github.io/weather-dashboard/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 me-5 project project3">
                            weather dashboard
                            <a href="https://github.com/antced/weather-dashboard"><i className="fa-brands white-icon fa-github fa-2 pt-2 pe-2 ps-4"></i></a>
                        </a>

                        <a href="https://blooming-lowlands-22066.herokuapp.com/login" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 project project4">
                            password tracker
                            <a href="https://github.com/antced/password-tracker"><i className="fa-brands white-icon fa-github fa-2 pt-2 pe-2 ps-4"></i></a>
                        </a>

                        <a href="https://antced.github.io/cat_create/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 me-5 project project5">
                            cat create
                            <a href="https://github.com/antced/cat_create"><i className="fa-brands white-icon fa-github fa-2 pt-2 pe-2 ps-4"></i></a>
                        </a>

                        <a href="https://antced.github.io/rock-paper-scissors/" target="_blank" rel="noreferrer" className="col-12 col-lg-5 m-2 project project6">
                            rps
                            <a href="https://github.com/antced/rock-paper-scissors"><i className="fa-brands white-icon fa-github fa-2 pt-2 pe-2 ps-4"></i></a>
                        </a>

                    </div>

                </div>

            </section>
        </div>
    );
}
