import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Bio from "../../components/Bio";
import "./biopage.css"
import "../../App.css"
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
        <>
        
            <Navbar />
            <div class="fade">
            <div className="bio">
            
            <Bio />
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default HomePage;