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
            <h2 className="colored-title">À propos de moi</h2>
            <h1>Mon nom est Julien Daviaud</h1>
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
              Titulaire d’un bac+5 Manager de projets informatique de l’école
              Keyce Informatique, passionné d’informatique et de design je suis
              également très sensible aux relations humaines et à la
              communication. Je me suis donc tout naturellement orienté vers le
              domaine du web et du e-marketing.
              <br></br>
              <br></br>C’est avec plaisir que je mettrai mes compétences, ma
              détermination et mon expérience à votre service, vous guidant au
              mieux dans la réalisation de votre projet web personnalisé. Du
              projet à la réalisation, du design à l’implémentation et au
              référencement, de la communication au conseil personnalisé, je
              serai à votre écoute pour vous aider à optimiser votre visibilité
              et à inscrire votre marque dans la durée.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
