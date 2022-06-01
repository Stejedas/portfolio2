import imgMe from "../../../src/Assets/pictureMe.jpeg";
import React, { useState } from "react";
import { Modal } from "antd";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import cv from "../../Assets/pdf/CVSergioTejeda.pdf";
import emailjs from '@emailjs/browser';
import 'animate.css';



function PicturePresentation (){

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

    return (<>
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
        <h4>Junior Front-end Developer</h4>
      </div>

      <Modal
        visible={visible}
        title="Contacto"
        onCancel={() => setVisible(false)}
        width={800}
        style={{ "margin-top": "10px", 'background-color': "#2b2e42" }}
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
               
                maxlength="100"
                className="prueba2"
                id="email" 
                name="reply_to"
                placeholder="Email"
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
    </>)
}

export default PicturePresentation