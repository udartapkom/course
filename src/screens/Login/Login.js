import React, { useState } from "react";

import Form from "../../components/Form/Form";
//import arrow from "../../images/rightArrow.svg";
import Background from "../../components/Background/Background";
function Login(props) {
  //Хуки состояния формы
  const [login, setLogin] = useState("");
  const [password, setPass] = useState("");

  //Чистим форму
  function cleanForm() {
    setLogin("");
    setPass("");
  }
  //Отлавливаем ввод в поля
  function loginInput(event) {
    setLogin(event.target.value);
  }
  function passInput(event) {
    setPass(event.target.value);
  }
  //Выполняем при нажатии кнопки входа
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Нажата кнопка");
  }
  //Формируем страницу входа. Передаём параметры формы и непосредственно поля
  return (
    <>
      <section className="login-page">
        <Background />
        <Form 
        name="form-login" 
        className="Form__login" 
        title="Рады видеть" 
        onSubmit={handleSubmit}>
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
              type="password"
              id="password"
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
          <button type="submit" className="login-page__button">
            {/* <img className="login-page-button__arrow" src={arrow} alt='стрелка'></img> */}
            Войти
          </button>
        </Form>
      </section>
    </>
  );
}
export default Login;
