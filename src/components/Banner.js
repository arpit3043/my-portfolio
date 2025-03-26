import 'animate.css';
import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Backend Developer", "Problem Solver", "Mentor"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div
                                    className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span
                                        className="tagline">Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        {`Hi! I'm Arpit Bhushan Sharma, `}
                                        <span className="txt-rotate" dataPeriod="1000"
                                              data-rotate='[" Backend Developer", " Problem Solver", " Mentor"]'>
                                            <span className="wrap">{text}
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                        🚀 Software Development Engineer | Scalable Systems & Real-time Communication
                                        I'm a Software Development Engineer with a deep expertise in Python, Java, and C++, specializing in backend development, microservices, and real-time communication systems.
                                        My technical skills span:
                                        🔹 Backend & APIs: FastAPI, Spring Boot, Django, Node.js, REST APIs

                                        🔹 Cloud & Infrastructure: AWS, Kubernetes, Docker, Terraform, Airflow

                                        🔹 Databases & Caching: PostgreSQL, MySQL, MongoDB, Redis, PL/SQL

                                        🔹 Messaging & Streaming: Kafka, WebRTC, Janus, Nginx

                                        🔹 Testing & Automation: Selenium, Vegeta, Appium, Mocha

                                        🔹 Development & DevOps: Git, Jenkins, Agile, SOLID Principles, Design Patterns
                                        I have hands-on experience in building scalable, high-performance microservices, optimizing system reliability, and integrating real-time voice & video communication solutions.
                                        Beyond engineering, I’m a passionate mentor—guiding aspiring developers full-time on ProPeers and Topmate.
                                        📌 Explore my projects, blog posts, and achievements on GitHub, Medium, and LinkedIn to learn more about my journey. Let's connect and build the future together! 🚀
                                    </p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle
                                        size={25}/>
                                    </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}