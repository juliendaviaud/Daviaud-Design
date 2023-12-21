import React, { Fragment } from "react";
import ProjectDetails from "../Project-Details/ProjectDetails";
import challengeVideo from "../../assets/videos/application-challenge.mp4";
import leftImg from "../../assets/images/app-challenge/left-img.png";
import rightImg from "../../assets/images/app-challenge/right-img.png";

const PAppChallenge = () => {
  const needsText =
    'Spie a décidé de mettre en place ce qu’ils appellent "des challenges". Ces challenges ont pour objectif de motiver les équipes commerciales et plus particulièrement les commerciaux à vendre plus de contrats à leurs clients. \n \n Mais tout d’abords, avant d’aller plus loin, répondons à la question: "Qu’est-ce qu’un challenge ?". Un challenge est en quelque sorte un défi auquel n’importe quelle personne faisant partie des équipes de vente de Spie peut s’inscrire. Un challenge n’est disponible que pendant une certaine période définit dans le temps. Durant cette période, les commerciaux inscris, vont pouvoir obtenir des points pour chacune des ventes qu’ils réaliseront. \n \n Au bout d’un certain nombre de points, il sera possible pour eux d’obtenir des "cadeaux" offerts par Spie, comme par exemple, des Vélos, des Nintendo Switch, des iPhone, ou encore, des voyages dans le monde. Ces challenges possèdent également un classement, afin d’augmenter encore l’esprit de compétition, mais surtout, la motivation des équipes. \n \n Cependant, pour que tout cela soit possible, ils avaient besoin d’une application qui permettrait à toutes les personnes inscrites, de suivre l’évolution de leur total de points, les récompenses qu’ils obtiennent, leur position dans le classement etc…';

  const solutionText =
    "Spie m’a ainsi demandé de m’occuper du design, du développement front, mais également du développement back de cette application. \n \n Pour le design de l’application, j’ai souhaité conserver la couleur bleu (couleur principale de Spie avec le rouge) pour représenter la marque, mais également, mettre en valeur les images et photos des voyages proposés en récompenses de ces challenges. J’ai également choisi de mettre beaucoup de blancs, afin de donner un côté très épuré et moderne à l’application. Spie a demandé la présence de beaucoup d’éléments à l’écran, ce qui m’a convaincu d’utiliser beaucoup la couleur blanche, afin de surcharger le moins possible l’oeil des utilisateurs. \n \n En ce qui concerne l’utilisation des technologies, j’ai souhaité rester sur des technologies de bases, à savoir, le html, le css, le Javascript et le Php. Mais également le SQL pour la base de données. Ce choix de technologie a été fait, afin de simplifier la prise en main et la maintenance de l’application par d’autres développeurs par la suite. C’est pourquoi il n’y a la présence d’aucun framework ou plugins dans le code de ce projet.";

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
    coloredMainTitle: "Application développée pour Spie",
    mainTitle: "Application Challenge",
    presentationVideo: challengeVideo,
    clientName: "Spie",
    technologies: [
      "Adobe Xd",
      "Photoshop",
      "Html",
      "Css",
      "Php",
      "Javascript",
      "Git",
    ],
    jobs: ["Designer", "Développeur front-end", "Développeur back-end"],
    needsImage: leftImg,
    needs: needsText,
    solutionImage: rightImg,
    solution: solutionText,
    photos: photos,
  };

  return (
    <Fragment>
      <ProjectDetails {...childProps} />
    </Fragment>
  );
};

export default PAppChallenge;
