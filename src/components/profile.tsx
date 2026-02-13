import profilePicture from "../assets/profile-picture.png";
import signature from "../assets/signature.svg";
import { ProfileLinks } from "./profile-links";

export function Profile() {
  return (
    <div className="profile">

      <div className="text-content">
        <div className="profile-name">Brendan Price, 22</div>
        <img src={profilePicture} alt="Profile Picture" className="profile-picture"></img>
        <p>Applying a rigorously developed blend of software engineering, Microsoft administration, network engineering and architecture, technical support, Windows systems expertise, and continuous improvement of resilient, scalable digital environments with broad real-world impact.</p>
      </div>

      <img src={signature} alt="Photo of Signature" className="profile-signature"></img>

      <ProfileLinks></ProfileLinks>

    </div>
  );
}