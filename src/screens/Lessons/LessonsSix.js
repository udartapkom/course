import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

import meditationAudioLink from "../../sounds/meditation_six.mp3";
import file from "../../sounds/meditation_six.mp3";
import habit from "../../documents/habit.pdf";
import seven from "../../images/seven.png";

function LessonSix(props){
    const {
        lessonSixHeader,
        taskSixHead,
        taskSix,
        meditationTitle,
        lessonTwoSubtitle,
        list,
        lessonThreeTitle,
        lessonTwoPublic,
        lessonTwoInstruction,
        taskTwo,
        taskText,
        taskList,
        listOne,
        taskListTwo,
        listTwo,
        bonusHead,
        bonusText,
        bonusHeadTwo,
        bonusTextTwo
    } =props.LessonSix
    const { handleSaveProfile, saveHistory } = props;
React.useEffect(() => {
  const updateCards = JSON.parse(localStorage.getItem("initialCards"))
  updateCards.daySeven = false
  localStorage.setItem("initialCards", JSON.stringify(updateCards))
  handleSaveProfile(updateCards)
},[] )

function sendHistory(text){
  const updateCards = JSON.parse(localStorage.getItem("currentUser"))
  const toSend = {
      login: updateCards.login,
      lesson: 'День шестой',
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
      taskOneHead={lessonSixHeader} 
      taskOne={taskSixHead} 
      taskThree={taskSix} 
      />
      <Meditation 
      meditationTitle={meditationTitle} 
      link={meditationAudioLink}
      file={file} 
      />
      <IntroLesson 
      lessonOneTitle={lessonThreeTitle}
      lessonOneSubtitle={lessonTwoSubtitle}
      />
      <ListLesson 
      lessonOneInstruction={lessonTwoInstruction} 
      list={list} />
      <Feedback 
      lessonOnePublic={lessonTwoPublic} 
      sendHistory={sendHistory}
      />
      <Task 
      taskOneHead={taskTwo} 
      taskOne={taskText} 
      taskThree={taskList} 
      listOne={listOne} 
      />
      <Task 
      taskThree={taskListTwo} 
      listOne={listTwo} 
      />
      <Task 
      taskOneHead={bonusHead} 
      taskOne={bonusText}
      file={seven}
      link={'9 законов успеха в жизни'}
      image={seven}
      />
      <Task 
      taskOneHead={bonusHeadTwo} 
      taskOne={bonusTextTwo} 
      file={habit}
      link={'Скачать ЧекЛист'}
      />
      <HomeButton />
    </main>
  </>
);
}
export default LessonSix;