import { FaMobileAlt } from "react-icons/fa";
import { BsMailbox, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiRegisteredFill } from "react-icons/ri";
import 'animate.css';
import cv from "../../Assets/pdf/CVSergioTejeda.pdf";
import emailjs from '@emailjs/browser';
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { useState } from "react";

import { Modal } from "antd";

function Footer() {

  const [loading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  

  const handleCancel = () => {
    setVisible(false);
  };
  

  const sendEmail = e => {
    e.preventDefault()
    console.log('hola')
    emailjs.sendForm('service_m5gaves','template_7d06myf',e.target,'nZ8pq_vJo9drXEAwA').then(res=>{
        
        console.log(res)
    })
    setVisible(false);
}

  return (
    <>
      <footer className="footer_container_form">
        <div className="footer_rrss_form">
          <BsLinkedin className="fs-3 mx-1 footer_rrhh_icons" />
          <BsGithub className="fs-3 mx-1 footer_rrhh_icons" />
        </div>
        <div>
          <div className="footer_firstData_form">
            <div className="footer_personalData_form">
              <FaMobileAlt className="fs-5" />{" "}
              <p className="f-5"> - (+34) 648 519 656</p>
            </div>
            <div className="footer_personalData_form">
              <BsMailbox className="fs-5" />{" "}
              <p className="f-5"> - stejedas3@gmail.com</p>
            </div>
          </div>
          <div className="footer_secondData_form">
            <RiRegisteredFill className="mx-2"/>
            <p className="m-0 fs-6 f-wrap"> Sergio Tejeda Sánchez De La Morena </p>
          </div>
        </div>
        <div className="container_contact">
          <div className="container_button_contact">
            <button className="button_contact" onClick={showModal}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Contact
            </button>
          </div>
        </div>
      </footer>
      
      <Modal
        visible={visible}
        title="Contacto"
        onCancel={() => setVisible(false)}
        width={800}
        style={{ "margin-top": "10px" }}
        footer={null}
      >
        <div className="container_modal_direction">
          <form className="contact_Form_form prueba" onSubmit={sendEmail}>
            <li>
              <label for="name">Nombre: </label>
              <input
                required
                id="name"
                name="from_name"
                type="text"
                maxlength="100"
                className="prueba2"
              />
            </li>
            <li>
              <label for="email">Email: </label>
              <input
                required
                type="email"
               
                maxlength="100"
                className="prueba2"
                id="email" 
                name="reply_to"
              />
            </li>
            <li>
              <label for="mensage">Mensaje: </label>
              <textarea
                required
                className="prueba2"
                style={{ height: "200px" }}
                id="message" 
                name="message" 
              ></textarea>
            </li>
            <div className="modal_contact_buttons">
              <div className="modal_container_cancel">
                <button
                  key="back"
                  onClick={handleCancel}
                  className="modal_cancel_contact"
                >
                  <span> Cancelar </span>
                </button>
              </div>
              <div className="modal_container_submit">
                <button
                  key="submit"
                  type="submit"
                  loading={loading}
                  className="modal_submit_contact"
                >
                  <span> Enviar </span>
                </button>
              </div>
            </div>
          </form>
          <div className="container_modal_downloadCV">
            <h5>CV</h5>
            <a
              href={cv}
              style={{ "padding-bottom": "10px" }}
              download="CV_Sergio_Tejeda.pdf"
              className="animate__animated animate__heartBeat"
            >
              <BsFillFileEarmarkPersonFill fontSize={60} color={"grey"} />
            </a>
          </div>
        </div>
      </Modal>
    </>
    
  );
}

export default Footer;
