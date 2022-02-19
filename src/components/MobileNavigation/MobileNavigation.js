import React from "react";
import { NavLink }  from "react-router-dom";
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
//import iconprofile from '../../images/iconprofile.svg';



function MobileNavigation(props) {

  const {
    loggedIn,
    handleSignOut
  } = props;
      const currentUser = React.useContext(CurrentUserContext);

  return (
    <nav className="MobileNavigation__hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="MobileNavigation__menu-btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <div className="MobileNavigation__box-shadow"></div>
      <ul className="MobileNavigation__menu-box">
          
      <div className="header__buttons-container">
{loggedIn && currentUser.role==='admin' ? <NavLink to={'/signup'} className="header__new-user">Администратор</NavLink> : null}
<div className="header__new-user" onClick={handleSignOut}>Выйти</div>
</div>
          
          <div>
          
          </div>
        <div className = 'DesktopNavigation__acc-button'>
        <NavLink to={'/days'} className="header__new-user">Назад</NavLink> 
            <div className = 'DesktopNavigation__icon-background'>
                
            </div>

        </div>
      </ul>
      

     
    </nav>
  );
}
export default MobileNavigation;
