import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Background from "../../components/Background/Background";
import Popup from '../../components/Popup/Popup';
import { useHistory } from "react-router-dom/";

import remove from "../../images/remove.svg"

function Register(props) {

const { 
  onSubmitRegister,
  getAllUsers,
  allUsers,
  saveUserLogin,
  saveUserPassword,
  killUser,
  getAllHistories,
  allHistories,
  delHistory
} = props;

const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
const [textPopup, setTextPopup] = React.useState("");

function onClosePopup() {
  setIsInfoPopupOpen(false);
  setTextPopup("");
}

  //Хуки состояния формы
  const [name, setName] = useState("");
  const [login, setLogin] = useState(""); //kjuby
  const [newLogin, setNewLogin] =useState("");
  const [password, setPass] = useState("");

  const [weryNewPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  //const history = useHistory();

  //Чистим форму
  function cleanForm() {
    setName("");
    setLogin("");
    setPass("");
    setNewLogin("");
  }
  function cleanPassInputs(){
    setNewPassword("");
    setNewPasswordConfirm("");
  }
//console.log(oldAllUsers)
  React.useEffect(() => {
    getAllUsers()
    getAllHistories()
  },[])

 // Блок смены логина
function editLogin() {
  const updateUsers = JSON.parse(localStorage.getItem("allUsers"));
  const findeUser = updateUsers.find((loginLocal) => loginLocal.login === login);
  if(!newLogin){
    setTextPopup("Поле логина пустое!");
    getAllUsers()
  } else {
    saveUserLogin(newLogin, findeUser._id)
    getAllUsers() //обновляем стейт
    cleanForm()
  }
}
// конец блока смены логина

function editPassword(){
  if(weryNewPassword !== newPasswordConfirm){
    setTextPopup("Пароли не совпадают!");
    setIsInfoPopupOpen(true)
    cleanPassInputs()
  } else {
    const updateUsers = JSON.parse(localStorage.getItem("allUsers"));
    const findeUser = updateUsers.find((loginLocal) => loginLocal.login === login);
    saveUserPassword(weryNewPassword, findeUser._id)
    cleanPassInputs()
  }
}

function delUser(){
    const updateUsers = JSON.parse(localStorage.getItem("allUsers"));
    const findeUser = updateUsers.find((loginLocal) => loginLocal.login === login);
    killUser(findeUser._id)
    getAllUsers()
    cleanForm() 
}
// попап редактор
function updatePopup(event){
  const loginName = event.target.textContent;
  setLogin(loginName)
  setTextPopup("редактор пользователя");
  setIsInfoPopupOpen(true)
}

//удалить историю
function deleteHistory(event){
  const text = event.target.parentNode.textContent;
  delHistory({text: text})
  getAllHistories()
}

localStorage.setItem("allUsers", JSON.stringify(allUsers))
const list = allUsers.map((item) => (
  <ul className="register__list-header">
    <li className="register__list-header-element" onClick={updatePopup} key={item._id}>
      {item.login}
    </li>
  </ul>
))

const listHistories = allHistories.map((item) => (
<div className="register__history-element">
    <p>{item.text}
    <img src={remove} alt="Удалить" className="register__history-delete" onClick={deleteHistory}></img>
    </p> 
    <span className="register__history-lesson">{item.lesson}</span>
    <span>{item.login}</span>
    </div>

))
  function newPasswordInput(event) {
    setNewPassword(event.target.value)
  }
  function newPasswordInputConfirm(event) {
    setNewPasswordConfirm(event.target.value)
  }
  function newLoginInput(event) {
    setNewLogin(event.target.value);
  }
  function loginInput(event) {
    setLogin(event.target.value);
    setName(event.target.value);
  }
  function passInput(event) {
    setPass(event.target.value);
  }
  //Выполняем при нажатии кнопки входа
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitRegister({name, login, password});
    cleanForm()
  }
  
  return (
    <>
      <Header {...props} />
      <section className="login-page login-page_state_admin">
        <Background />
        <div className="register__container">
        <Form
          name="form-register"
          className="Form__login Form__login_type_register"
          title="Новая регистрация"
          onSubmit={handleSubmit}
        >
          <label>
            <input
              type="text"
              id="login"
              name="login"
              className="login-page__item"
              maxLength="40"
              minLength="3"
              placeholder="Логин"
              required
              onChange={loginInput}
              value={login}
            />
          </label>
          <label>
            <input
              id="password"
              type="password"
              name="password"
              className="login-page__item"
              maxLength="20"
              minLength="6"
              placeholder="Пароль"
              required
              onChange={passInput}
              value={password}
            />
          </label>
          <button type="submit" className="login-page__button" onClick={getAllUsers}>
            Зарегистрировать
          </button>
        </Form>
        <div className="register__users-wrapper">
          <ul className="register__list-header">
            <li className="register__list-header-element">Пользователи</li>
          </ul>
          <div className="register__line"></div>
          <ul className="register__list-content">{list}</ul>
        </div>
        </div>

        <div className="register__histories">
{listHistories}
</div>
      </section>
      <Popup title={textPopup} isOpenPopup={isInfoPopupOpen} onClosePopup={onClosePopup} mod={"register__popup_mod"}>
      <div className="register__popup-row">
      <div className="register__popup_position-element">
        <label>
          <input
            type="text"
            id="newLogin"
            name="newLogin"
            className="login-page__item login-page__item_mobile"
            maxLength="40"
            minLength="3"
            placeholder={login}
            required
            onChange={newLoginInput}
            value={newLogin}
          />
        </label>
        <button type="submit" className="login-page__button register__buttons" onClick={editLogin}>
          обновить логин
        </button>
        <button type="submit" className="login-page__button register__buttons" onClick={delUser}>
          удалить этого пользователя
        </button>
        </div>
        <div>
        <label>
          <input
            id="weryNewPassword"
            type="text"
            name="weryNewPassword"
            className="login-page__item login-page__item_mobile"
            maxLength="20"
            minLength="6"
            placeholder="Пароль"
            required
            onChange={newPasswordInput}
            value={weryNewPassword}
          />
        </label>
        <label>
          <input
            id="passwordConfirm"
            type="text"
            name="passwordConfirm"
            className="login-page__item login-page__item_mobile"
            maxLength="20"
            minLength="6"
            placeholder="Пароль ещё раз"
            required
            onChange={newPasswordInputConfirm}
            value={newPasswordConfirm}
          />
        </label>
        <button type="submit" className="login-page__button register__buttons" onClick={editPassword}>
          обновить пароль
        </button>
        </div>
        </div>
      </Popup>
    </>
  );

}
export default Register;
