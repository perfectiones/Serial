import "../scss/Main.scss";
import trailer from "../video/theLastOfUsTrailer.mp4";
import { useRef } from "react";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import ControlsVideo from "./ControlsVideo";
import '../scss/video/Video.scss';

function Main() {

  
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
      <div className="videoWrapper">

      <ReactPlayer 
        url={trailer}

        controls = {false}

      />

      <ControlsVideo />
      </div>
            
        </div>
      </div>
    </main>
  );
}

export default Main;
