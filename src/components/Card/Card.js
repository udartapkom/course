import React from "react";
import { NavLink } from 'react-router-dom';

import DATA from "../../utils/DATA/DATA.json";

//Одна карточка вызывается столько раз, сколько нужно. меняются лишь модификаторы и состояние блок/разблок 
function Card(props) {
  const {
    modificatorRed,
    modificatorOrange,
    modificatorYellow,
    modificatorGreen,
    modificatorLightBlue,
    modificatorBlue,
    modificatorViolet,
    dayHeader,
    isBlocked,
    modificatorBlock,
    linkTo
  } = props;
  return (
    <>
      <div className={`card ${isBlocked ? modificatorBlock : null}`}>
        <div className="card__graph">
          <div className={`card__column card__column_height_one ${!isBlocked ? modificatorRed : null}`}></div>
          <div className={`card__column card__column_height_two ${!isBlocked ? modificatorOrange : null}`}></div>
          <div className={`card__column card__column_height_tree ${!isBlocked ? modificatorYellow : null}`}></div>
          <div className={`card__column card__column_height_four ${!isBlocked ? modificatorGreen: null}`}></div>
          <div className={`card__column card__column_height_five ${!isBlocked ? modificatorLightBlue : null}`}></div>
          <div className={`card__column card__column_height_six ${!isBlocked ? modificatorBlue : null}`}></div>
          <div className={`card__column card__column_height_seven ${!isBlocked ? modificatorViolet : null}`}></div>
        </div>
        <h3 className="card__header">{DATA.HEADERS.MONEYINTELLECT}</h3>
        <h3 className="card__header card__header_border_none">{dayHeader}</h3>
       
        <NavLink to={`${!isBlocked ? linkTo : null}`}
         className={`card__button ${isBlocked ? "card__button_state_block" : null}`}
         >
          НАЧАТЬ!
        </NavLink> 
      </div>
    </>
  );
}
export default Card;