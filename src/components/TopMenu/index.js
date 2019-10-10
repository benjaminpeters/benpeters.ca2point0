import React from "react";
import "./TopMenu.css";

import bigBen from "../../assets/images/icons/fox.svg";

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="bigBen" src={bigBen} />

        <div className="menuText menuTextBold">Benjamin</div>
        <div className="menuText">Welcome</div>
        <div className="menuText">To</div>
        <div className="menuText">My</div>
        <div className="menuText">Site</div>
      </div>
    );
  }
}
