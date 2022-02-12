import React, { useState, useEffect } from "react";

import courseName from "../../images/courseName.png";
import logo from "../../images/logo.png";
import DATA from "../../utils/DATA/DATA.json";

function Header(props) {
    //в пропс упадёт userName

  //хук для определения разрешения экрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowSize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  });
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__subcontent">
            <img className="header__logo" src={logo} alt="Логотип"></img>
            {/*скраваем приветствие на маленьком разрешении*/}
            <p
              className={`header__hello ${
                windowWidth < 420 ? "header__hello_state_hide" : null
              }`}
            >
              {DATA.HELLO.HELLOINHEADER}userName
            </p>
          </div>
          <img className="header__course-name" src={courseName} alt="название курса"></img>
        </div>
      </header>
    </>
  );
}
export default Header;
