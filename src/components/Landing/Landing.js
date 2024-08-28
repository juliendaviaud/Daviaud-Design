import React, { Fragment, useEffect, useState } from "react";
import Isocahedron from "../Isocahedron";
import "./Landing.css";
import linkedin from "../../assets/images/linkedin.svg";
import googleDrive from "../../assets/images/google-drive.svg";
import heart from "../../assets/images/heart.svg";
import sparks from "../../assets/images/sparks.svg";
import fire from "../../assets/images/fire.svg";
import gradientSphere from "../../assets/images/gradient-sphere.svg";
import LandingPageNavigation from "../Landing-Page-Navigation/Landing-Page-Navigation";
import ModelScroll from "../Model-Scroll/ModelScroll";
import ProjectVideo from "../Projects-Video-Section/ProjectVideo";
import challengeVideo from "../../assets/videos/application-challenge.mp4";
import tristanMeliaVideo from "../../assets/videos/tristan-melia.mp4";
import qwesteoVideo from "../../assets/videos/qwesteo.mp4";
import MainMenu from "../Main-Menu/MainMenu";
import ContactForm from "../Contact-Form/ContactForm";
import { Link as LinkScroll } from "react-scroll";
import PreLoader from "../Pre-Loader/PreLoader";

const Landing = () => {
  /* const [loaded, setLoaded] = useState(null);
    
      useEffect(()=>{
        setLoaded(true);
      }, []); */

  const [isLoaded, setIsLoaded] = useState(true);

  const handleLoading = () => {
    setIsLoaded(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  const appChallengeProps = {
    projectName: "app-challenge",
    presentationVideo: challengeVideo,
  };

  const tristanMeliaProps = {
    projectName: "tristan-melia",
    presentationVideo: tristanMeliaVideo,
  };

  const qwesteoProps = {
    projectName: "qwesteo",
    presentationVideo: qwesteoVideo,
  };

  const skills = [
    "Sites internet",
    "Logos",
    "Bannières",
    "Applications mobile",
    "Branding",
    "infographie",
    "Cartes de visite",
    "UX/UI",
    "Affiches",
    "Publicités en ligne",
    "Brochures",
    "Icônes",
    "Montages vidéo",
    "Stands",
    "Réseaux sociaux",
    "Html",
    "Css",
    "Php",
    "Javascript",
    "React Js",
    "Wordpress",
    "Figma",
    "Xd",
    "Photoshop",
    "Indesign",
    "Illustrator",
    "Premiere pro",
    "Git",
  ];

  /* const [isMobile, setIsMobile] = useState(window.innerwidth < 1200); */

  /* useEffect(() => {
    window.addeventlistener("resize", () => {
        const isMobile = window.innerwidth < 1200;
        if (isMobile !== isMobile) setIsMobile(isMobile);
    }, false);
}, [isMobile]); */

  const displaySkills = skills.map((skill, index) => {
    return (
      <div key={index} className="skill-text-container">
        <p className="skill">{skill}</p>
      </div>
    );
  });

  /* const displayOptions = options.map((option, index) => {
		return (
		
			<p key={index}
			   className={`answerOptions ${userAnswer === option ? "selected" : null}`}
			   onClick={() => this.submitAnswer(option)}
			>
				<FaChevronRight />{ option }
			</p>
		)
	}) */

  return /* isLoaded ?  */(
    <Fragment>
      <MainMenu isAbsolute={true} />
      <div className="landing-page">
        <div id="landing" className="first-section">
          <div className="fs-container">
            <div className="fs-center-container">
              <div className="isocahedron-container">
                <Isocahedron />
              </div>

              <div className="fs-text-and-button-container">
                <div className="fs-text-container">
                  <h1>
                    Offrez vous le
                    <br />
                    <span> meilleur design</span> <br />
                    pour votre marque
                  </h1>
                  <p>
                    Designer innovant <br />&<br /> Développeur web
                  </p>
                </div>
                <LinkScroll
                  /* href="#contact" */ to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="gradient-button">Me contacter</button>
                </LinkScroll>
              </div>
            </div>

            <div className="social-networks">
              <div className="social-networks-container">
                <a
                  href="https://www.linkedin.com/in/julien-daviaud-demaille"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
                <a
                  href="https://cutt.ly/iI2c0Cz"
                  className="last-social-network"
                  target="_blank"
                >
                  <img src={googleDrive} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <LandingPageNavigation />
        {/* <ModelScroll /> */}
        <div id="reliability" className="third-section space-between-sections">
          <div className="ts-container">
            <div className="title-container">
              <h3 className="colored-title">Chapitre 1</h3>
              <h2>Communication et valeurs humaines</h2>
            </div>
            <div className="three-arguments-section">
              <div className="argument-container">
                <img src={heart} alt="Gradient heart image" />
                <h4>Bonne relation</h4>
                <p>
                  Les relations humaines sont très importantes pour moi. Je vous
                  garanti une excellente communication, honnête, fluide,
                  efficace et réactive.
                </p>
              </div>
              <div className="argument-container">
                <img src={sparks} alt="Gradient heart image" />
                <h4>Qualité</h4>
                <p>
                  La satisfaction de mes clients est fondamentale pour moi. Je
                  vous promet un design, un site internet que vous aimerez à
                  coup sûr et dont vous serez fier.
                </p>
              </div>
              <div className="argument-container">
                <img src={fire} alt="Gradient heart image" />
                <h4>Passion</h4>
                <p>
                  {/* Mes passions sont le design et le développement.  */}
                  Travaillez avec un designer et un développeur en une seule
                  personne. Ensemble, faisons de votre projet un succès.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {loaded &&  */}
        <div id="projects" className="fourth-section space-between-sections">
          <div className="fos-container">
            <div className="title-container">
              <h3 className="colored-title">Chapitre 2</h3>
              <h2>Projets</h2>
              <p>
                Cliquez sur les projets, pour connaitre
                <br />
                <br /> plus de détails les concernants
              </p>
            </div>
            <ProjectVideo {...appChallengeProps} />
            <ProjectVideo {...tristanMeliaProps} />
            <ProjectVideo {...qwesteoProps} />

            <a
              className="first-react-project"
              href="https://weather-app-julien-daviaud.netlify.app"
              target="_blank"
            >
              Lien vers mon cinquième projet React js: <br className="saut-de-ligne"></br>Weather map
            </a>

            <a
              className="first-react-project"
              href="https://to-do-list-daviaud-design.netlify.app"
              target="_blank"
            >
              Lien vers mon quatrième projet React js: <br className="saut-de-ligne"></br>To-do-list
            </a>

            <a
              className="first-react-project"
              href="https://messenger-ab7de.web.app"
              target="_blank"
            >
              Lien vers mon troisième projet React js: <br className="saut-de-ligne"></br>Sunrise Messenger (uniquement sur ordinateur)
            </a>

            <a
              className="first-react-project"
              href="https://marvel-quiz-e119f.web.app"
              target="_blank"
            >
              Lien vers mon premier projet React js: <br className="saut-de-ligne"></br>Marvel Quiz
            </a>
            {/* <ProjectVideo /> */}
            {/* <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div> */}
          </div>
        </div>
        {/* } */}
        <div id="skills" className="seventh-section space-between-sections">
          <div className="ss-container">
            <div className="title-container">
              <h3 className="colored-title">Chapitre 3</h3>
              <h2>Compétences</h2>
            </div>
            <div className="skills-container">{displaySkills}</div>
          </div>
        </div>
        <div id="timeline" className="eighth-section space-between-sections">
          <div className="es-container">
            <div className="title-container">
              <h3 className="colored-title">Chapitre 4</h3>
              <h2>Timeline</h2>
            </div>
            <div className="timeline">
              <div
                className="container left first-job" /* {`container ${isMobile ? "right" : "left"} first-job`} */ /* "container left first-job" */
              >
                <div className="timeline-content">
                  <h4>Qwesteo</h4>
                  <h5>1 an - 2022-2023</h5>
                  <p className="job-title">Designer UX/UI & Développeur web</p>
                  <h5 className="mobile-dates">1 an - 2022-2023</h5>
                  <p>
                    Redesign de toutes les solutions Qwesteo. Application
                    mobile, site vitrine, application web, rapports, etc.
                  </p>
                </div>
              </div>
              <div className="container right second-job">
                <div className="timeline-content">
                  <h4>Freelance</h4>
                  <h5>4 mois - 2021-2022</h5>
                  <p className="job-title">Designer UX/UI & Développeur web</p>
                  <h5 className="mobile-dates">4 mois - 2021-2022</h5>
                  <p>
                    Création d'un site internet pour une psychologue, un
                    pianiste professionnel et un site internet dans le monde de
                    l'aéronautique.
                  </p>
                </div>
              </div>
              <div className="container left third-job">
                <div className="timeline-content">
                  <h4>Spie ICS</h4>
                  <h5>1 an - 2020-2021</h5>
                  <p className="job-title">Designer UX/UI & Développeur web</p>
                  <h5 className="mobile-dates">1 an - 2020-2021</h5>
                  <p>
                    L'un de mes projets a été la réalisation d'une application
                    mobile, du design (charte graphique, mock-ups, etc.), au
                    back-end, en passant par le front-end.
                  </p>
                </div>
              </div>
              <div className="container right fourth-job">
                <div className="timeline-content">
                  <h4>C2LR</h4>
                  <h5>2 mois - 2019-2020</h5>
                  <p className="job-title">Designer UX/UI & SEO</p>
                  <h5 className="mobile-dates">2 mois - 2019-2020</h5>
                  <p>
                    L'objectif de ce stage était d'améliorer le référencement du
                    site de Mr Chappert. J'ai également créé des formulaires
                    pour ses clients.
                  </p>
                </div>
              </div>
              <div className="container left fifth-job">
                <div className="timeline-content">
                  <h4>World Venture</h4>
                  <h5>3 mois - 2019-2020</h5>
                  <p className="job-title">Designer UX/UI & Développeur web</p>
                  <h5 className="mobile-dates">3 mois - 2019-2020</h5>
                  <p>
                    World Venture m'ont fait part de leur besoin de redesigner
                    leur site interner. Les objectifs étaient d'améliorer le
                    design de leur site et d'ajouter de nouvelles
                    fonctionnalités.
                  </p>
                </div>
              </div>
              <div className="container right sixth-job">
                <div className="timeline-content">
                  <h4>Spate of</h4>
                  <h5>4 mois - 2019</h5>
                  <p className="job-title">Designer UX/UI & Développeur web</p>
                  <h5 className="mobile-dates">4 mois - 2019</h5>
                  <p>
                    Spate a eu besoin de mon aide pour redesigner leur site
                    internet, et d'ajouter de nouvelles pages possédant un
                    visuel en cohérence avec leur charte graphique.
                  </p>
                </div>
              </div>
              <div className="container left seventh-job">
                <div className="timeline-content">
                  <h4>Freelance</h4>
                  <h5>2 mois - 2017-2018</h5>
                  <p className="job-title">Designer UX/UI & Développeur web</p>
                  <h5 className="mobile-dates">2 mois - 2017-2018</h5>
                  <p>
                    Durant ma troisème année à l'université, J'ai eu
                    l'opportunité de réaliser deux sites internet. Le premier
                    traitant de co-voiturage et le second de recettes de
                    cuisine.
                  </p>
                </div>
              </div>
              <div className="container right eighth-job">
                <div className="timeline-content">
                  <h4>Cirad</h4>
                  <h5>1 mois - 2017-2018</h5>
                  <p className="job-title">Développeur web</p>
                  <h5 className="mobile-dates">1 mois - 2017-2018</h5>
                  <p>
                    Ce stage m'a permis d'améliorer mes compétences en
                    développement, mais aussi de découvrir les besoins du CIRAD
                    en informatique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="ninth-section">
          <div className="ns-container">
            <div className="title-and-form">
              <div className="title-container">
                <h2>
                  Une idée<br></br> pour votre business ?
                </h2>
                <h3 className="colored-title">Discutons en</h3>
              </div>
              <ContactForm />
            </div>
            <img className="big-gradient-sphere" src={gradientSphere} alt="" />
            <img
              className="small-gradient-sphere"
              src={gradientSphere}
              alt=""
            />
            <div className="end-page-social-networks">
              <div className="social-networks-container">
                <a
                  href="https://www.linkedin.com/in/julien-daviaud-demaille"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
                <a
                  href="https://cutt.ly/iI2c0Cz"
                  className="last-social-network"
                  target="_blank"
                >
                  <img src={googleDrive} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )/*  : (
    <PreLoader/>
  ) */;
};

export default Landing;
