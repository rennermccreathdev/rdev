import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import "./contactpage.css"

const ContactPage = () => {
    return (
        <>
        <div class="fade">
            <Navbar />
            <div className="contact">
            <Contact />
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default ContactPage;