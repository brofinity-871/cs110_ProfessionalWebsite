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
                        <p>University of California - Riverside.</p>
                        <ul>
                            <li>Engineering Electromagnetics</li>
                            <li>Automata and Formal Languages</li>
                            <li>Sensing and Actuation for Embedded Systems</li>
                        </ul>
                    </div>
                    <p className="ucr-chant">Lets go Highlanders!</p>
                </div>
                <div className="cos">
                    <img src={COS} alt="College of the Sequoias" className="cos-img"></img>
                    <div className="cos-info">
                        <p>College of the Sequoias.</p>
                        <ul>
                            <li>Electrical Circuits</li>
                            <li>Calculus</li>
                            <li>Physics</li>
                        </ul>
                    </div>
                    <p className="cos-chant">Lets go Giants!</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;