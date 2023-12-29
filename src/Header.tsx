import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={`container mx-auto`}>
      <header className={`flex justify-between items-center sticky top-0 z-10 py-4 bg-blue-900`}>
        <div className={`flex-shrink-0 ml-4 cursor-pointer`}>
          <FontAwesomeIcon icon={faWind} className="fa-2x text-yellow-500" />
          <span className={`text-3xl font-semibold text-blue-200 pl-1`}>Tailwind School</span>
        </div>
        <ul className={`flex overflow-x-hidden mr-5 font-semibold`}>
          <li className={`mr-6 p-1 border-b-2 border-yellow-500`}>
            <a className={`cursor-default text-blue-200`} href="https://1xz2kowy84">
              Home
            </a>
          </li>
          <li className={`mr-6 p-1`}>
            <a className={`text-white hover:text-blue-300`} href="https://1xz2kowy84">
              News
            </a>
          </li>
          <li className={`mr-6 p-1`}>
            <a className={`text-white hover:text-blue-300`} href="https://1xz2kowy84">
              Tutorials
            </a>
          </li>
          <li className={`mr-6 p-1`}>
            <a className={`text-white hover:text-blue-300`} href="https://1xz2kowy84">
              Videos
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
