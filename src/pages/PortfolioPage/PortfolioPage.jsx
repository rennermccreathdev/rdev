import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";
import "./portfoliopage.css"

const PortfolioPage = () => {
    return (
        <>
        
            <Navbar />
            <div class="fade">
            <div className="portfolio">
            <Portfolio />
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default PortfolioPage;