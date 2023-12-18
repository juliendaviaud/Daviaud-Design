import React, { Fragment } from "react";
import ProjectDetails from "../Project-Details/ProjectDetails";
import challengeVideo from "../../assets/videos/application-challenge.mp4";
import leftImg from "../../assets/images/app-challenge/left-img.png";
import rightImg from "../../assets/images/app-challenge/right-img.png";

const PAppChallenge = () => {
  const needsText =
    "Spie has decided to set up what they call \"challenges\". The aim of these challenges is to motivate sales teams, and more specifically salespeople, to sell more contracts to their customers. \n \n But first, before going any further, let's answer the question: \"What is a challenge?\". A challenge is a kind of challenge that any member of Spie's sales teams can sign up for. A challenge is only available for a defined period of time. During this period, registered salespeople can earn points for each sale they make. \n \n Once a certain number of points have been accumulated, they will be eligible for \"gifts\" offered by Spie, such as bicycles, Nintendo Switch, iPhones or even trips around the world. These challenges also feature a ranking system, to further increase the spirit of competition and, above all, team motivation. \n \n However, to make all this possible, Spie needed an application that would enable all those registered to track the evolution of their point totals, the rewards they obtain, their position in the ranking, etc...";

	const solutionText =
    "Spie asked me to develop this application on my own. In other words, I was in charge of the design, front-end development and back-end development of this application. \n \n For the design of the application, I wanted to keep the color blue (Spie's main color along with red) to represent the brand, but also to highlight the images and photos of the trips offered as rewards for these challenges. I also chose to use a lot of white, to give the application a very clean, modern look. Spie asked for a lot of elements on the screen, which convinced me to use a lot of white, in order to overload the user's eye as little as possible. \n \n As for the use of technologies, I wanted to stick to the basics, i.e. html, css, Javascript and Php. But also SQL for the database. This choice of technology was made to simplify the application's handling and maintenance by other developers in the future. That's why there are no frameworks or plugins in the code of this project.";

	const photos = [
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
		"../../assets/images/app-challenge/image-1.jpg",
	  ];

  const childProps = { 
		coloredMainTitle: "Application developed for Spie", 
		mainTitle: "Application Challenge",
		presentationVideo: challengeVideo,
		clientName: "Spie",
		technologies: ["Adobe Xd", "Photoshop", "Html", "Css", "Php", "Javascript", "Git"],
		jobs: ["Designer", "Front-end developer", "Back-end developer"],
		needsImage: leftImg,
		needs: needsText,
		solutionImage: rightImg,
		solution: solutionText,
		photos: photos
	 };

  return (
    <Fragment>
      <ProjectDetails {...childProps} />
    </Fragment>
  );
};

export default PAppChallenge;
