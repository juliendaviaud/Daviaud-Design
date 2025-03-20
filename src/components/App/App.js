import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../App.css";
import Landing from "../Landing";
import About from "../About/About";
import PAppChallenge from "../P-App-Challenge/PAppChallenge";
import PTristanMelia from "../P-Tristan-Melia/PTristanMelia";
import MainMenu from "../Main-Menu/MainMenu";
import ErrorPage from "../Error-Page/ErrorPage";
import PQwesteo from "../P-Qwesteo/PQwesteo";
import POneSuccess from "../P-One-Success/POneSuccess";
import PIntendancePenates from "../P-Intendance-Penates/PIntendancePenates";
import PPsychologieBienEtre from "../P-Psychologie-Bien-Etre/PPsychologieBienEtre";
import PMarieDupont from "../P-Marie-Dupont/PMarieDupont";
import PCindyDupres from "../P-Cindy-Dupres/PCindyDupres";
import PFtdSts from "../P-Ftd-Sts/PFtdSts";
import ScrollToTop from "../Scroll-To-Top/ScrollToTop";
import { Link as LinkScroll } from "react-scroll";
import { Fragment, useState } from "react";
import PreDevis from "../Pre-devis/PreDevis";
import ProjectsPage from "../Projects-Page/ProjectsPage";

function App() {
  return (
    <Fragment>
      {/* <PreLoader /> */}
    <Router className="App">
      {/* <MainMenu /> */}
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/a-propos" element={<About />} />
        <Route exact path="/mes-realisations" element={<ProjectsPage />} />
        <Route exact path="/app-challenge" element={<PAppChallenge />} />
        <Route exact path="/tristan-melia" element={<PTristanMelia />} />
        <Route exact path="/qwesteo" element={<PQwesteo />} />
        <Route exact path="/one-success" element={<POneSuccess />} />
        <Route exact path="/intendance-penates" element={<PIntendancePenates />} />
        <Route exact path="/psychologie-bien-etre" element={<PPsychologieBienEtre />} />
        <Route exact path="/marie-dupont" element={<PMarieDupont />} />
        <Route exact path="/cindy-dupres" element={<PCindyDupres />} />
        <Route exact path="/ftd-sts" element={<PFtdSts />} />
        <Route exact path="/pre-devis" element={<PreDevis />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
