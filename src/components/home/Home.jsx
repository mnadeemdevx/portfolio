import React from "react";

import Social from "./_components/Social";
import Data from "./_components/Data";
import ScrollDown from "./_components/ScrollDown";

import "./Home.css";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
