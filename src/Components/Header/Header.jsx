import { Navbar, Nav } from "react-bootstrap";
import logo from "/Users/sergioylaura/Desktop/PORTFOLIO2022/proyect_portfolio/src/Assets/logo.jpg"; // cambiar por ruta src
import '../../style.css'

function Header() {
  return (
    <>
      <Navbar bg='' expand="md" className="header_container_padding pt-2">
        <div>
          <img src={logo} alt="" width="70px" height="70px" />
        </div>
        <div className="header_colapseNav_widht">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="header_colapseNav_justify" >
            
              <Nav.Link href="#home" className="ov-btn-grow-skew">Home</Nav.Link>
              <Nav.Link href="#link" className="ov-btn-grow-skew">Portfolio</Nav.Link>
             
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
