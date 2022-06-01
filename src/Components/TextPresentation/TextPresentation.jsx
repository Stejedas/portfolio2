
import React, { useState } from "react";
import { Modal } from "antd";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import cv from "../../Assets/pdf/CVSergioTejeda.pdf";
import emailjs from '@emailjs/browser';
import 'animate.css';

function TextPresentation() {
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
     
      <div className="presentation_contaienerDescription_form" >
      
        <div className="presentation_description_form">
        <h5>Sobre mi:</h5>
          <p>
            Hasta hace poco estaba enfocado en la contabilidad y las empresas.
            Desde la pandemia, descubrí la programación y se convirtió en mi
            hobbie hasta que decidí dar un paso más formándome como Full Stack
            Developer.
          </p>
          <p>
            Antes de empezar el curso estuve formándome de manera independiente
            durante seis meses en HTML, CSS y JavaScript, dentro del Bootcamp he
            ampliado mis conocimientos (NodeJS, React, Angular, TypeScript...).
          </p>
          <p>
            Tengo ganas de este nuevo reto que me he propuesto y de convertirme
            en un gran profesional aprendiendo día a día.
          </p>
          <p>
            Actualmente las tecnologías que mejor uso son React, CSS3, HTML5,
            Node, GIT, JavaScript, MongoDB , Bootstrap y SASS.
          </p>
          <p>
            Como soy un apasionado en el mundo del desarrollo en estos momentos
            estoy aprendiendo TypeScript y conexiones a tiempo real como es
            Socket.io.
          </p>
          <p>
            En un futuro no muy lejano también tengo pensado aprender más
            lenguajes y otro tipo de tecnologías como podria ser Vue JS,
            testing, redux, next js, docker, etc...
          </p>
        </div>
      </div>
      <div className="description_contact_button" onClick={showModal}>
        <div className="container_button_contact">
          <button className="button_contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contacto{" "}
          </button>
        </div>
      </div>

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
                placeholder="Nombre"
              />
            </li>
            <li>
              <label for="email">Email: </label>
              <input
                required
                type="email"
               placeholder="Email"
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
                placeholder="Su mensaje aquí..."
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
              <BsFillFileEarmarkPersonFill fontSize={60} color={"white"} />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TextPresentation;
