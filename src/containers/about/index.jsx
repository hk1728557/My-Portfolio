import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaDatabase, FaApple, FaAndroid } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Hardeep Kumar",
  },
  {
    label: "DOB",
    value: "24-04-2024",
  },
  {
    label: "Address",
    value: "Hurhuru, Hazaribag, pin-825301, Jharkhand",
  },
  {
    label: "Email",
    value: "hk1728557@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7779978231",
  },
];

const jobSummary =
  "I am Hardeep Kumar, a skilled front-end Web developer  with experience in building interactive user interfaces and efficient Web applications And Figma Designer. Masters in Computer Application and a solid academic background, I am committed to continuously expanding my skills and delivering exceptional results in every project.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          {/* Front End Developer */}
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          {/*  Personal Information  */}
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(500px)",
              opacity: 0,
            }}
            end={{
              transform: "translateX(0px)",
              opacity: 1,
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        {/* service column */}
        <div className="about_content_servicesWrapper">
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_servicesWrapper_innerContent">
              <div>
                <FaDev size={40} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={40} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaAndroid size={40} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaApple size={40} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
