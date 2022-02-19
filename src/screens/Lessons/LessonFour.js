import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

import meditationAudioLink from "../../sounds/meditation_four.mp3";
import file from "../../sounds/meditation_four.mp3";
import fileImage from "../../images/ten_variants.png";
import home from "../../documents/clean_home.pdf";

function LessonFour(props) {

const newLine = '<br>';
const {
    lessonFourHeader,
    lessonFourTitle,
    lessonFourIntro,
    lessonThreeTitle,
    lessonTwoSubtitle,
    lessonTwoInstruction,
    list,
    lessonTwoPublic,
    taskOneHead,
    taskOne,
    taskTwoHead,
    taskTwo,
    meditationTitle,
    meditation,
    bonusHead,
    bonusHeadTwo,
    bonusTwo
} = props.lessonFour
const { handleSaveProfile, saveHistory } = props;
React.useEffect(() => {
  const updateCards = JSON.parse(localStorage.getItem("initialCards"))
  updateCards.dayFive = false
  localStorage.setItem("initialCards", JSON.stringify(updateCards))
  handleSaveProfile(updateCards)
},[] )

function sendHistory(text){
  const updateCards = JSON.parse(localStorage.getItem("currentUser"))
  const toSend = {
      login: updateCards.login,
      lesson: 'День четвёртый',
      text: text
  }
  saveHistory(toSend)
}

// Разбираем lessonFourIntro на строки
const stringMass = lessonFourIntro.split(newLine).map((item) => <p style={{ margin: `0` }}>{item}</p>);


return (
  <>
    <Header 
    {...props}
    />
    <main className="main__content">
      <Background />
      <Task 
        bonus={lessonFourHeader} 
        taskOneHead={lessonFourTitle} 
        taskOne={stringMass} 
      />
      <IntroLesson 
        lessonOneTitle={lessonThreeTitle} 
        lessonOneSubtitle={lessonTwoSubtitle} 
      />
      <ListLesson 
        lessonOneInstruction={lessonTwoInstruction} 
        list={list} 
      />
      <Feedback 
        lessonOnePublic={lessonTwoPublic} 
        saveHistory={saveHistory}
      />
      <Task 
        taskOneHead={taskOneHead} 
        taskOne={taskOne} 
      />
      <Task 
        taskOneHead={taskTwoHead} 
        taskOne={taskTwo} 
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
        listOne={false}
        link={"9 законов успеха в жизни"}
        file={fileImage}
        image={fileImage}
      />
      <Task
        taskOneHead={bonusHeadTwo}
        taskOne={bonusTwo}
        listOne={false}
        link={"Нажмите сюда и вы скачаете ЧекЛист"}
        file={home}
      />
      <HomeButton />
    </main>
  </>
);
}
export default LessonFour;
