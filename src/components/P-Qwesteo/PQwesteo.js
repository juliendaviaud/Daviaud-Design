import React, { Fragment } from "react";
import ProjectDetails from "../Project-Details/ProjectDetails";
import qwesteoVideo from "../../assets/vidéos/qwesteo.mp4";
import leftImg from "../../assets/images/qwesteo/qwesteo-left-img.png";
import rightImg from "../../assets/images/qwesteo/qwesteo-right-img.png";

const PQwesteo = () => {
  const needsText =
    "Qwesteo is a company that enables its customers to obtain feedback and opinions from their own customers in their stores, via satisfaction terminals placed specifically at the checkout. \n \n Qwesteo has developed a web application, as well as a mobile application enabling their users to consult their customers' stats and opinions wherever they like. \n \n During our first interview, they told me about their need to improve and optimize the design and UX/UI of their products. Interested in my dual skills in design and web development, they asked me to join their team. I accepted.";

	const solutionText =
    "The first project I worked on was the Qwesteo mobile application. I was able to propose a new, cleaner and more modern design for this application. Qwesteo gave me the opportunity to make new proposals for new functionalities to be implemented for this application. I changed all the icons, the main colors (more pastel and fashionable), and the application's UX/UI. \n \n My second project was to design a new website for the brand. The previous one had an aging design. As the brand's logo was reused on all communication media, but also directly on the kiosks, it was important to keep it as it was. For me, not only the website, but also all media representing the Qwesteo brand had to adopt the logo's aesthetic. With this in mind, I decided to create a reminder of the logo, using gradations of blue throughout the site. A reminder of the logo will also be present in the form of double circles (one gray and one with a blue gradient), echoing the letter \"Q\" in the logo. \n \n Qwesteo has 3 sub-branches, each reflecting a specific business sector (retail, service and healthcare). I decided to associate colors and a blue gradient with each sector, with the aim of differentiating each branch from the others, while maintaining overall cohesion and coherence. \n \n I then worked on the design and development of new customer reports. Each design project was followed by a development phase (code) to implement the various projects. Having the opportunity to recreate an entire brand image for the whole company was really interesting and exciting.";

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
		coloredMainTitle: "Realized for Qwesteo",
		mainTitle: "Qwesteo products",
		presentationVideo: qwesteoVideo,
		clientName: "Qwesteo",
		technologies: ["Figma", "Photoshop", "Symfony" ,"Html", "Css", "Javascript", "Git"],
		jobs: ["Designer", "Développeur Front-end", "Développeur Back-end"],
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

export default PQwesteo;
