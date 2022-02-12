import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

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
return (
  <>
    <Header />
    <main className="main__content">
      <Background />
      <Task 
      taskOneHead={lessonSixHeader} 
      taskOne={taskSixHead} 
      taskThree={taskSix} 
      />
      <Meditation 
      meditationTitle={meditationTitle} 
      link={file} 
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