import React from "react";
import Header from "../../components/Header/Header";
//import Background from "../../components/Background/Background";
import DATA from "../../utils/DATA/DATA.json";
import { NavLink } from 'react-router-dom';
function Intro(props) {
  //Нечего тут комментировать
  return (
    <>
      <section className="intro">
        <Header />
        <div className="intro__content">
          <h2 className="intro__title">{DATA.HEADERS.INTRO}</h2>
          <p className="intro__text">{DATA.TEXTS.INTROPARTONE}</p>
          <p className="intro__text">{DATA.TEXTS.INTROPARTTWO}</p>
          <p className="intro__text">{DATA.TEXTS.INTROPARTTREE}</p>
          <p className="intro__text">{DATA.TEXTS.INTROPARTFOUR}</p>
          <p className="intro__text intro__text_weight_bold">{DATA.TEXTS.INTROPARTFIVE}</p>
          <p className="intro__text intro__text_weight_bold">{DATA.TEXTS.INTROPARTSIX}</p>
          <NavLink to='/days' className="intro__button">НАЧАТЬ!</NavLink>
        </div>
      </section>
    </>
  );
}
export default Intro;
