import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Portfolio from "../../components/Portfolio";

const PortfolioPage = () => {
    return (
        <div class="fade">
            <Navbar />
            <div className="portfolio">
            <Portfolio />
            </div>
        </div>
    );
};

export default PortfolioPage;