import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import courseName from "../../images/courseName.png";
import MobileNavigation from "../MobileNavigation/MobileNavigation"
import logo from "../../images/logo.png";
import DATA from "../../utils/DATA/DATA.json";

function Header(props) {
const {
  loggedIn,
  handleSignOut
} = props;
    const currentUser = React.useContext(CurrentUserContext);
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

            <div className={`header__buttons-container ${ windowWidth < 780 ? "header__buttons-container_state_hide" : null}`}>
            {loggedIn && currentUser.role==='admin' ? <NavLink to={'/signup'} className="header__new-user">Администратор</NavLink> : null}
            <div className="header__new-user" onClick={handleSignOut}>Выйти</div>
            </div>
            {/*скраваем приветствие на маленьком разрешении*/}
{/*             <p
              className={`header__hello ${
                windowWidth < 580 ? "header__hello_state_hide" : null
              }`}
            >
              {currentUser.name + `, ${DATA.HELLO.HELLOINHEADER}`}
            </p> */}
          </div>
          <img className="header__course-name" src={courseName} alt="название курса"></img>
          {windowWidth > 780 ? null : <MobileNavigation  {...props}/>}
        </div>
      </header>
    </>
  );
}
export default Header;
