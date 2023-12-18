import React, { Fragment } from "react";
import "./About.css";
import julien from "../../assets/images/julien.png";
import MainMenu from "../Main-Menu/MainMenu";

const About = () => {
  return (
    <Fragment>
      <MainMenu isAbsolute={true} />
      <div className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={julien} alt="Photo noir et blanc de Julien Daviaud" />
          </div>
          <div className="about-text-container">
            <h2 className="colored-title">About me</h2>
            <h1>My name is Julien Daviaud</h1>
            <p>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br></br>
              <br></br>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. */}
              Holder of a Master "Manager of computer projects" of the school
              Keyce Informatique, passionate about computer science and design I
              am also very sensitive to human relations and communication. So I
              naturally turned to the field of web and e-marketing.
              <br></br>
              <br></br>It is with pleasure that I will put my skills, my
              determination and my experience at your service, guiding you to
              the best in the realization of your personalized web project. From
              project to implementation, from design to implementation and SEO,
              from communication to personalized advice, I will be at your
              disposal to help you optimize your visibility and register your
              brand in the long term.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
