import React, { Fragment } from "react";
import ProjectDetails from "../Project-Details/ProjectDetails";
import qwesteoVideo from "../../assets/videos/qwesteo.mp4";
import leftImg from "../../assets/images/qwesteo/qwesteo-left-img.png";
import rightImg from "../../assets/images/qwesteo/qwesteo-right-img.png";

const POneSuccess = () => {
  const needsText =
    "Qwesteo est une entreprise permettant à leurs clients, d’obtenir des retours et des avis de leurs propres clients dans leurs magasins par l’intermédiaire de bornes, placées spécifiquement en caisse. \n \n Qwesteo a développé une application web, ainsi qu’une application mobile permettant à leurs utilisateurs de consulter les statistiques et les avis de leurs clients partout où ils le souhaitent. Durant notre première entrevue, ils m’ont fait part de leur besoin d’amélioration et d’optimisation des design et de l’UX/UI de leurs produits. Intéressés par ma double compétence en design et en développement web, ils m’ont proposé de rejoindre leurs équipes. Proposition que j’acceptais.";

  const solutionText =
    'Le premier projet sur lequel j\'ai travaillé fut l’application mobile Qwesteo. J’ai ainsi pu proposer un nouveau design plus épuré et moderne à cette application. Qwesteo m’a permis de faire de nouvelles propositions au sujet de nouvelles fonctionnalités à mettre en place pour cette application. J’ai changé l’intégralité des icônes, les couleurs principales (couleurs plus pastel et à la mode), ainsi que l’UX/UI de l’application. \n \n Mon second projet, fut de réaliser seul, un nouveau site internet pour la marque, le précédent possédant un design vieillissant. Le logo de la marque étant réutilisé sur tous les supports de communication, mais également directement sur les bornes, il était important de le garder tel quel. Pour moi, le site internet, mais également tous les supports représentant la marque Qwesteo devaient reprendre l’esthétisme du logo. C’est dans cette optique que j’ai décidé de faire un rappel de ce logo en utilisant des dégradés de bleu dans tout le site. Un rappel au logo sera également présent sous la forme de double cercles (un gris et un avec un dégradé bleu), faisant écho à la lettre "Q" du logo. \n \n Qwesteo possède 3 sous-branches, chacune à l’image d’un certain secteur d’activité (commerce, service et santé). J’ai décidé d’associer à chaque secteur, des couleurs et un dégradé en variation de bleu, dans le but de différencier chaque branche des autres, tout en conservant une cohésion et une cohérence globale. \n \n J’ai, par la suite, travaillé sur le design et le développement de nouveaux rapports à destination des clients. Chaque projet de design était suivi d’une phase de développement (code) pour réaliser les différents projets. Avoir eu l’occasion de recréer tout une image de marque pour toute l’entreprise a été réellement intéressant et passionnant.';

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
      src: "../../assets/images/one-success/one-success-full-main-page.png",
      title: "Page principale",
      description: "Page principale",
      column: 1,
    },
    {
      src: "../../assets/images/one-success/one-success-full-connexion-page.png",
      title: "Page de connexion",
      description: "Page de connexion",
      column: 2,
    },
    {
      src: "../../assets/images/one-success/one-success-full-actualites-page.png",
      title: "Page d'actualités",
      description: "Page d'actualités",
      column: 2,
    },
  ];

  const childProps = {
    coloredMainTitle: "Entreprise de voyage",
    mainTitle: "One Success",
    isThereAVideo: false,
    presentationVideo: qwesteoVideo,
    presentationImage:
      "../../assets/images/one-success/project-details-main-image.png",
    clientName: "Qwesteo",
    technologies: [
      "Figma",
      "Photoshop",
      "Symfony",
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

export default POneSuccess;
