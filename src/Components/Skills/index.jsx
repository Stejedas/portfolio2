import { DiMongodb, DiNodejsSmall, DiCss3, DiHtml5, DiReact, DiJsBadge } from 'react-icons/di'



function Skills() {
    return (
        <>
        <div className="container_skills">
              <h3>Skills</h3>
              <div className="containerDescription_skills_justify">
                  <div className="description_skills_form">Dezcripcion</div>
                  <div className="animationcube_skills_form">
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
          </div>
          <div>
         </div>
        </>
    )
}

export default Skills;