import React from "react";
import "../home/styles.css";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContectMePage = () => {
    navigate("/contact");
  };
  return (
    <section className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I`m Hardeep Kumar` <br />
          Front end Developer
        </h1>
      </div>

      {/* Animation apply on button */}
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContectMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
