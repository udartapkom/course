import React from "react";
import Header from "../../components/Header/Header";
import IntroLesson from "../../components/IntroLesson/IntroLesson";
import Task from "../../components/Task/Task";
import Meditation from "../../components/Meditation/Meditation";
import HomeButton from "../../components/HomeButton/HomeButton";
import Background from "../../components/Background/Background";

import meditationAudioLink from "../../sounds/meditation_seven.mp3";
import file from "../../sounds/meditation_seven.mp3";
import insight from "../../images/insight.png";

function LessonSeven(props) {
  const {
    lessonSevenHeader,
    taskSevenHead,
    taskSeven,
    meditationTitle,
    meditation,
    bonusHead,
    bonusText,
  } = props.lessonSeven;
  return (
    <>
      <Header 
      {...props}
      />
      <main className="main__content">
      <Background />
        <IntroLesson
          lessonOneHeader={lessonSevenHeader}
          lessonOneTitle={taskSevenHead}
          lessonOneIntro={taskSeven}
        />
        <Meditation
          meditationTitle={meditationTitle}
          meditation={meditation}
          link={meditationAudioLink} 
          file={file}
          />
        <Task
          taskOneHead={bonusHead}
          bonus={"Бонус"}
          taskOne={bonusText}
          file={insight}
          link={"9 законов успеха в жизни"}
          image={insight}
        />
        <HomeButton />
      </main>
    </>
  );
}
export default LessonSeven;
