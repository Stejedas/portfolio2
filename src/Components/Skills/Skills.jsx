import {
  DiGithubBadge,
  DiNodejsSmall,
  DiCss3,
  DiHtml5,
  DiReact,
  DiJsBadge,
  DiAngularSimple,
  DiSass,
  DiMongodb,
  DiVisualstudio,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNetlify,
  SiVuetify,
  SiGitkraken,
} from "react-icons/si";
import { useEffect, useState } from "react";
import { arrayAllLeng } from "../../Assets/data";
import "animate.css";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("none");

  const [arraySeeSkill, setSeeSkills] = useState([]);

  const [classUnicCube, setClassUnicCube] = useState("cubespinner");

  const pruebaskillMastery = (value) => {
    arrayAllLeng.filter((e) => (e.name === value ? setSeeSkills(e) : ""));
  };

  useEffect(() => {
    pruebaskillMastery(selectedSkill);
  }, [selectedSkill]);

  const cubeChangeSkills = (value) => {
    if (value === "cubespinner") {
      return (
        <div className="cubespinner">
          <div className="face1 cubediv">
            <DiReact />
          </div>
          <div className="face2 cubediv">
            <DiCss3 />
            <DiSass />
          </div>
          <div className="face3 cubediv_special">
            <SiTypescript className="icons_cube_specialAll" />
            <DiAngularSimple className="icons_cube_specialAll" />
            <FaBootstrap className="icons_cube_specialAll" />

            <DiMongodb className="icons_cube_specialAll" />
            <SiExpress className="icons_cube_specialAll" />
            <SiNetlify className="icons_cube_specialAll" />
            <SiVuetify className="icons_cube_specialAll" />
            <DiVisualstudio className="icons_cube_specialAll" />
          </div>
          <div className="face4 cubediv">
            <DiHtml5 />
          </div>
          <div className="face5 cubediv">
            <DiJsBadge />
          </div>
          <div className="face6 cubediv_special">
            <DiGithubBadge className="icons_cube_special" />
            <SiGitkraken className="icons_cube_special" />
          </div>
        </div>
      );
    } else if (value === "cube_stop_react") {
      return (
        <div className="cubediv">
          <DiReact />
        </div>
      );
    } else if (value === "cube_stop_css") {
      return (
        <div className=" cubediv_special">
          <DiCss3 className="icons_cube_special" />
          <DiSass className="icons_cube_special" />
        </div>
      );
    } else if (value === "cube_stop_html") {
      return (
        <div className=" cubediv">
          <DiHtml5 />
        </div>
      );
    } else if (value === "cube_stop_git") {
      return (
        <div className="cubediv_special">
          <DiGithubBadge className="icons_cube_special" />
          <SiGitkraken className="icons_cube_special" />
        </div>
      );
    } else if (value === "cube_stop_js") {
      return (
        <div className=" cubediv">
          <DiNodejsSmall />
        </div>
      );
    } else if (value === "cube_stop_other") {
      return (
        <div className=" cubediv_special">
          <SiTypescript className="icons_cube_specialAll" />
          <DiAngularSimple className="icons_cube_specialAll" />
          <FaBootstrap className="icons_cube_specialAll" />

          <DiMongodb className="icons_cube_specialAll" />
          <SiExpress className="icons_cube_specialAll" />
          <SiNetlify className="icons_cube_specialAll" />
          <SiVuetify className="icons_cube_specialAll" />
          <DiVisualstudio className="icons_cube_specialAll" />
        </div>
      );
    }
  };

  const descriptionSkills = (value) => {
    if (value === "none") {
      return (
        <div className="description_skills_none animate__animated animate__bounceIn "></div>
      );
    } else {
      return (
        <div className="animate__animated animate__zoomIn">
          {" "}
          <h1 className="description_skills_title">{arraySeeSkill?.name}</h1>
          <div className="description_skills_columns">
            <ul>
              {arraySeeSkill?.skills?.map((e, i) => {
                return i <= 10 ? <li>{e}</li> : <></>;
              })}
            </ul>
            <ul>
              {arraySeeSkill?.skills?.map((e, i) => {
                return i > 10 ? <li>{e}</li> : <></>;
              })}
            </ul>
          </div>
        </div>
      );
    }
  };
  console.log(classUnicCube);

  return (
    <>
      <div className="container_skills">
        <h3>Skills</h3>
        <div className="containerDescription_skills_justify">
          <div className="listSkills_skills_display">
            {arrayAllLeng
              .filter((e) => e.name !== "none")
              .map((e, i) => {
                return (
                  <>
                    {" "}
                    <button
                      key={i}
                      onMouseLeave={() => {
                        setSelectedSkill("none");
                        setClassUnicCube("cubespinner");
                      }}
                      onMouseEnter={() => {
                        setSelectedSkill(e.name);
                        setClassUnicCube(e.class);
                      }}
                      className="css-button-sliding-to-bottom--sand"
                    >
                      {e.name}
                    </button>
                  </>
                );
              })}
          </div>
          <div className={`animationcube_skills_form ${selectedSkill}_cube`}>
            <div className="animation_cube_position ">
              {cubeChangeSkills(classUnicCube)}
            </div>
          </div>

          <div
            className={`description_skills_form ${selectedSkill}_description`}
          >
            {descriptionSkills(arraySeeSkill?.name)}
          </div>
        </div>
      </div>
      <div className="container_skills_form"></div>

   
    
    </>
  );
}

export default Skills;
