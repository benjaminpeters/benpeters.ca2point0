import React from "react";

import github from "./assets/images/icons/github-logo.svg";
import linkedin from "./assets/images/icons/linkedin-logo.svg";
import resume from "./assets/images/icons/resume-pdf.svg";
import folder from "./assets/images/icons/folder.png";
import appsFolder from "./assets/images/icons/apps-folder.png";
import "./App.css";
import Dock from "./components/dock";

function App() {
  return (
    <div className="App backgroundImage">
      <Dock
        className="dockContainer"
        debug={false}
        width={600}
        magnification={0.5}
        magnifyDirection="up"
      >
        <Dock.Item
          key={1}
          onClick={() => {
            window.open("https://github.com/benjaminpeters", "_blank");
          }}
        >
          <img className="iconImg" src={github} />
        </Dock.Item>
        <Dock.Item
          key={2}
          onClick={() => {
            window.open("https://www.linkedin.com/in/benjamin416/", "_blank");
          }}
        >
          <img className="iconImg" src={linkedin} />
        </Dock.Item>
        <Dock.Item key={3} onClick={() => {}}>
          <img className="iconImg" height="100%" width="100%" src={resume} />
        </Dock.Item>
        <Dock.Item key={4} onClick={() => {}}>
          <img className="iconImg" height="100%" width="100%" src={folder} />
        </Dock.Item>
        <Dock.Item key={5} onClick={() => {}}>
          <img className="iconImg" src={appsFolder} />
        </Dock.Item>
      </Dock>
    </div>
  );
}

export default App;
