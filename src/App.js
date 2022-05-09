import React from "react";

import github from "./assets/images/icons/github-logo.svg";
import linkedin from "./assets/images/icons/linkedin-logo.svg";
import resume from "./assets/images/icons/resume-pdf.svg";
import folder from "./assets/images/icons/folder.png";
import appsFolder from "./assets/images/icons/apps-folder.png";
import finder from ".//assets/images/icons/finder.png";

import "./App.css";
import Dock from "./components/dock";
import DockItem from "./components/dock/Item/dock-item";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <div className="App backgroundImage">
      <TopMenu />

      <Dock
        className="dockContainer"
        debug={false}
        width={window.innerWidth < 600 ? 300 : 600}
        magnification={0.5}
        magnifyDirection="up"
      >
        <DockItem key={0} title={"About Me"} onClick={() => {}}>
          <img className="iconImg" src={finder} alt="About me" />
        </DockItem>
        <DockItem
          key={1}
          title={"Github"}
          onClick={() => {
            window.open("https://github.com/benjaminpeters", "_blank");
          }}
        >
          <img className="iconImg" src={github} alt="Github" />
        </DockItem>
        <DockItem
          key={2}
          title={"LinkedIn"}
          onClick={() => {
            window.open("https://www.linkedin.com/in/benjamin416/", "_blank");
          }}
        >
          <img className="iconImg" src={linkedin} alt="LinkedIn" />
        </DockItem>
        <DockItem title={"Resume"} key={3} onClick={() => {}}>
          <img className="iconImg" src={resume} alt="Resume" />
        </DockItem>
        <DockItem title={"Side Projects"} key={4} onClick={() => {}}>
          <img className="iconImg" src={folder} alt="Side Projects" />
        </DockItem>
        <DockItem title={"Apps"} key={5} onClick={() => {}}>
          <img className="iconImg" src={appsFolder} alt="Apps" />
        </DockItem>
      </Dock>
    </div>
  );
}

export default App;
