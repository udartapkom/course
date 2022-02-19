import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

import meditationAudioLink from "../../sounds/meditation_three.mp3";
import file from "../../sounds/meditation_three.mp3";
import fileImage from "../../images/milleoner.png";
import fire from "../../documents/fire.pdf";
import stopWord from "../../documents/stop_word.pdf"


function LessonThree(props){

    const {
        lessonThreeHeader,
        lessonThreeTitle,
        lessonTwoSubtitle,
        lessonTwoInstruction,
        list,
        lessonTwoPublic,
        taskOneHead,
        taskOne,
        taskTwoHead,
        taskTwo,
        listOfTask,
        meditationTitle,
        meditation,
        bonusHead,
        bonus,
        bonusHeadTwo,
        bonusTwo
      } = props.lessonThree;
      const { handleSaveProfile, saveHistory } = props;
      React.useEffect(() => {
        const updateCards = JSON.parse(localStorage.getItem("initialCards"))
        updateCards.dayFour = false
        localStorage.setItem("initialCards", JSON.stringify(updateCards))
        handleSaveProfile(updateCards)
    },[] )

    function sendHistory(text){
      const updateCards = JSON.parse(localStorage.getItem("currentUser"))
      const toSend = {
          login: updateCards.login,
          lesson: 'День третий',
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
          lessonOneHeader={lessonThreeHeader}
          lessonOneTitle={lessonThreeTitle}
          lessonOneSubtitle={lessonTwoSubtitle}
        />
        <ListLesson 
          lessonOneInstruction={lessonTwoInstruction} 
          list={list} 
        />
        <Feedback 
          lessonOnePublic={lessonTwoPublic} 
          sendHistory={sendHistory}
        />
        <Task
          taskOneHead={taskOneHead}
          taskOne={taskOne}
          file={stopWord}
          link={'Скачать статью'}
        />
        <Task
          taskOneHead={taskTwoHead}
          taskOne={taskTwo}
          listOne={listOfTask}
          link={'Инсайт: люди никогда не разговаривают о деньгах, ведь это не принято🤷🏼‍♀️'}
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
          link={"9 законов успеха в жизни"}
          file={fileImage}
          image={fileImage}
        />
        <Task
          taskOneHead={bonusHeadTwo}
          taskOne={bonusTwo}
          listOne={false}
          link={"Нажмите сюда и вы скачаете ЧекЛист"}
          file={fire}
        />
        <HomeButton />
      </main>
</>
    )
}
export default LessonThree;