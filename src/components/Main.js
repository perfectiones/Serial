import "../scss/Main.scss";
import trailer from "../video/theLastOfUsTrailer.mp4";
import { useRef } from "react";
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";

function Main() {

  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
      document.querySelector('.videoFooter').classList.remove("activeFooter");
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
      document.querySelector('.videoFooter').classList.add("activeFooter");
      
    }
  };


  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);
  
  return (
    <main className="container content">
      <div className="row">
        <div className="col-lg-12 content__title">
          <h1>The Last Of Us</h1>
        </div>
        <div className="col-lg-12 content__subtitle">
          <h2>Одни из нас</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 content__discription">
          <p>
            На нашем сайте вы сможете посмотреть <span>The Last of Us</span>
          </p>
        </div>
      </div>
      
      <div className="row">
      <div className="col-12 d-flex justify-content-center">
      <div className="videoContainer">

      <video
        id="video1"
        ref={videoRef}
        className="video"
        src={trailer}
      ></video>

      <div className="controlsContainer">
        <div className="controls">
          <img
            onClick={revert}
            className="controlsIcon"
            alt="PRED"
            src="/backward-5.svg"
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt="PAUSE"
              src="/pause.svg"
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt=""
              src="/play.svg"
            />
          )}
          <img
            className="controlsIcon"
            onClick={fastForward}
            alt=""
            src="/forward-5.svg"
          />
        </div>
      </div>
      <div className="videoFooter">
      <div className="timecontrols">
        
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%`}}
            className="time_progressBar"
          >
          </div>
          <div className="time_circle">
              
            </div>
        </div>
        
      </div> 

      <div className="controlsEpisode">
      <div className="videoContact">
        <div className="videoButton">

          <div className="prevEpisode episodeNav">
                </div>
                {playing ? (
                      <img
                        onClick={() => videoHandler("pause")}
                        className="controlsIcon--small"
                        alt="PAUSE"
                        src="/pause.svg"
          
                      />
                    ) : (
                      <img
                        onClick={() => videoHandler("play")}
                        className="controlsIcon--small"
                        alt=""
                        src="/play.svg"
                      />
                    )}
                    <div className="nextEpisode episodeNav">
          
                    </div>

        </div>
        <div className="volume">
        <input type="range" className="volumeChange"/>
        </div>

                    <div className="time">
            <p className="controlsTime">
                {Math.floor(currentTime / 60) +
                  ":" +
                  ("0" + Math.floor(currentTime % 60)).slice(-2)}
            </p>
            <p>/</p>     
            <p className="controlsTime">
                {Math.floor(videoTime / 60) +
                  ":" +
                  ("0" + Math.floor(videoTime % 60)).slice(-2)}
            </p>
      </div>
      </div>

      </div>
           
      </div>
      </div>
            
        </div>
      </div>
    </main>
  );
}

export default Main;
