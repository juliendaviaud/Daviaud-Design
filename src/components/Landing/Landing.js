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

const Landing = () => {
  /* const [loaded, setLoaded] = useState(null);
    
      useEffect(()=>{
        setLoaded(true);
      }, []); */

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
    "Website",
    "Logo",
    "Banner",
    "Mobile App",
    "Branding",
    "infograpfic",
    "Business Cards",
    "UX/UIEvent",
    "Posters",
    "Digital ads",
    "Brochures",
    "Icons",
    "Video editing",
    "Stands",
    "Social media ads",
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

  return (
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
                    Offer you the <br />
                    <span>best design</span> <br />
                    for your brand
                  </h1>
                  <p>
                    Innovative designer <br />&<br /> Web Developper
                  </p>
                </div>
                <LinkScroll /* href="#contact" */to="contact" spy={true} smooth={true} duration={500}>
                  <button className="gradient-button">Contact me</button>
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
              <h3 className="colored-title">Chapter 1</h3>
              <h2>Reliability and humanity</h2>
            </div>
            <div className="three-arguments-section">
              <div className="argument-container">
                <img src={heart} alt="Gradient heart image" />
                <h4>Good relation</h4>
                <p>
                  Don’t worry about the person you’re working with. I guarantee
                  communication, human, transparent, honest, fluid, efficient
                  and responsive.
                </p>
              </div>
              <div className="argument-container">
                <img src={sparks} alt="Gradient heart image" />
                <h4>Quality</h4>
                <p>
                  My mission is your satisfaction. I will give my best to offer
                  you a quality service. A design, a website that you will love
                  and be proud of.
                </p>
              </div>
              <div className="argument-container">
                <img src={fire} alt="Gradient heart image" />
                <h4>Passion</h4>
                <p>
                  My passions lie in both design and development. Hire a
                  designer and developer in one person. Together, let’s make
                  your project a success.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {loaded &&  */}
        <div id="projects" className="fourth-section space-between-sections">
          <div className="fos-container">
            <div className="title-container">
              <h3 className="colored-title">Chapter 2</h3>
              <h2>Projects</h2>
              <p>click on the projects to see more details about them</p>
            </div>
            <ProjectVideo {...appChallengeProps} />
            <ProjectVideo {...tristanMeliaProps} />
            <ProjectVideo {...qwesteoProps} />
            <a className="first-react-project" href="https://marvel-quiz-e119f.web.app" target="_blank">Link to see my first Reactjs project</a>
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
              <h3 className="colored-title">Chapter 3</h3>
              <h2>Skills</h2>
            </div>
            <div className="skills-container">{displaySkills}</div>
          </div>
        </div>
        <div id="timeline" className="eighth-section space-between-sections">
          <div className="es-container">
            <div className="title-container">
              <h3 className="colored-title">Chapter 4</h3>
              <h2>Timeline</h2>
            </div>
            <div className="timeline">
              <div
                className="container left first-job" /* {`container ${isMobile ? "right" : "left"} first-job`} */ /* "container left first-job" */
              >
                <div className="timeline-content">
                  <h4>Qwesteo</h4>
                  <h5>1 year - 2022-2023</h5>
                  <p className="job-title">UX/UI Designer & Web developper</p>
                  <h5 className="mobile-dates">1 year - 2022-2023</h5>
                  <p>
                    Redesign of all solutions Qwesteo solutions. Mobile
                    application showcase site, web application, reports. etc.
                  </p>
                </div>
              </div>
              <div className="container right second-job">
                <div className="timeline-content">
                  <h4>Freelance</h4>
                  <h5>4 months - 2021-2022</h5>
                  <p className="job-title">UX/UI Designer & Web developper</p>
                  <h5 className="mobile-dates">4 months - 2021-2022</h5>
                  <p>
                    Creation of a website for a psychologist, a professional
                    pianist and a website in the world of aeronautics
                  </p>
                </div>
              </div>
              <div className="container left third-job">
                <div className="timeline-content">
                  <h4>Spie ICS</h4>
                  <h5>1 year - 2020-2021</h5>
                  <p className="job-title">UX/UI Designer & Web developper</p>
                  <h5 className="mobile-dates">1 year - 2020-2021</h5>
                  <p>
                    One of my projects was the creation of a web application,
                    from the choice of visuals (graphic charter and mock-up), to
                    back-end and front-end
                  </p>
                </div>
              </div>
              <div className="container right fourth-job">
                <div className="timeline-content">
                  <h4>C2LR</h4>
                  <h5>2 months - 2019-2020</h5>
                  <p className="job-title">UX/UI Designer & SEO</p>
                  <h5 className="mobile-dates">2 months - 2019-2020</h5>
                  <p>
                    The objective of this internship was to improve, using
                    Wordpress plugins, to improve the SEO of Mr Chappert's
                    website. I also created forms for his customers
                  </p>
                </div>
              </div>
              <div className="container left fifth-job">
                <div className="timeline-content">
                  <h4>World Venture</h4>
                  <h5>3 months - 2019-2020</h5>
                  <p className="job-title">UX/UI Designer & Web developper</p>
                  <h5 className="mobile-dates">3 months - 2019-2020</h5>
                  <p>
                    World Venture approached me with their need for a website.
                    The objective was to improve their site graphically, by
                    adding new functionality.
                  </p>
                </div>
              </div>
              <div className="container right sixth-job">
                <div className="timeline-content">
                  <h4>Spate of</h4>
                  <h5>4 months - 2019</h5>
                  <p className="job-title">UX/UI Designer & Web developper</p>
                  <h5 className="mobile-dates">4 months - 2019</h5>
                  <p>
                    Spate of needed help to redesign its website the design of
                    its website as well as the addition of new pages in line
                    with their graphic charter.
                  </p>
                </div>
              </div>
              <div className="container left seventh-job">
                <div className="timeline-content">
                  <h4>Freelance</h4>
                  <h5>2 months - 2017-2018</h5>
                  <p className="job-title">UX/UI Designer & Web developper</p>
                  <h5 className="mobile-dates">2 months - 2017-2018</h5>
                  <p>
                    During my year at university, I was given the opportunity to
                    create two websites. The first was about carpooling and the
                    second about cooking recipes.
                  </p>
                </div>
              </div>
              <div className="container right eighth-job">
                <div className="timeline-content">
                  <h4>Cirad</h4>
                  <h5>1 month - 2017-2018</h5>
                  <p className="job-title">Web developper</p>
                  <h5 className="mobile-dates">1 month - 2017-2018</h5>
                  <p>
                    This internship enabled me to improve my development skills,
                    but also to discover CIRAD's needs s IT needs.
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
                  Have an<br></br> idea for your business ?
                </h2>
                <h3 className="colored-title">Let's talk about it</h3>
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
  );
};

export default Landing;
