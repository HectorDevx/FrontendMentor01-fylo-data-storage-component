import React from "react";
import "./Logo-card.css";
import logo from "../images/logo.svg";
import iconDocument from "../images/icon-document.svg";
import iconFolder from "../images/icon-folder.svg";
import iconUpload from "../images/icon-upload.svg";

class LogoCard extends React.Component {
  render() {
    return (
      <section className="logo-container">
        <img src={logo} alt="Logo Fylo"></img>
        <div className="icons">
          <div className="icon-container">
            <img className="icon" src={iconDocument} alt="Icon Document"></img>
          </div>
          <div className="icon-container">
            <img className="icon" src={iconFolder} alt="Icon Folder"></img>
          </div>
          <div className="icon-container">
            <img className="icon" src={iconUpload} alt="Icon Upload"></img>
          </div>
        </div>
      </section>
    );
  }
}

export default LogoCard;
