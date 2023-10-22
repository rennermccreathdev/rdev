import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Contact from "../../components/Contact";

const ContactPage = () => {
    return (
        <div class="fade">
            <Navbar />
            <div className="contact">
            <Contact />
            </div>
        </div>
    );
};

export default ContactPage;