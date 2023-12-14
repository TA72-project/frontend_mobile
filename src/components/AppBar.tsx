import * as React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackIcon } from "../assets/icons/arrow-left-1.svg";


interface AppBarProps {
  title: string;
}

const AppBar: React.FC<AppBarProps> = ({ title }) => {

  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  }

  return (
    <nav className="app-bar fixed w-full top-0 left-0 rl-auto pb-6 pr-10">
      <div className="flex mt-12 mx-8">
        <div className="back-button-wrapper">
          <button className="back-button" onClick={goToBack}>
            <div className="back-button-icon">
              <BackIcon />
            </div>
          </button>
        </div>
        <div className="app-bar-title mx-auto text-p-1">{title}</div>
      </div>
    </nav>
  );
};



export default AppBar;
