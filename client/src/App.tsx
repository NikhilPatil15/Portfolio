
import { AboutSection, ContactSection, HeroSection, ProjectsSection, ServicesSection, TechStackSection } from "./components";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection/>  
      <TechStackSection/>
      <ContactSection/>
    <Toaster position="top-right"/>
    </>
  );
}

export default App;
