import React, { useRef } from "react";
import "./ProjectVideo.css";
import projectImg from "../../assets/images/project-img.jpg";
import { Link } from "react-router-dom";

const ProjectVideo = ({ projectName, presentationVideo }) => {
  const video = useRef(null);

  const mouseOnProject = () => {
    video.current.classList.remove("display-none");
    playVideo();
  };

  const mouseOffProject = () => {
    pauseVideo();
    video.current.classList.add("display-none");
  };

  const playVideo = () => {
    /* var isPlaying =
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > video.HAVE_CURRENT_DATA; */

    /* if (!isPlaying) { */
      /* setTimeout(() => { */
      /* var playPromise = video?.current.play(); */
      /* }, 500); */

      // Show loading animation.
  var playPromise = video?.current.play();
  /* console.log(playPromise); */
 
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
      video.current.play();
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
  };

  const pauseVideo = () => {
    /* console.log("play"); */
    video.current.pause();
  };

  return (
    <Link className="project-link" to={`/${projectName}`}>
    <div
      className={`project-video-container ${projectName}`} /* "project-video-container app-challenge" */
      onMouseOver={mouseOnProject}
      onMouseOut={mouseOffProject}
    >
      <video
        ref={video}
        className="display-none"
        /*  onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} */ src={
          presentationVideo
        }
        type="video/mp4"
        rel="prefetch"
        muted="muted"
        loop
      />
    </div>
    </Link>
  );
};

export default ProjectVideo;

/* https://codesandbox.io/p/sandbox/react-example-wwonj?file=%2FHello.js%3A25%2C49 */
