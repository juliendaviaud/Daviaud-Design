import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../App.css";
import Landing from "../Landing";
import About from "../About/About";
import PAppChallenge from "../P-App-Challenge/PAppChallenge";
import PTristanMelia from "../P-Tristan-Melia/PTristanMelia";
import MainMenu from "../Main-Menu/MainMenu";
import ErrorPage from "../Error-Page/ErrorPage";
import PQwesteo from "../P-Qwesteo/PQwesteo";
import ScrollToTop from "../Scroll-To-Top/ScrollToTop";
import { Link as LinkScroll } from "react-scroll";
import { Fragment } from "react";
import PreLoader from "../Pre-Loader/PreLoader";

function App() {
  return (
    <Fragment>
      {/* <PreLoader /> */}
    <Router className="App">
      {/* <MainMenu /> */}
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/app-challenge" element={<PAppChallenge />} />
        <Route exact path="/tristan-melia" element={<PTristanMelia />} />
        <Route exact path="/qwesteo" element={<PQwesteo />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
