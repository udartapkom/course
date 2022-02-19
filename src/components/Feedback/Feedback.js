import React, { useState } from "react";
import Form from "../Form/Form";

function Feedback(props) {
  const { 
    lessonOnePublic,
    sendHistory
   } = props;
  const [feedback, setFeedback] = useState("");

  function cleanForm() {
    setFeedback("");
  }
  //Отлавливаем ввод в поля
  function feedbackInput(event) {
    setFeedback(event.target.value);
  }
  //Выполняем при нажатии кнопки входа
  function handleSubmit(event) {
    event.preventDefault();
    sendHistory(feedback)
  }
  return (
    <>
      <section className="feedback">
        <p className="feedback__text">{lessonOnePublic}</p>
        <Form
          name="form-feedback"
          className="feedback__form"
          title="Ваша история"
          showSubtitle={false}
          onSubmit={handleSubmit}
        >
          <textarea className="feedback__textArea" onChange={feedbackInput}></textarea>
          <div className="feedback__buttons">
            <button
              type="reset"
              onClick={cleanForm}
              className="login-page__button login-page__button_margin_top"
            >
              очистить
            </button>
            <button type="submit" className="login-page__button login-page__button_margin_top">
              отправить
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}
export default Feedback;
