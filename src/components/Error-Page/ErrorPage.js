import React from "react";
import "./ErrorPage.css";
import MainMenu from "../Main-Menu/MainMenu";

const ErrorPage = () => {
  return (
    <div>
      <MainMenu isAbsolute={true} />
      <div className="error-page-container">
        <div className="error-page-text">
          <h1>404</h1>
          <h2>Il semble que la page que vous recherchez n'existe pas.</h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
