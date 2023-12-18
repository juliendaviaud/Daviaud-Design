import React, { Fragment } from "react";
import ProjectDetails from "../Project-Details/ProjectDetails";
import tristanMeliaVideo from "../../assets/videos/tristan-melia.mp4";
import leftImg from "../../assets/images/tristan-melia/tristan-melia-left-img.png";
import rightImg from "../../assets/images/tristan-melia/tristan-melia-right-img.png";

const PTristanMelia = () => {
  const needsText =
    "Tristan Mélia is a pianist, author and composer of jazz music. His old website no longer met his expectations, so he decided to call on my services. It was necessary for him to have a website, in order to have a certain online presence. His website had to meet all these needs. \n \n Namely, to make him known, to showcase his music and where it can be purchased, to keep his fans informed of his upcoming concert dates and performances, to showcase his Youtube channel, but most importantly, to be a showcase for his atmosphere and world on the web. The site would also enable those interested in his services (event organizers, magazines, TV channels and others...) to contact him.";

	const solutionText =
    "After our first meeting, Mr Mélia sent me all the photos, videos, music and content he had about himself. \n \n After much graphic research (mood boards, mock-ups, etc.), it became clear that a black, white and red website would enhance his world and atmosphere. Indeed, it turned out that many of his photos have a red tint, a black gradient effect, which I could take advantage of. What's more, the color black is often associated with professional, high-quality service. This perfectly represents the services offered by Mr. Mélia. \n \n Tristan Mélia's logo takes the initials of his first and last names and adds a musical note (or eighth note for musicians) attached to the letter T. Reminiscent of sheet music. The letter T is tilted, with the musical note added at the bottom. In this way, the letter T can also suggest a J, which is the first letter of the word \"Jazz\", Tristan Mélia's main musical style. \n \n Tristan Mélia wanted to be able to maintain his site himself (add videos, add upcoming concert dates, modify texts, change newsletter e-mail addresses, etc.). So I chose to use Wordpress as the main technology for this site. The addition of the Divi theme builder greatly enhances the simplicity of site content modification. This way, Mr Tristan Mélia can more easily maintain his website over time without having to learn how to code. \n \n To make the site look like the mock-ups I'd created, I had to add html, css and javascript code to customize the elements proposed by Divi. Mission accomplished, and Mr Mélia is very pleased with the site.";

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
		coloredMainTitle: "Created for Tristan Melia",
		mainTitle: "Tristan Mélia website",
		presentationVideo: tristanMeliaVideo,
		clientName: "Tristan Mélia",
		technologies: ["Adobe Xd", "Photoshop", "Wordpress", "Divi", "Html", "Css", "Javascript", "Git"],
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

export default PTristanMelia;
