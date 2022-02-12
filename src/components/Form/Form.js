import React from "react";
//Форма входа, принимает все параметры и children из вызывающего компонента
function Form(props) {
  const { 
    formName, 
    className, 
    onSubmit, 
    title,
    showSubtitle,
    children } = props;
  return (
    <>
      <div className="Form">
        <form
          noValidate
          name={formName}
          action="post"
          className={`${className}`}
          onSubmit={onSubmit}
        >
          <h2 className="Form__title">{title}</h2>
          {children}
        </form>
        <p className={`Form__text ${!showSubtitle ? `Form__text_state_disable` : null}`}>Случайных людей здесь нет...</p>
      </div>
    </>
  );
}
export default Form;
