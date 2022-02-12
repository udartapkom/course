import React, { useState, useEffect } from "react";

function ListLesson(props) {
  const { lessonOneInstruction, list } = props;
  var i = 0;
  var n = 1;
  var z = 650;
    //хук для определения разрешения экрана
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowSize = () => setWindowWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener("resize", updateWindowSize);
  
      return () => window.removeEventListener("resize", updateWindowSize);
    });

   if(windowWidth <= 1050){
    z=500
   } else {
    z=650
   }
   
  return (
    <>
      <section className="listlesson__content">
        <div>
          <p className="listlesson__text">{lessonOneInstruction}</p>
        </div>
        <div className="listlesson__list-container">
          <div className="listlesson__line"></div>
          <div className="listlesson__borderLine"></div>
          <ul className="listlesson__list">
            {list.map((item) => (
              <li className="listlesson__element">
                {/* расчёт смещения элементов списка на 30рх вправо, в зависимости от количества элементов в массиве + расчёт номера элемента списка */}
                <div className="listlesson__circle" style={{ marginLeft: `${(i = i + 30)}px` }}>
                  <p className="listenlesson__number">{`0${n++}`}</p>
                </div>
                 {/* расчёт смещения элементов списка на 30рх влево, в зависимости от количества элементов в массиве*/}
                <p className="listlesson__item" style={{ width: `${(z = z - 30)}px` }}>{item}</p>
              </li>
            ))}
            <div className="listlesson__border"></div>
          </ul>
        </div>
      </section>
    </>
  );
}
export default ListLesson;
