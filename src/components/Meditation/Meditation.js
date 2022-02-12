import React from "react";
import Player from "../Player/Player";
import { AudioPlayerProvider } from "react-use-audio-player";
//import file from "../../sounds/meditation_one.mp3";



function Meditation(props) {
    const {
        meditationTitle,
        meditation,
        file,
        link,
        listOne,
        what
    } = props;
    return(
<>
{/* здесь переиспользуются классы из Task, т.к. нет смысла писать тоже самое */}
<section className="task">
<h2 className="task__title">{meditationTitle}</h2>
    <div className="meditation__elements">
    <div>
        <p className="task__text">{meditation}</p>
        <p className="task__text">{what}</p>
        {listOne ? (
          <ul className="task__list">
            {listOne.map((item) => (
              <li className="task__list-element" key={item._id}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
    </div>
    <div className="meditation__player">
        <a className="meditation__link" href="https://drive.google.com/file/d/1ocx_bxIFFpQ1oA-7h6TrHUEm5SqcPvef/view?usp=sharing">
            Как правильно медитировать смотри <span className="meditation__link_color_blue">здесь</span></a>
        <AudioPlayerProvider>
            <Player file={file} />
        </AudioPlayerProvider>
        <a className="meditation__link" href={link} download="Meditation.mp3">
            Если проигрыватель не работает - скачайте <span className="meditation__link_color_blue">медитацию</span></a>
    </div>
    </div>

</section>
</>
    )
}
export default Meditation;