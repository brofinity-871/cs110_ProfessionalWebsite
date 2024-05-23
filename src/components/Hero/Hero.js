import React from "react";
import "./Hero.css"
import heroImage from "./anonymous_ghost.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <img src={heroImage} alt="Joseph" className="hero-image"></img>
                <div className="ghost-emoji">xD</div>
                <div className="hero-description">
                    <p>Hello, I am <b>Joseph Flores</b> and I am a computer engineer. </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;