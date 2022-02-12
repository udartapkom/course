import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logo.svg';

import Error404 from '../../screens/error404/error404';
import Login from '../../screens/Login/Login';
import Intro from '../../screens/Intro/Intro';
import Days from '../../screens/Days/Days';
import LessonOne from '../../screens/Lessons/LessonOne';
import LessonTwo from '../../screens/Lessons/LessonTwo';
import LessonThree from '../../screens/Lessons/LessonThree';
import LessonFour from '../../screens/Lessons/LessonFour';
import LessonFive from '../../screens/Lessons/LessonFive';
import LessonSix from '../../screens/Lessons/LessonsSix';
import LessonSeven from '../../screens/Lessons/LessonSeven';

import { lessons } from '../../utils/DATA/initialLessons';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/intro">
        <Intro />
      </Route>
      <Route exact path="/days">
        <Days />
      </Route>
      <Route exact path="/lessonone">
        <LessonOne 
        lessonOne={lessons.lessonOne}
        />
      </Route>
      <Route exact path="/lessontwo">
        <LessonTwo
        lessonTwo={lessons.lessonTwo}
        />
      </Route>
      <Route exact path="/lessonthree">
        <LessonThree
        lessonThree={lessons.lessonThree}
        />
      </Route>
      <Route exact path="/lessonfour">
        <LessonFour
        lessonFour={lessons.lessonFour}
        />
      </Route>
      <Route exact path="/lessonfive">
        <LessonFive
        lessonFive={lessons.lessonFive}
        />
      </Route>
      <Route exact path="/lessonsix">
        <LessonSix
        LessonSix={lessons.lessonSix}
        />
      </Route>
      <Route exact path="/lessonseven">
      <LessonSeven
        lessonSeven={lessons.lessonSeven}
        />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  );
}
export default App;//
