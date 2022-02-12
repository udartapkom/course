import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import DATA from "../../utils/DATA/DATA.json";

function Days() {
    return(
        <>
        <Header />
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
                />
                <Card 
                modificatorRed="card__column_color_red"  
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow" 
                dayHeader={DATA.HEADERS.DAYTREE}
                linkTo='/lessonthree'
                />
                <Card
                modificatorRed="card__column_color_red"
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow"
                modificatorGreen="card__column_color_green" 
                dayHeader={DATA.HEADERS.DAYFOUR}
                linkTo='/lessonfour'
                />
                <Card
                modificatorRed="card__column_color_red"  
                modificatorOrange="card__column_color_orange"
                modificatorYellow="card__column_color_yellow"
                modificatorGreen="card__column_color_green"
                modificatorLightBlue="card__column_color_light-blue" 
                dayHeader={DATA.HEADERS.DAYFIVE}
                linkTo='/lessonfive'
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
                isBlocked={true}
                modificatorBlock="card__block"
                linkTo='/lessonseven'
                />
            </div>
        </section>
        </>
    );
}
export default Days;