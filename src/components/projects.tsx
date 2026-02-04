import headerImage from "../assets/full-section-header-art.png";
import { Card } from "./card";

export function Projects() {
  return (
    <div className="projects">

      <img className="headerArt" src={headerImage} alt="Section Header Art" />
      
      <p>Aspiring technician and software-focused bachelor, looking to build the next generation of bleeding-edge infrastructure. I graduated with a First-Class Bachelor of Science (Hons) in Digital Technologies from Northampton University. My areas of expertise include Windows systems administration, Microsoft 365 and AD/DS administration, network engineering and architecture, software development and deployment, and technical support. I am an "OK" programmer.</p>
      
      <div className="cards">

        {/* first row :3 */}
        <Card inlineStat="80%" content="reduction in time through configured MDT/WDS task sequences, automated driver injection, and consistent deployment of Sysprep base images." />
        <Card inlineStat="200%" content="increase in user inflow from ~100 to 2000+ DAU, following a critical Esports exhibition where brand exposure was critical." />
        <Card inlineStat="100%" content="service availability for core infrastructure, with zero downtime during imaging, deployment and critical operational periods." />

        {/* second row :3 */}
        <Card inlineStat="99%" content="success rate on the deployment of updates, critical software, drivers, and patches across a lab environment of close to 100 devices." />
        <Card inlineStat="~30%" content="reduction in repeat support tickets following consistent configuration baselines, and clearer documentation for troubleshooting." />
        <Card inlineStat="40%" content="quicker first-time resolution of tickets through clearer fault isolation, structured escalation and troubleshooting during frontline IT support incidents." />
      
      </div>
    </div>
  );
}