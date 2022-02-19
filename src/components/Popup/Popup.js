function Popup({isOpenPopup, title, onClosePopup, userEditor, mod, ...props}) {
  
  function handleOnSubmit(evt) {
    evt.preventDefault();
  }

  return (
    
    <section className={`popup ${isOpenPopup &&  'popup_opened'}`} >

    <form action="post" name="popup__container" className={`popup__form ${mod}`} noValidate onSubmit={handleOnSubmit}>
      <button type="button" className="popup__close" onClick={onClosePopup}></button>
      
      <h2 className="popup__title">{title}</h2>
      
      {props.children}

      {props.submitText && <button className="popup__button">{props.submitText}</button>}

    </form>
  </section>
  )
}

export default Popup;