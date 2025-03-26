import 'animate.css';
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import {ExperienceCard} from "./ExperienceCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import gupshup from "../assets/img/gupshup.png";
import TSYS from "../assets/img/TSYS.png";
import tcs from "../assets/img/tcs.png";
import ticketBookingSystem from "../assets/img/ticketBookingSystem.png";
import pathVisualizer from "../assets/img/pathVisualizer.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import maid from "../assets/img/maid.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Extractive Text Summarizer",
            description: "AI, Python, NLTK, LSTM, HTML, CSS",
            imgUrl: projImg1,
            github: "https://github.com/arpit3043/Extractive-Text-Summerization"
        }, {
            title: "URL Shortner",
            description: "Nodejs, javascript, MVC, REST-API, HTML, CSS",
            imgUrl: projImg2,
            github: "https://github.com/arpit3043/URL-Shortner"
        }, {
            title: "Video Calling Application - Meet",
            description: "Nodejs, javascript, MVC, REST-API, HTML, CSS, Janus, WebRTC, Websocket",
            imgUrl: projImg3,
            github: "https://github.com/arpit3043/Video-Calling-Application"
        }, {
            title: "Ticket Booking System",
            description: "Nodejs, javascript, typescript, REST-API, HTML, CSS, Recommendation System, content-based filtering",
            imgUrl: ticketBookingSystem,
            github: "https://github.com/arpit3043/ticketBookingSystem/tree/master/rheo-AI-assignment"
        }, {
            title: "Path Visualizer",
            description: "C++, HTML, CSS, React, Bootstrap, Dijkstra ALgorithm, Graph",
            imgUrl: pathVisualizer,
            github: "https://github.com/arpit3043/Path-Visualizer-Finder"
        }, {
            title: "Maid Match Making",
            description: "HTML, CSS, ReactJS, ReactNative, NodeJS",
            imgUrl: maid,
            github: "https://github.com/arpit3043/maid_app"
        }
    ];

    const experiences = [
        {
            role: "SDE II",
            company: "Gupshup Technology",
            duration: "Mar 2024 - May 2025",
            description: "Developing scalable microservices, optimizing Janus WebRTC performance, and enhancing VoIP solutions.",
            imgUrl: gupshup,
            companyLink: "http://gupshup.ai/"
        },
        {
            role: "SDE I",
            company: "TSYS Cardtech System LLP",
            duration: "Apr 2023 - March 2024",
            description: "Built backend solutions for payment gateways, migrating systems from C++ to Java and improving performance.",
            imgUrl: TSYS,
            companyLink: "https://www.tsys.com/"
        },
        {
            role: "System Engineer",
            company: "Tata Consultancy Services",
            duration: "Apr 2021 - Apr 2023",
            description: "Developed backend microservices using Java and Spring Boot, optimizing application monitoring and performance.",
            imgUrl: tcs,
            companyLink: "https://www.tcs.com/"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div
                                    className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>
                                        Projects
                                    </h2>
                                    <p>

                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Experience</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Achievements</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {experiences.map((experience, index) => (
                                                        <ExperienceCard key={index} {...experience} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>
                                                    1. Received Recommendation and Appreciation from VP - Gupshup for developing Integrated End-to-End Inbound Whatsapp Business Calling System.
                                                </p>
                                                <p>
                                                    2. Got Runner-Up prize for developing a summarizer integrated with whatsapp business calling and continue the distorted call with customer support over whatsapp business.
                                                </p>
                                                <p>
                                                    3. Received Best Performer Appreciation for Synthetic Monitoring with Selenium & for Knowledge Transfer Sessions on Python3.
                                                </p>
                                                <p>
                                                    4. Qualified Microsoft Technical Associate Exam for Python Developer conducted by Microsoft Technical Associates(MTA) with an aggregate of 72%.
                                                </p>
                                                <p>
                                                    5. Received appreciation letter from SARACA Solutions CEO for the throughout productive work in Internship & got the PPO.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right" src={colorSharp2}>
            </img>
        </section>
    )
}
