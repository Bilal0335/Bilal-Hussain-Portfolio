import AboutSection from "./About/page";
import ContactSection from "./Contact/page";
import Hero from "./Hero/page";
import ProjectsSection from "./Projects/page";
import SkillsSection from "./Skills/page";

export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
   </div>
  );
}
