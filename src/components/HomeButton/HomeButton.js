import React from "react";
import { NavLink } from 'react-router-dom';
function HomeButton(props){

    const [dayTwo, setDayTwo] = React.useState(true);

    const {
        dayNumber,
        handleNextDay,

    } = props;


    return(
<>
<NavLink to='/days' className="intro__button home-button_position">ВЕРНУТЬСЯ</NavLink>
</>
    )
}
export default HomeButton;