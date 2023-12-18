import React, { Fragment, useEffect, useRef } from "react";
import "./ProjectDetails.css";
import MainMenu from "../Main-Menu/MainMenu";
import PhotoGallery from "../Photo-Gallery/PhotoGallery";

const ProjectDetails = ({
  coloredMainTitle,
  mainTitle,
  presentationVideo,
  clientName,
  technologies,
  jobs,
  needsImage,
  needs,
  solutionImage,
  solution,
  photos,
}) => {
  const video = useRef(null);

  const attemptPlay = () => {
    video &&
      video.current &&
      video.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  const displayTechnologies = technologies.map((technologie, index) => {
    return (
      /* <a key={index} href={"#" + anchor.key}>
        <li
          className={anchor.id === activeDot ? "active-dot" : ""}
          onClick={(e) => changeSelectedDot(e, anchor.id)}
        ></li>
      </a> */
      
        <li key={index}>{technologie}</li>
      

    );
  });

  const displayJobs = jobs.map((job, index) => {
    return(
      <li key={index}>{job}</li>
    )
  });

  /* const displayTechnologies = () => {
    const indents = [];
    for (var i = 0; i < 4; i++) {
      indents.push(<li key={i}>technologies[i]</li>);
    }
    console.log(indents);
    return indents;
  } */
  
  

  useEffect(() => {
    attemptPlay();
  }, []);

  const addLineBreak = (str) =>
    str.split("\n").map((subStr) => {
      return (
        <>
          {subStr}
          <br />
        </>
      );
    });

  return (
    <Fragment>
      <MainMenu isAbsolute={false} />
      <div>
        <div className="project-details-container">
          <div className="pd-header">
            <div className="pd-titles">
              <h3 className="colored-title">{coloredMainTitle}</h3>
              <h1>{mainTitle}</h1>
            </div>
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src={presentationVideo}
              ref={video}
            />
          </div>
          <div className="pd-body">
            <div className="informations">
              <div className="title-container">
                <h3 className="colored-title">Chapter 1</h3>
                <h2>Informations</h2>
              </div>
              <div className="information-container">
                <div className="client-container">
                  <p>Client</p>
                  <hr></hr>
                  <p>{clientName}</p>
                </div>
                <div className="technologies-container">
                  <div className="title-and-line">
                    <p>Technologies</p>
                    <hr></hr>
                  </div>
                  <div className="list-container">
                    <ul>
                      {displayTechnologies}
                    </ul>
                  </div>
                  {/* <div className="list-container">
                    <ul>
                      <li>{technologies[4]}</li>
                      <li>{technologies[5]}</li>
                      <li>{technologies[6]}</li>
                      <li>{technologies[7]}</li>
                    </ul>
                  </div> */}
                </div>
                <div className="postes-container">
                  <div className="title-and-line">
                    <p>Postes</p>
                    <hr></hr>
                  </div>
                  <ul>
                    {displayJobs}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pd-img-and-text">
              <div className="left-img">
                <img src={needsImage} alt="" />
              </div>
              <div className="pd-title-and-text-container">
                <div className="title-container">
                  <h3 className="colored-title">Chapter 2</h3>
                  <h2>Needs</h2>
                </div>
                <p>{addLineBreak(needs)}</p>
              </div>
            </div>
            <div className="pd-img-and-text">
              <div className="pd-title-and-text-container solution-text">
                <div className="title-container">
                  <h3 className="colored-title">Chapter 3</h3>
                  <h2>Solutions</h2>
                </div>
                <p>{addLineBreak(solution)}</p>
              </div>
              <div className="right-img">
                <img src={solutionImage} alt="" />
              </div>
            </div>
            <div className="pd-solution"></div>
            {/* <div className="pd-gallery">
              <PhotoGallery photos={photos} />
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDetails;
