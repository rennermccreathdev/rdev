import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Home from "../../components/Home";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import "./homepage.css"

const HomePage = () => {

    return (
        <>
            <Navbar />
            <div class="fade">
            <Header />
            <div className="hometitle">
            <div className="logo">
            <Logo />
            </div>
            <div className="flexy">
            <Title />
            <Home />
            </div>
            </div>
            
            </div>
            <Footer />
            </>
    );
};

export default HomePage;