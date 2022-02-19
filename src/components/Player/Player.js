import React, { useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";

function Player(props) {
  const [playerVolume, setPlayerVolume] = useState("1");
// loading,
  const { volume, togglePlayPause, ready,  playing } = useAudioPlayer({
    src: props.file,
    format: "mp3",
    html5: true,
    autoplay: false,
    onend: () => console.log("Трек окончен!"),
  });
  function handleChange(event) {
    setPlayerVolume(event.target.value);
    return volume(playerVolume);
  }
  return (
    <>
    {/* {loading ? <div className="player__info">Идёт загрузка</div> : null} */}
      <div className="player">
        <div className="player__content">
          {/* {!ready && !loading ? <div className="player__info">Нет файла</div> : null} */}
          {playing ? (
            <div className="player__info">Воспроизведение</div>
          ) : (
            <div className="player__info">Пауза</div>
          )}
          <button className="player__button" onClick={togglePlayPause}>
            {playing ? "Pause" : "Play"}
          </button>
        </div>
        <span className="player__volume-wrapper">
          <input
            className="player__volume"
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={handleChange}
          ></input>
          <p className="player__volume-numbers">Громкость {playerVolume * 100}%</p>
        </span>
      </div>
    </>
  );
}
export default Player;
