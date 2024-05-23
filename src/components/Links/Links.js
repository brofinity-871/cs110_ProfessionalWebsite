import React from "react"
import "./Links.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
    return (
        <div>
            <div className="links">
                <a href="https://github.com/brofinity-871" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', fontSize: '50px', color: '#000' }}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/joseph-flores-98446b264" target="_blank" rel="noopener noreferrer" style={{ fontSize: '50px', color: '#0077b5' }}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    );
};

export default Links;