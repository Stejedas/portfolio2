import { FaMobileAlt } from "react-icons/fa";
import { BsMailbox, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiRegisteredFill } from 'react-icons/ri'

function Footer() {
  return (
    <>
      <footer className="footer_container_form">
        <div className="footer_rrss_form">
          <BsLinkedin className="fs-3 mx-1" />
          <BsGithub className="fs-3 mx-1" />
        </div>
        <div>
        <div className="footer_firstData_form">
          <div className="footer_personalData_form">
          <FaMobileAlt className="fs-5" /> <p className="f-5"> - (+34) 648 519 656</p>
          </div>
          <div className="footer_personalData_form">
          <BsMailbox className="fs-5" /> <p className="f-5"> - stejedas3@gmail.com</p>
          </div>
        </div>
        <div className="footer_secondData_form">
        <RiRegisteredFill />
          <p className="m-0 fs-6"> Sergio Tejeda Sánchez De La Morena </p>
          
        </div>
        </div>
        <div className="container_button_contact">
            
            <button className="button_contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              Contact
            </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
