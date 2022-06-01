import { Navbar } from "react-bootstrap";
import logo from "/Users/sergioylaura/Desktop/PORTFOLIO2022/proyect_portfolio/src/Assets/logo.png"; // cambiar por ruta src
import '../../style.css'

function Header() {
  return (
    <>
      <Navbar bg='' expand="md" className="header_container_padding pt-2" >
        <div>
          <img src={logo} alt="" className="imgLogo_jusitfy" />
        </div>
        <div className="header_colapseNav_widht">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="header_colapseNav_justify" >
            
              <a href="/" className="ov-btn-grow-skew">Home</a>
              <a href='#sobremi' className="ov-btn-grow-skew">Sobre mi</a>
              <a href="#skills" className="ov-btn-grow-skew">Skills</a>
              <a href="/portfolio" className="ov-btn-grow-skew">Portfolio</a>
             
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
