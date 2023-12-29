import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className={`inline-flex flex-col text-left px-4 py-3`}>
      <div>React starter app styled with TailwindCSS</div>
      <div>
        <span>And FontAwesome icons.</span>
        <FontAwesomeIcon icon={faCoffee} className={`pl-4 text-blue-200`}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCoffee} className={`pl-4 text-blue-400`}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCoffee} className={`pl-4 text-blue-800`}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default App;
