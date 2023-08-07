import React from "react";
import './index.css';

import Header from "../../Components/Header";
import Avaliable from "../../Components/Avaliable";

const Home = () => {
    return (
        <div className="home__container">
            <div>
                <Header/>
            </div>
            <div>
                <Avaliable/>
            </div>
        </div>
    );
};

export default Home;