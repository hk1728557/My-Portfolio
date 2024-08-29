import React from "react";
import { BsBezier } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/pageheader";
import skillsData from "./skillsData";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<BsBezier size={40} />} />

      {/* Skills section */}
      <div className="skills_content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_content-wrapper_inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-40vw)",
                opacity: 0,
              }}
              end={{
                transform: "translateX(0)",
                opacity: 1,
              }}
            >
              <h3 className="skills_content-wrapper_inner-content_category-text">
                {item.label}
              </h3>
              <div className="skills_content-wrapper_inner-content_progressbar-container">
                {item.data.map((skillItem, j) => (
                  <div className="progressbar-wrapper">
                    <p>{skillItem.skillName}</p>
                    <div className="progressbar">
                      <div
                        className="progressbar-fill"
                        style={{ width: `${skillItem.percentage}%` }}
                      >
                        <span className="progressbar-text">
                          {skillItem.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
