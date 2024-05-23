import React from "react"
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="about-background">
                    <h4>Interest</h4>
                    <p>I am passionate about learning the fundamentals of computer communication and organization. 
                        From top-down, computer architecture and operating system maps the course. From bottom-up, compilers and assembly build the essentials.
                    </p>
                </div>
                <div className="about-goals">
                    <h4>Goals</h4>
                    <p>I am working to become a computer architect in the long-run. 
                        For the meantime, networking and intermediate code for compilers are my next focus as I gain experience.
                    </p>
                </div>
            </div>
            <a 
                href="https://docs.google.com/document/d/13DIxTjHMWM0JLvQ_izQjVozBIYi0Wtgiav2FgQWC6Lg/edit?usp=sharing" 
                className="resume-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                Link to resume
            </a>
        </div>
    );
};

export default About;