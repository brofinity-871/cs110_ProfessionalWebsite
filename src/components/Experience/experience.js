import React from "react"
import "./experience.css"
import COS from "./COS.png"
import UCR from "./UCR.png"

const Experience = () => {
    return (
        <div>
            <div className="experience">
                <div className="ucr">
                    <img src={UCR} alt="University of California - Riverside" className="ucr-img"></img>
                    <div className="ucr-info">
                        <p className="school-name">University of California - Riverside</p>
                        <header className="hdr-skill">Top Courses</header>
                        <ul>
                            <li><p>Engineering Electromagnetics</p></li>
                            <li><p>Automata and Formal Languages</p></li>
                            <li><p>Sensing and Actuation for Embedded Systems</p></li>
                        </ul>
                    </div>
                    <p className="ucr-chant">Lets go Highlanders!</p>
                </div>
                <div className="cos">
                    <img src={COS} alt="College of the Sequoias" className="cos-img"></img>
                    <div className="cos-info">
                        <p className="school-name">College of the Sequoias</p>
                        <header className="hdr-skill">Top Courses</header>
                        <ul>
                            <li><p>Electrical Circuits I </p></li>
                            <li><p>Calculus A B C</p></li>
                            <li><p>Physics A B C</p></li>
                        </ul>
                    </div>
                    <p className="cos-chant">Lets go Giants!</p>
                </div>
            </div>
            <div className="Skills">
                <h2>SKILLS</h2>
                <div className="skill-pair">
                    <div className="skill-sw">
                        <header className="hdr-skill">Programming Languages</header>
                        <ul>
                            <li><p>C++ [Advanced]</p></li>
                            <li><p>HTML + CSS [Beginner]</p></li>
                            <li><p>JavaScript [Beginner]</p></li>
                        </ul>
                    </div>
                    <div className="skill-hw">
                        <header className="hdr-skill">Microcontrollers</header>
                        <ul>
                            <li><p>Arduino</p></li>
                            <li><p>FRDM-K64</p></li>
                        </ul>
                    </div>
                </div>
                <div className="skill-pair">
                    <div className="skill-sw">
                        <header className="hdr-skill">IDE's</header>
                        <ul>
                            <li><p>Visual Studio Code [Intermediate]</p></li>
                            <li><p>Arduino [Intermediate]</p></li>
                            <li><p>Kinetis Design Studio [Beginner]</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;