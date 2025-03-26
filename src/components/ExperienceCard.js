import { Col } from "react-bootstrap";

export const ExperienceCard = ({ role, company, duration, description, imgUrl, companyLink }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Company Logo" />
                <div className="proj-txtx">
                    <h4>{role} at <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a></h4>
                    <span>{duration}</span>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
};
