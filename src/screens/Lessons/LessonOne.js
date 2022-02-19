import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

import meditationAudioLink from "../../sounds/meditation_one.mp3";
import NineLaw from "../../images/NineLaw.png";
import file from "../../sounds/meditation_one.mp3";

function LessonOne(props){

    const [dayTwo, setDayTwo] = React.useState(false);

    const {
    bonus,
    bonusHead,
    meditationTitle,
    meditation,
    lessonOneHeader,
    lessonOneInstruction,
    lessonOneIntro,
    lessonOnePublic,
    lessonOneSubtitle,
    lessonOneTitle,
    list,
    taskOne,
    listOne,
    taskOneHead,
    taskTwo,
    taskTwoHead,
} = props.lessonOne;

const { 
    handleSaveProfile,
    saveHistory
        } = props;

React.useEffect(() => {
    const updateCards = JSON.parse(localStorage.getItem("initialCards"))
    updateCards.dayTwo = false
    localStorage.setItem("initialCards", JSON.stringify(updateCards))
    handleSaveProfile(updateCards)
},[] )

function sendHistory(text){
    const updateCards = JSON.parse(localStorage.getItem("currentUser"))
    const toSend = {
        login: updateCards.login,
        lesson: 'День первый',
        text: text
    }
    saveHistory(toSend)
}

    return(
<>
 <Header 
 {...props}
 /> 
<main className="main__content">
        <Background />
        <IntroLesson 
        lessonOneHeader={lessonOneHeader}
        lessonOneTitle={lessonOneTitle}
        lessonOneIntro={lessonOneIntro}
        lessonOneSubtitle={lessonOneSubtitle}
        />
        <ListLesson 
        lessonOneInstruction={lessonOneInstruction}
        list={list}
        /> 
        <Feedback 
        lessonOnePublic={lessonOnePublic}
        sendHistory={sendHistory}
        /> 
        <Task 
        taskOneHead={taskOneHead}
        taskOne={taskOne}
        listOne={listOne}
        />
        <Task 
        taskOneHead={taskTwoHead}
        taskOne={taskTwo}
        listOne={false}
        />
        <Meditation 
        meditationTitle={meditationTitle}
        meditation={meditation}
        file={file}
        link={meditationAudioLink}
        /> 
        <Task 
        taskOneHead={bonusHead}
        bonus={"Бонус"}
        taskOne={bonus}
        listOne={false}
        link={bonusHead}
        file={NineLaw}
        image={NineLaw}
        /> 
        <HomeButton 
        {...props}
        dayNumber={2}
        />
</main>
</>
    );
}
export default LessonOne;