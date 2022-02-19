import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

import meditationAudioLink from "../../sounds/meditation_five.mp3";
import file from "../../sounds/meditation_five.mp3";
import thanks from "../../documents/thanks.pdf";
import check from "../../documents/check.pdf";
import fiveQuestion from "../../images/five_question.png";

function LessonFive(props) {
  const {
    lessonFiveHeader,
    lessonFiveIntro,
    taskList,
    listOne,
    taskListTwo,
    listTwo,
    taskListThree,
    listThree,
    thanksTitle,
    thanksText,
    thanksTitleTwo,
    thanksTextTwo,
    lessonTwoSubtitle,
    lessonTwoInstruction,
    list,
    lessonTwoPublic,
    tenGarbageTitle,
    tenGarbageText,
    meditationTitle,
    meditation,
    bonusHead,
    bonusText,
    bonusHeadTwo,
    bonusTextTwo,
  } = props.lessonFive;
  const { handleSaveProfile, saveHistory } = props;
  React.useEffect(() => {
    const updateCards = JSON.parse(localStorage.getItem("initialCards"))
    updateCards.daySix = false
    localStorage.setItem("initialCards", JSON.stringify(updateCards))
    handleSaveProfile(updateCards)
  },[] )
  
  function sendHistory(text){
    const updateCards = JSON.parse(localStorage.getItem("currentUser"))
    const toSend = {
        login: updateCards.login,
        lesson: 'День пятый',
        text: text
    }
    saveHistory(toSend)
  }

  return (
    <>
      <Header 
      {...props}
      />
      <main className="main__content">
        <Background />
        <Task
          taskOneHead={lessonFiveHeader}
          taskOne={lessonFiveIntro}
          taskThree={taskList}
          listOne={listOne}
        />
        <Task 
          taskThree={taskListTwo}
          listOne={listTwo} />
        <Task 
          taskThree={taskListThree}
          listOne={listThree} />
        <Task 
          taskOneHead={thanksTitle} 
          taskThree={thanksText} />
        <Task
          taskOneHead={thanksTitleTwo}
          taskThree={thanksTextTwo}
          file={thanks}
          link={"Здесь я даю практику благодарности."}
        />
        <IntroLesson 
          lessonOneTitle={lessonTwoSubtitle} 
          />
        <ListLesson 
          lessonOneInstruction={lessonTwoInstruction} 
          list={list} />
        <Feedback 
          lessonOnePublic={lessonTwoPublic} 
          sendHistory={sendHistory}
        />
        <Task 
          taskOneHead={tenGarbageTitle} 
          taskThree={tenGarbageText}
        />
        <Meditation 
          meditationTitle={meditationTitle}
          meditation={meditation} 
          link={meditationAudioLink} 
          file={file}
          />
        <Task
          bonus={bonusHead}
          taskOne={bonusText}
          file={fiveQuestion}
          link={"9 законов успеха в жизни"}
          image={fiveQuestion}
        />
        <Task
          bonus={bonusHeadTwo}
          taskOne={bonusTextTwo} 
          file={check} 
          link={"Скачать ЧекЛист"} />
        <HomeButton />
      </main>
    </>
  );
}
export default LessonFive;
