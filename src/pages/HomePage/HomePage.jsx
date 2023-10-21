import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Home from "../../components/Home";
import Logo from "../../components/Logo";
import "./homepage.css"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Logo />
            <div className="flexy">
            <Title />
            <Home />
            </div>
        </div>
    );
};

export default HomePage;