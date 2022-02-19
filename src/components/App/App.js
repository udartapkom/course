import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logo.svg';
import  { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/api/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';
import Error404 from '../../screens/error404/error404';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
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

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [textPopup, setTextPopup] = React.useState("");
  const [allUsers, setAllUsers] = React.useState([]);
  const [allHistories, setAllHistories] = React.useState([]);
  const history = useHistory();
  let location = useLocation();

  function onClosePopup() {
    setIsInfoPopupOpen(false);
    setTextPopup("");
  }

  React.useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, []);

  function onSubmitRegister({ name, login, password }) {
    if (!name || !login || !password) {
      return;
    }
    mainApi
      .register(name, login, password)
      .then((res) => {
        if (res) {
          setTextPopup(`Пользователь с логином ${login} и паролем ${password} успешно зарегистрирован!`);
          setIsInfoPopupOpen(true);
          getAllUsers()
          //login(login, password); чтобы автоматически не авторизовываться
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setTextPopup("Пользователь с таким логином уже существует");
          setIsInfoPopupOpen(true);
        } else {
          setTextPopup("При регистрации произошла ошибка");
          setIsInfoPopupOpen(true);
        }
      });
  }

  function login({ login, password }) {
    if (!login || !password) {
      return;
    }
    mainApi
      .login(login, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          getCurrentUser();
          history.push("/intro");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setTextPopup("Неверный логин или пароль");
          setIsInfoPopupOpen(true);
        } else {
          setTextPopup("При авторизации произошла ошибка");
          setIsInfoPopupOpen(true);
        }
      });
  }
 
  function getCurrentUser() {
    const token = localStorage.getItem("token");
    mainApi
      .getCurrentUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
          localStorage.setItem("initialCards", JSON.stringify(res))
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSaveProfile(data) {
        mainApi
      .saveProfile(data)
      .then((profile) => {
        setCurrentUser(profile);
        //setTextPopup("Профиль успешно обновлен");
        //setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        if (err.status === 409) {
          setTextPopup("Пользователь с таким логином уже существует");
        } else {
          setTextPopup("При обновлении профиля произошла ошибка");
        }
        setIsInfoPopupOpen(true);
      });   
  }

  function getAllUsers(){
    mainApi
    .getAllUsers()
    .then((data) => {
      setAllUsers(data)
    })
    .catch((err) => {
      if(err) {
        setTextPopup(`произошла ошибка ${err}`);
      }
    })
  }

  function saveUserLogin(data, userId){
    console.log(data, userId)
    mainApi
    .updateLogin(data, userId)
    .then((data) => {
      setTextPopup(`Логин пользователя изменён на \" ${data.login} \"`);
          setIsInfoPopupOpen(true);
    })
    .catch((err) => {
      if (err.status === 409) {
        setTextPopup("Пользователь с таким логином уже существует");
      } else {
        setTextPopup("При обновлении профиля произошла ошибка");
      }
      setIsInfoPopupOpen(true);
    });   
  }

  function saveUserPassword(data, userId){
    mainApi
    .updatePassword(data, userId)
    .then((data) => {
      setTextPopup("Пароль пользователя успешно изменён!");
          setIsInfoPopupOpen(true);
    })
    .catch((err) => {
      if (err.status === 409) {
        setTextPopup("Пользователь с таким логином уже существует");
      } else {
        setTextPopup("При обновлении профиля произошла ошибка");
      }
      setIsInfoPopupOpen(true);
    });   
  }

  function killUser(userId){
    mainApi
    .deleteUser(userId)
    .then((data) => {
      setTextPopup(`Пользователь ${data.login} успешно удалён`);
      setIsInfoPopupOpen(true);
      getAllUsers()
    })
    .catch((err) => {
      setTextPopup("При удалении профиля произошла ошибка" + err);
      setIsInfoPopupOpen(true);
    })
  }

function saveHistory(data){
  mainApi
  .saveHistory(data)
  .then(() => {
    setTextPopup("История успешно отправлена!");
    setIsInfoPopupOpen(true);
  })
  .catch(() => {
    setTextPopup("При отправке истории произошла ошибка");
    setIsInfoPopupOpen(true);
  })
}

function getAllHistories(){
  mainApi
  .getAllHistories()
  .then((data) => {
    setAllHistories(data)
  })
  .catch(() => {
    setTextPopup("При получении истории произошла ошибка");
    setIsInfoPopupOpen(true);
  })
}

function delHistory(data){
  mainApi
  .delHistories(data)
  .then((data) => {
    
    setTextPopup("История удалена!");
    setIsInfoPopupOpen(true);

  })
  .catch(() => {
    setTextPopup("При удалении истории произошла ошибка");
    setIsInfoPopupOpen(true);
  })
}
  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("initialCards");
    localStorage.removeItem("allUsers");
    setLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Login onSubmitLogin={login} />
        </Route>
        <ProtectedRoute
          exact
          path="/signup"
          component={Register}
          onSubmitRegister={onSubmitRegister}
          handleSignOut={handleSignOut}
          getAllUsers={getAllUsers}
          allUsers={allUsers}
          saveUserLogin={saveUserLogin}
          saveUserPassword={saveUserPassword}
          getAllHistories={getAllHistories}
          allHistories={allHistories}
          delHistory={delHistory}
          killUser={killUser}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          exact
          path="/intro"
          component={Intro}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          exact
          path="/days"
          component={Days}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          exact
          path="/lessonone"
          component={LessonOne}
          lessonOne={lessons.lessonOne}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <ProtectedRoute
          exact
          path="/lessontwo"
          component={LessonTwo}
          lessonTwo={lessons.lessonTwo}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <ProtectedRoute
          exact
          path="/lessonthree"
          component={LessonThree}
          lessonThree={lessons.lessonThree}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <ProtectedRoute
          exact
          path="/lessonfour"
          component={LessonFour}
          lessonFour={lessons.lessonFour}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <ProtectedRoute
          exact
          path="/lessonfive"
          component={LessonFive}
          lessonFive={lessons.lessonFive}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <ProtectedRoute
          exact
          path="/lessonsix"
          component={LessonSix}
          LessonSix={lessons.lessonSix}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <ProtectedRoute
          exact
          path="/lessonseven"
          component={LessonSeven}
          lessonSeven={lessons.lessonSeven}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          loggedIn={loggedIn}
          saveHistory={saveHistory}
        />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      <Popup title={textPopup} isOpenPopup={isInfoPopupOpen} onClosePopup={onClosePopup} />
    </CurrentUserContext.Provider>
  );
}
export default App;
