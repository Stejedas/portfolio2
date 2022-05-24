import {
  DiMongodb,
  DiNodejsSmall,
  DiCss3,
  DiHtml5,
  DiReact,
  DiJsBadge,
} from "react-icons/di";
import { useState } from "react";


function Skills() {
  const arraySkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.JS",
    "MongoDB",
    "SASS",
    "Boostrap",
    "GIT",
    "TypeScript",
    "Responsibe web desing",
  ];

  const [selectedSkill, updateSkill] = useState("none");

  console.log(selectedSkill);

  const skillMastery = (value) => {
    switch (value) {
      case "none":
        return <p>none</p>;
      case "CSS":
        return <p>css</p>;
      case "JavaScript":
        return <p>JS</p>;
      case "HTML":
        return <p>HTML</p>;
      case "React":
        return <p>React</p>;
      case "Node.JS":
        return <p>Node.JS</p>;
      case "MongoDB":
        return <p>MongoDB</p>;
      case "SASS":
        return <p>SASS</p>;
      case "Boostrap":
        return <p>Boostrap</p>;
      case "GIT":
        return <p>GIT</p>;
      case "TypeScript":
        return <p>TypeScript</p>;
      case "Responsive web desing":
        return <p>Responsive</p>;
      default:
     
    }
  };

  return (
    <>
      <div className="container_skills">
        <h3>Skills</h3>
        <div className="containerDescription_skills_justify">
          

          <div className="animationcube_skills_form">
          <div className="animation_cube_position">
            <div className="cubespinner">
              <div className="face1 cubediv">
                <DiReact />
              </div>
              <div className="face2 cubediv">
                <DiCss3 />
              </div>
              <div className="face3 cubediv">
                <DiNodejsSmall />
              </div>
              <div className="face4 cubediv">
                <DiHtml5 />
              </div>
              <div className="face5 cubediv">
                <DiJsBadge />
              </div>
              <div className="face6 cubediv">
                <DiMongodb />
              </div>
            </div>
            </div>
          </div>

          <div className="description_skills_form">
            {skillMastery(selectedSkill)}
          </div>

        </div>
      </div>
      <div className="container_skills_form">
        <div className="listSkills_skills_display">
          {arraySkills.map((e, i) => {
            return (
              <>
                <div
                  key={i}
                  onMouseLeave={()=> {
                    updateSkill('none');
                  }}
                  onMouseEnter={() => {
                    updateSkill(e);
                  }}
                  className='typeSkills_skills_form'
                >
                  {e}
                </div>
              </>
            );
          })}
        </div>
      </div>
  

      </>
  );
}

export default Skills;
