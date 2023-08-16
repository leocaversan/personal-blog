import React from "react";
import style from "./Home.module.css";



import Header from "../../Components/Header";
import Avaliable from "../../Components/Avaliable";

const Home = () => {
    return (
        <div className={style.home__container}>
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