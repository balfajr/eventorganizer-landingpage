import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

// FONT
import '@fontsource/prompt/100.css'; // Thin
import '@fontsource/prompt/400.css'; // Regular
import '@fontsource/prompt/700.css'; // Bold

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Content />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
