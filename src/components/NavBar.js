import {Container, Nav, Navbar} from "react-bootstrap";
import {useState, useEffect} from "react";
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import leetcode from "../assets/img/leetcode.svg";
import medium from "../assets/img/medium.svg";
import github from "../assets/img/github.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        {/*<img src={logo} alt="Logo" />*/}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                {/*<a href="#"><img src={navIcon1} alt=""/> onClick={() => openLink("https://linkedin.com/in/arpit3043")}</a>*/}
                                <a href="https://linkedin.com/in/arpit3043" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon1} alt="LinkedIn" />
                                </a>
                                <a href="https://instagram.com/arpit_bhushan_sharma" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon2} alt="Instagram" />
                                </a>
                                <a href="https://facebook.com/handsumboyarpit" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon3} alt="Facebook" />
                                </a>
                                <a href="https://www.leetcode.com/arpit3043" target="_blank" rel="noopener noreferrer">
                                    <img src={leetcode} alt="LeetCode" />
                                </a>
                                <a href="https://github.com/arpit3043" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="GitHub" />
                                </a>
                                <a href="https://arpit3043.medium.com" target="_blank" rel="noopener noreferrer">
                                    <img src={medium} alt="Medium" />
                                </a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd" onClick={() => console.log('Connect')}>
                                    <span>Let's connect!</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
