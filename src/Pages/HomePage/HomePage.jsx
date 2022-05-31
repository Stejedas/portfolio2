import Header from "../../Components/Header/Header";
import TextPresentation from "../../Components/TextPresentation/TextPresentation";
import PicturePresentation from "../../Components/PicturePresentation/PicturePresentation";
import Skills from "../../Components/Skills/Skills";
import Footer from "../../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..

AOS.init();

function HomePage() {
  return (
    <>
      <Header></Header>

      <div
        className="container_PicturePresentation_structure"
        data-aos="zoom-in-down"
      >
        <PicturePresentation></PicturePresentation>
      </div>

      <div
        className="container_TextPresentation_structure"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <TextPresentation></TextPresentation>
      </div>

      <div
        className="container_Skills_structure"
        data-aos="fade-left"
        data-aos-duration="2500"
      >
        <Skills></Skills>
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
