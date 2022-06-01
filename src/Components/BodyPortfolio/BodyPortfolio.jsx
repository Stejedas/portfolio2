import { arrayProyects } from "../../Assets/data";
import {
  DiMongodb,
  DiNodejsSmall,
  DiCss3,
  DiHtml5,
  DiReact,
  DiJsBadge,
  DiSass,
} from "react-icons/di";
import { FiLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { useState } from "react";
import { Modal } from "antd";

function BodyPortfolio() {
  console.log(arrayProyects);

  /*
  USESTATE for MODAL => change de links to github, web
   */
  const [titleProyect, setTitleProyect] = useState('none')
  const [linkWeb, setLinkWeb] = useState("none");
  const [linkFront, setLinkFront] = useState("none");
  const [linkBack, setLinkBack] = useState("none");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

 

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openModal = (obj) => {
    setTitleProyect(obj.e.nameProyect ? obj.e.nameProyect : 'none')
    setLinkWeb(obj.e.linkWeb ? obj.e.linkWeb : "none");
    setLinkFront(obj.e.linkGitHubFront ? obj.e.linkGitHubFront : "none");
    setLinkBack(obj.e.linkGitHubBack ? obj.e.linkGitHubBack : "none");
  };

  console.log(linkWeb);
  console.log(linkFront);
  console.log(linkBack);

  return (
    <>
      <div className="container_portfolio_sizes">
        {arrayProyects.map((e, i) => {
          return (
            <div class="button-container-2">
              <span class="mas">
                <div className="overlayCard d-flex justify-content-center align-items-center flex-column">
                  <h1 className="">{e.nameProyect}</h1>
                  <div className="iconsProyects px-5 mt-3">
                    {e.LengUsed?.map((e, i) => {
                      if (e === "React") {
                        return (
                          <DiReact
                            key={i + 1}
                            className="react icon_portfolio"
                          />
                        );
                      } else if (e === "JavaScript") {
                        return (
                          <DiJsBadge
                            key={i + 1}
                            className="js icon_portfolio"
                          />
                        );
                      } else if (e === "HTML") {
                        return (
                          <DiHtml5
                            key={i + 1}
                            className="html icon_portfolio"
                          />
                        );
                      } else if (e === "CSS") {
                        return (
                          <DiCss3 key={i + 1} className="css icon_portfolio" />
                        );
                      } else if (e === "SCSS") {
                        return (
                          <DiSass key={i + 1} className="scss icon_portfolio" />
                        );
                      } else if (e === "Express") {
                        return (
                          <SiExpress
                            key={i + 1}
                            className="exp icon_portfolio"
                          />
                        );
                      } else if (e === "Node") {
                        return (
                          <DiNodejsSmall
                            key={i + 1}
                            className="node icon_portfolio"
                          />
                        );
                      } else if (e === "MongoDB") {
                        return (
                          <DiMongodb
                            key={i + 1}
                            className="mongo icon_portfolio"
                          />
                        );
                      } else if (e === "Boostrap") {
                        return (
                          <FaBootstrap
                            key={i + 1}
                            className="boost icon_portfolio"
                          />
                        );
                      }
                    })}
                  </div>
                  <p className="mt-4 fs-2">- {e.yearProyect} -</p>
                </div>
              </span>
              <button
                id="work"
                type="button"
                name="Hover"
                className={`bg${i + 1}`}
                onClick={() => {
                  showModal();
                  openModal({ e });
                }}
              ></button>
              showModal
            </div>
          );
        })}
      </div>
      <Modal
        title={titleProyect}
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
      <div className="container_modal_Portfolio">
        <div className="modal_Portlofio_content">
          {linkFront !== "none" ? (
            <a href={linkFront}><div className="modal_Portlofio_justify">
              <BsGithub />
              <p>Front</p>
            </div></a>
          ) : (
            <></>
          )}
          {linkBack !== "none" ? (
           <a href={linkBack}> <div className="modal_Portlofio_justify">
              <BsGithub />
              <p>Back</p>
            </div></a>
          ) : (
            <></>
          )}
          {linkWeb !== "none" ? (
            <a href={linkWeb}><div className="modal_Portlofio_justify">
              <FiLink />
              <p>Web</p>
            </div></a>
          ) : (
            <></>
          )}
        </div></div>
      </Modal>
    </>
  );
}

export default BodyPortfolio;
