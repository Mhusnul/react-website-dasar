import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { homeSection } from "../Data/HomeSaction";
import { courseSaction } from "../Data/CourseSection";
import { PartnersSections, partnersList } from "../Data/PartnersSections";
import { contactSection } from "../Data/ContactSections";

import { tutorSaction, tutorList } from "../Data/TutorsSaction";
import parse from "html-react-parser";

import "../style/Home.css";
function Home() {
  return (
    <>
      <Navbar />
      {/*Home Saction */}
      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.conteent)}</div>
        </section>
      </div>

      {/*online coure */}
      <section id="courses">
        <div className="kolom">{parse(courseSaction.content)}</div>
        <img src={courseSaction.image} />
      </section>

      <section id="tutors">
        <div className="tengah">
          <div className="kolom">{parse(tutorSaction.content)}</div>
          <Tutors tutorList={tutorList} />
        </div>
      </section>
      <section id="partners">
        <div className="tengah">
          <div className="kolom">{parse(PartnersSections.content)}</div>
          <Partners partnersList={partnersList} />
        </div>
      </section>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
