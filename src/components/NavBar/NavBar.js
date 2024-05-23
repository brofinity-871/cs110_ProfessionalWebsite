import React, {useEffect} from "react";
import "./NavBar.css"

const NavBar = () => {
    useEffect(() => {
    const handleNavLinkClick = (id) => {
        const element = document.getElementById(id);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = navbarHeight;

        if (element) {
            const offsetTop = element.offsetTop - offset;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    const navbarLinks = document.querySelectorAll('.nav-links a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            handleNavLinkClick(targetId);
        });
    });
    }, []);
    return (
        <nav className="navbar">
            <div className="navigation">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#links">Links</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;