import { Navbar } from "react-bootstrap";
import logo from "/Users/sergioylaura/Desktop/PORTFOLIO2022/proyect_portfolio/src/Assets/logo.png"; // cambiar por ruta src
import '../../style.css'

function HeaderPortfolio() {
  return (
    <>
      <Navbar bg='' expand="md" className="header_container_padding pt-2">
        <div>
          <a href="/"><img src={logo} alt="" className="imgLogo_jusitfy" /></a>
        </div>
        <div className="header_colapseNav_widht">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="header_colapseNav_justify" >
            
              <a href="/" className="ov-btn-grow-skew">Home</a>
              <a href="/portfolio" className="ov-btn-grow-skew">Portfolio</a>
             
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default HeaderPortfolio;
