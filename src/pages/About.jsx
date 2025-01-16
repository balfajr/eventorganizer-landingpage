import NavBar from "../components/NavBar";
import Hero from "../components/heroAbout";
import MeetCrew from "../components/meetOurCrew";
import Footer from "../components/Footer";




const About = () => {
  return (
    <div className="h-full bg-white">
      <NavBar />
      <Hero />
      <MeetCrew />
      <Footer />
    </div>
  )
}

export default About
