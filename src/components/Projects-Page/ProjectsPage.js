import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";
import MainMenu from "../Main-Menu/MainMenu";
import plus from "../../assets/images/plus.svg";
import imageTest from "../../assets/images/app-challenge/image-1.jpg";
import tristanMelia from "../../assets/images/tristan-melia/tristan-melia-main-page-V2.png";
import qwesteo from "../../assets/images/qwesteo/qwesteo-main-page.png";
import oneSuccess from "../../assets/images/one-success/one-success-main-page.png";
import psychologieBienEtre from "../../assets/images/psychologie-bien-etre/psychologie-bien-etre-main-page.png";
import intendancePenates from "../../assets/images/intendance-penates/intendance-penates-main-page.png";
import appChallenge from "../../assets/images/app-challenge/app-challenge-presentation.png";
import marieDupont from "../../assets/images/marie-dupont/marie-dupont-main-page.png";
import cindyDupres from "../../assets/images/cindy-dupres/cindy-dupres-main-page.png";
import ftdSts from "../../assets/images/ftd-sts/ftd-sts-main-page.png";

const ProjectsPage = () => {
  return (
    <Fragment>
      <MainMenu isAbsolute={false} />
      <div className="projectsPageContainer">
        <div className="title-container">
          <h3 className="colored-title">L’alliance du design et du web</h3>
          <h2>Mes réalisations</h2>
        </div>
        <div className="projectsList">
          <div className="projectsListRow">
            <div className="projectListed">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/intendance-penates">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={intendancePenates}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Intendance Pénates</h4>
                <p className="projectListedTextClient">Intendance</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/intendance-penates">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="projectListed projectListedNoMarginRight">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/tristan-melia">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={tristanMelia}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Tristan Mélia</h4>
                <p className="projectListedTextClient">
                  Pianiste professionnel
                </p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/tristan-melia">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectsListRow">
            <div className="projectListed">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/marie-dupont">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={marieDupont}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Marie Dupont</h4>
                <p className="projectListedTextClient">Psychologue</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/marie-dupont">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="projectListed projectListedNoMarginRight">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/one-success">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={oneSuccess}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>One Success</h4>
                <p className="projectListedTextClient">Agence de voyage</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/one-success">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectsListRow">
            <div className="projectListed">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/cindy-dupres">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={cindyDupres}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Cindy Duprés</h4>
                <p className="projectListedTextClient">Psychologue</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/cindy-dupres">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="projectListed projectListedNoMarginRight">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/qwesteo">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img className="projectListedImage" src={qwesteo} alt="" />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Qwesteo</h4>
                <p className="projectListedTextClient">Entreprise</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/qwesteo">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectsListRow">
            <div className="projectListed">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/ftd-sts">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img className="projectListedImage" src={ftdSts} alt="" />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>FTD-STS</h4>
                <p className="projectListedTextClient">Aéronautique</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/ftd-sts">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="projectListed projectListedNoMarginRight">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/psychologie-bien-etre">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={psychologieBienEtre}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Sylvie Demaille</h4>
                <p className="projectListedTextClient">Psychologue</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/psychologie-bien-etre">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectsListRow">
            <div className="projectListed">
              <div className="projectListedImageContainer">
                <Link className="projectListedImageLink" to="/app-challenge">
                  <div className="projectListedImageAndText">
                    <div className="projectListedImageHoverContainer">
                      <img src={plus} alt="" />
                      <p>Voir le projet</p>
                    </div>
                    <img
                      className="projectListedImage"
                      src={appChallenge}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="projectListedText">
                <h4>Spie ICS</h4>
                <p className="projectListedTextClient">Entreprise</p>
                <div className="projectLink">
                  <Link className="projectLinkContainer" to="/app-challenge">
                    <p className="projectLinkText">Voir le projet</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectsPage;
