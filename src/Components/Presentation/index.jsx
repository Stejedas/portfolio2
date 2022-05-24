import imgMe from "../../../src/Assets/pictureMe.jpeg";
import React, { useState } from "react";
import { Modal, Button, Divider } from "antd";
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import cv from '../../Assets/pdf/CVSergioTejeda.pdf'

function Presentation() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault()
    console.log(e.target)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  console.log(visible);

  return (
    <>
      <div className="presentation_img_w100" onClick={showModal}>
        <img
          src={imgMe}
          alt="Sergio Tejeda"
          className="presentation_img_justify presentation_img_form"
        />
      </div>
      <div className="presentation_container">
        <div className="presentation_title_justify">
          <div className="presentation_lineTitle_form"></div>
          <h1> Sergio Tejeda</h1>
          <div className="presentation_lineTitle_form"></div>
        </div>
      </div>
      <div className="presentation_container">
        <h4>Junior Front-end</h4>
      </div>
      <div className="presentation_contaienerDescription_form">
        <div className="presentation_description_form">
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
        <div className="description_button_style"> Contacto </div>
      </div>

      <Modal
        visible={visible}
        title="Contacto"
        onCancel={() => setVisible(false)}
        width={800}
        style={{'margin-top': '10px'}}
        footer={null}
      >
      <div className="container_modal_direction">
        <form className="contact_Form_form prueba">
          <li>
            <label for="name">Nombre: </label>
            <input type="text" name="name" maxlength="100" className="prueba2" />
          </li>
          <li>
            <label for="email">Email: </label>
            <input type="email" name="email" maxlength="100" className="prueba2" />
          </li>
          <li>
            <label for="mensage">Mensaje: </label>
            <textarea name="mensage" className="prueba2" style={{height: "200px"}}  ></textarea>
          </li>
          <div className="modal_contact_buttons">
          <button key="back" onClick={handleCancel}>
            Cancelar
          </button>
          <button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Enviar
          </button>
          </div>
        </form>
        <div className="container_modal_downloadCV">
          <h5>CV</h5>
          <a href={cv} style={{'padding-bottom': '10px'}} download='CV_Sergio_Tejeda.pdf'><BsFillFileEarmarkPersonFill fontSize={60} color={'grey'}/></a>
        </div>
        </div>
      </Modal>
    </>
  );
}

export default Presentation;
