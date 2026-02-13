import linkedin from "../assets/linkedin.svg";
import octo from "../assets/octo.svg";
import cv from "../assets/cv.svg";
import cvFile from "../assets/Brendan-Price-CV.pdf";

export function ProfileLinks() {
    return (
        <div className="profile-links">

            <a href="https://www.linkedin.com/in/brendanprice2003/" target="_bkank">
                <img src={linkedin} alt="LinkedIn Link" className="link"></img>
            </a>
            
            <a href="https://github.com/dev-brendanprice" target="_blank">
                <img src={octo} alt="GitHub Link" className="link"></img>
            </a>

            <a href={cvFile} download="Brendan-Price-CV.pdf">
                <img src={cv} alt="CV Link" className="link"></img>
            </a>

        </div>
    )
}