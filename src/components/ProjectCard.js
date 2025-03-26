import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, github}) => {

    const  displayProjectInfo = () => {
        // console.log(github);
        window.open(github, "_blank");
    }
    return (
        <Col size={12} sm={6} md={4}  onClick={displayProjectInfo}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
