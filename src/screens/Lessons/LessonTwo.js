import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import ListLesson from "../../components/ListLesson/ListLesson";
import Feedback from "../../components/Feedback/Feedback";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";

import limitingBeliefs from "../../documents/limiting_beliefs.pdf";
import brain from "../../documents/brain.pdf";
import file from "../../sounds/meditation_two.mp3";
import fileImage from "../../images/swband.png";

const link = "https://youtu.be/NNNTvj8cJRI";

function LessonTwo(props) {
  const {
    lessonTwoHeader,
    lessonTwoTitle,
    lessonTwoIntro,
    lessonTwoSubtitle,
    lessonTwoInstruction,
    list,
    lessonTwoPublic,
    taskOfDay,
    taskOfDayText,
    listOfDay,
    listOfDaySubtitle,
    meditationTitle,
    meditation,
    meditationInstriction,
    meditationList,
    additionalyHead,
    additionaly,
    bonusHead,
    bonus,
    bonusHeadTwo,
    bonusTwo,
  } = props.lessonTwo;

  return (
    <>
      <Header />
      <main className="main__content">
        <IntroLesson
          lessonOneHeader={lessonTwoHeader}
          lessonOneTitle={lessonTwoTitle}
          lessonOneIntro={lessonTwoIntro}
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
          taskOneHead={taskOfDay}
          taskOne={taskOfDayText}
          taskTwo={listOfDaySubtitle}
          listOne={listOfDay}
          file={limitingBeliefs}
          link={'Скачать файл «ограничивающие убеждения»'}
        />
        <Meditation
          meditationTitle={meditationTitle}
          meditation={meditation}
          file={file}
          link={file}
          listOne={meditationList}
          what={meditationInstriction}
        />
        <Task 
          taskOneHead={additionalyHead} 
          taskOne={additionaly} 
          link={'Посмотрите фильм «ЗАКОНЫ ВСЕЛЕННОЙ. ЭНЕРГИЯ ПРИТЯЖЕНИЯ ДЕНЕГ»'} 
          file={link}
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
          file={brain}
        />
        <HomeButton />
      </main>
    </>
  );
}
export default LessonTwo;
