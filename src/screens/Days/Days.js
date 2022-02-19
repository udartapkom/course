import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import DATA from "../../utils/DATA/DATA.json";

function Days(props) {

/*     const {
        stateTwo,
        stateThree,
        stateFour,
        stateFive,
        stateSix,
        stateSeven,
    } = props; */

    const userState = (JSON.parse(localStorage.getItem("initialCards")));

    return(
        <>
        <Header 
        {...props}
        />
        <section className="days">
            <div className="days__content">
                <Card 
                modificatorRed="card__column_color_red" 
                dayHeader={DATA.HEADERS.DAYONE}
                linkTo='/lessonone'
                />
                <Card
                 modificatorRed="card__column_color_red"  
                 modificatorOrange="card__column_color_orange" 
                 dayHeader={DATA.HEADERS.DAYTWO}
                 linkTo='/lessontwo'
                 modificatorBlock="card__block"
                 isBlocked={userState.dayTwo}
                />
                <Card 
                modificatorRed="card__column_color_red"  
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow" 
                dayHeader={DATA.HEADERS.DAYTREE}
                linkTo='/lessonthree'
                modificatorBlock="card__block"
                isBlocked={userState.dayThree}
                />
                <Card
                modificatorRed="card__column_color_red"
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow"
                modificatorGreen="card__column_color_green" 
                dayHeader={DATA.HEADERS.DAYFOUR}
                linkTo='/lessonfour'
                modificatorBlock="card__block"
                isBlocked={userState.dayFour}
                />
                <Card
                modificatorRed="card__column_color_red"  
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow"
                modificatorGreen="card__column_color_green"
                modificatorLightBlue="card__column_color_light-blue" 
                dayHeader={DATA.HEADERS.DAYFIVE}
                linkTo='/lessonfive'
                modificatorBlock="card__block"
                isBlocked={userState.dayFive}
                />
                <Card 
                modificatorRed="card__column_color_red"
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow"
                modificatorGreen="card__column_color_green"
                modificatorLightBlue="card__column_color_light-blue"
                modificatorBlue="card__column_color_blue" 
                dayHeader={DATA.HEADERS.DAYSIX}
                linkTo='/lessonsix'
                modificatorBlock="card__block"
                isBlocked={userState.daySix}
                />
                <Card
                modificatorRed="card__column_color_red"
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow"
                modificatorGreen="card__column_color_green"
                modificatorLightBlue="card__column_color_light-blue"
                modificatorBlue="card__column_color_blue"
                modificatorViolet="card__column_color_violet" 
                dayHeader={DATA.HEADERS.DAYSEVEN}
                isBlocked={userState.daySeven}
                modificatorBlock="card__block"
                linkTo='/lessonseven'
                />
            </div>
        </section>
        </>
    );
}
export default Days;