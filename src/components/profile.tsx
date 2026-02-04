import profilePicture from "../assets/profile-picture.png";
import signature from "../assets/signature.svg";
import linkedin from "../assets/linkedin.svg";
import octo from "../assets/octo.svg";
import cv from "../assets/cv.svg";

export function Profile() {
  return (
    <div className="profile">

      <div className="text-content">
        <div className="profile-name">Brendan Price, 22</div>
        <img src={profilePicture} alt="Profile Picture" className="profile-picture"></img>
        <p>Applying a rigorously developed blend of software engineering, Microsoft administration, network engineering and architecture, technical support, Windows systems expertise, and continuous improvement of resilient, scalable digital environments with broad real-world impact.</p>
      </div>

      <div className="signature-links">
        <img src={signature} alt="Photo of Signature" className="profile-signature"></img>
        <div className="profile-links">
          <img src={linkedin} alt="LinkedIn Link" className="link"></img>
          <img src={octo} alt="GitHub Link" className="link"></img>
          <img src={cv} alt="CV Link" className="link"></img>
        </div>
      </div>

    </div>
  );
}