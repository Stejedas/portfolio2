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
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function BodyPortfolio() {
  console.log(arrayProyects);

  return (
    <>
  

      <div className="container_portfolio_sizes">
        {  arrayProyects.map((e, i) => {
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
              ></button>
            </div>
          );
        }) }
      </div>
    </>
  );
}

export default BodyPortfolio;
