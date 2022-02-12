import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

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

    return(
<>
<Header />
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
          link={file}
        />
        <Task
          taskOneHead={bonusHead}
          bonus={"Бонус"}
          taskOne={bonus}
          listOne={false}
          link={"9 законов успеха в жизни"}
          file={fileImage}
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