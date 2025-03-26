import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";
import leetcode from "../assets/img/leetcode.svg";
import medium from "../assets/img/medium.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/arpit3043" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn"/>
                            </a>
                            <a href="https://instagram.com/arpit_bhushan_sharma" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="Instagram"/>
                            </a>
                            <a href="https://facebook.com/handsumboyarpit" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="Facebook"/>
                            </a>
                            <a href="https://github.com/arpit3043" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub"/>
                            </a>
                            <a href="https://www.leetcode.com/arpit3043" target="_blank" rel="noopener noreferrer">
                                <img src={leetcode} alt="LeetCode"/>
                            </a>
                            <a href="https://arpit3043.medium.com" target="_blank" rel="noopener noreferrer">
                                <img src={medium} alt="Medium"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
