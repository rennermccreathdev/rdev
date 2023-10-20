import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Bio from "../../components/Bio";
import "./biopage.css"
import "../../App.css"

const HomePage = () => {
    return (
        <div class="fade">
            <Navbar />
            <Header />
            <Title />
            <Bio />
        </div>
    );
};

export default HomePage;