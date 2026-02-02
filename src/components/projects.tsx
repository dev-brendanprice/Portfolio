import HeaderImage from "../assets/full-section-header-art.png";
import { Card } from "./card";

export function Projects() {
  return (
    <div className="projects">

      <img className="headerArt" src={HeaderImage} alt="Section Header Art" />
      
      <p>Aspiring network engineer and technician looking to build the next generation of bleeding-edge infrastructure. First-Class Bachelor of Science (Hons) in Digital Technologies from Northampton University. Lor-em ipsum sola dat ipsum far reh so me tih doh. Lorem ipsum sola dat ipsum far reh so me tih doh. Lore-m ipsum sola dat ipsum far reh so me tih doh. Lorem ipsum sola dat ipsum far reh so me tih doh. Lorem ipsum sola dat ipsum far reh so me tih doh.</p>
      
      <div className="cards">

        {/* first row :3 */}
        <Card inlineStat="80%" content="time reduction in image deployment, as opposed to manually upgrading clients ad-hoc, entire groups can be imaged simultaneously and on-the-fly." />
        <Card inlineStat="6000%" content="increase in user inflow from ~100 to 2000+ DAU, following a critical Esports exhibition where brand exposure was critical." />
        <Card inlineStat="50%" content="faster ticket resolution times following a critical, and reimagined, foundational change in how tickets are triaged and handled." />

        {/* second row :3 */}
        <Card inlineStat="80%" content="time reduction in image deployment, as opposed to manually upgrading clients ad-hoc, entire groups can be imaged simultaneously and on-the-fly." />
        <Card inlineStat="6000%" content="increase in user inflow from ~100 to 2000+ DAU, following a critical Esports exhibition where brand exposure was critical." />
        <Card inlineStat="50%" content="faster ticket resolution times following a critical, and reimagined, foundational change in how tickets are triaged and handled." />
      
      </div>
    </div>
  );
}