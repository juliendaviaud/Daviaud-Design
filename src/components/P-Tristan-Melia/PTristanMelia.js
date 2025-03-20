import React, { Fragment } from "react";
import ProjectDetails from "../Project-Details/ProjectDetails";
import tristanMeliaVideo from "../../assets/videos/tristan-melia.mp4";
import leftImg from "../../assets/images/tristan-melia/tristan-melia-left-img.png";
import rightImg from "../../assets/images/tristan-melia/tristan-melia-right-img.png";

const PTristanMelia = () => {
  const needsText =
    "Tristan Mélia est un pianiste, auteur et compositeur de musique de Jazz. Son ancien site internet, ne correspondant plus à ses attentes, il décida de faire appel à mes services. Il était nécessaire pour lui d’avoir un site internet, dans le but d’avoir une certaine présence en ligne. Son site internet devait répondre à tous ces besoins. \n \n À savoir, le faire connaitre, mettre en avant ses musiques et sur quelle plateforme il est possible de les acheter, tenir informés ses fans de ses prochaines dates de concerts et de représentations, mettre en avant sa chaîne Youtube, mais encore plus important, être une vitrine de son atmosphère et de son univers sur le web. Ce site permettrait également aux personnes intéressées par ses services (organisateurs d’évènements, magazines, chaînes de télévision et autres…), de le contacter.";

  const solutionText =
    'Mr Mélia, après notre première réunion, m’a envoyé toutes les photos, vidéos, musiques et contenus qu’il possédait de lui. \n \n Après plusieurs recherches graphiques (mood boards, maquettes, etc.), il est apparu qu’un site internet noir, blanc et rouge mettrait en valeur son univers et son ambiance. En effet, il s’est avéré que beaucoup de ses photos possédaient une teinte rouge, un effet de dégradé noir, dont je pouvais tirer profit. De surcroit, souvent, la couleur noir est associée à un service professionnel et de qualité. Ce qui représente parfaitement les services que propose Mr Mélia. \n \n Le logo de Tristan Mélia reprend les initiales de son prénom et de son nom tout en rajoutant une note de musique (ou croche pour les musiciens) attachée à la lettre T, rappelant ainsi les partitions de musique. La lettre T est penchée et avec l’ajout de la note de musique en bas. De cette façon, la lettre T peut également faire penser à un J qui est la première lettre du mot "Jazz", qui est le style principal de musique de Tristan Mélia. \n \n Mr Mélia, tenait à pouvoir maintenir lui-même son site (ajouter des vidéos, ajouter les prochaines dates de concerts, modifier les textes, changer l’adresse mail d’envoi des newsletter, ect.). Ainsi, j’ai choisi d’utiliser Wordpress comme technologie principale pour ce site. L’ajout du thème builder Divi, améliore grandement la simplicité de modification du contenu du site. De cette façon, Mr Tristan Mélia pourra plus facilement maintenir son site internet dans le temps sans avoir à apprendre comment coder. \n \n Pour que le site ressemble aux maquettes que j’avais réalisées, j’ai dû ajouter du code html, css et javascript et ainsi customiser les éléments proposés par Divi. Mission réussie, le site plait beaucoup à Mr Mélia.';

  const galleryPhotos = [
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

  const lightboxPhotos = [
    {
      src: "../../assets/images/tristan-melia/tristan-melia-full-main-page.png",
      title: "Page principale",
      description: "Page principale",
      column: 1,
    },
    {
      src: "../../assets/images/tristan-melia/tristan-melia-full-contact-page.png",
      title: "Contact",
      description: "Contact",
      column: 2,
    },
    {
      src: "../../assets/images/tristan-melia/tristan-melia-full-albums-page.png",
      title: "Albums",
      description: "Albums",
      column: 2,
    },
    {
		src: "../../assets/images/tristan-melia/tristan-melia-full-concerts-page.png",
		title: "Concerts",
		description: "Concerts",
		column: 1,
	  },
    {
      src: "../../assets/images/tristan-melia/tristan-melia-full-biographie-page.png",
      title: "Biographie",
      description: "Biographie",
      column: 2,
    },
  ];

  const childProps = {
    coloredMainTitle: "Pianiste professionnel",
    mainTitle: "Tristan Mélia",
    isThereAVideo: true,
    presentationVideo: tristanMeliaVideo,
    presentationImage: "../../assets/images/app-challenge/image-1.jpg",
    clientName: "Tristan Mélia",
    technologies: [
      "Adobe Xd",
      "Photoshop",
      "Wordpress",
      "Divi",
      "Html",
      "Css",
      "Javascript",
      "Git",
    ],
    jobs: ["Designer", "Développeur Front-end", "Développeur Back-end"],
    needsImage: leftImg,
    needs: needsText,
    solutionImage: rightImg,
    solution: solutionText,
    isThereMobileMockup: false,
    galleryPhotos: galleryPhotos,
    lightboxPhotos: lightboxPhotos,
  };

  return (
    <Fragment>
      <ProjectDetails {...childProps} />
    </Fragment>
  );
};

export default PTristanMelia;
