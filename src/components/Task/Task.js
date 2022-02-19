import React from "react";
//Переиспользуем этот компонент много раз, просто передавая нужные нам параметры
function Task(props) {
  const { 
      taskOneHead,
      bonus, 
      taskOne,
      taskTwo,
      taskThree, 
      listOne,
      link,
      file,
      image
    } = props;
  return (
    <>
      <section className="task">
      <h2 className="task__title">{bonus}</h2>
        <h2 className="task__title">{taskOneHead}</h2>
        <p className="task__text">{taskOne}</p>
        <p className="task__text">{taskThree}</p>
        {listOne ? (
          <ul className="task__list">
            {listOne.map((item) => (
              <li className="task__list-element" key={item._id}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="task__text">{taskTwo}</p>
     
      
      <div className="task__bonus">
      <a className= "task__link  task__link_position_center" href={image}>< img className="task__image" src={image} ></img></a> 
        <a className={`task__link ${!file ? 'task__link-disable' : null }`} href={file} download="image.png"> {link} </a>
      </div>


             </section>
    </>
  );
}
export default Task;
