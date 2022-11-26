import ReactPlayer from "react-player";
import trailer from '../../video/theLastOfUsTrailer.mp4'
import ControlsVideo from "../ControlsVideo";
import '../../scss/video/Video.scss';
import React, { useState, useRef } from "react";
import screenfull from 'screenfull';


const Video = () => {
    const [state, setState ] = useState({
        playing: false,
        volume: 0.5,
        duration: 0,
        playedSeconds: 0
    })


    const {
        playing,
        volume,
        duration,
        playedSeconds
    } = state

    const refPlayer = useRef();
    const refPlayerContainer = useRef();

    const handlePlay = () =>{
        setState({...state, playing: !state.playing})
    }

    const handleVolume = (e) => {
        setState({...state, volume: e.target.value})
    } 

    const handleProgress = (e) => {
        setState({...state, ...e})
    }

    const handleDuration = (time) => {
        setState({...state, duration: time})
    }

    const handleProgressControls = (e) => {
        refPlayer.current.seekTo(Number(e))
    }
    const handleFullScreen = () => {
        screenfull.toggle(refPlayerContainer.current)
    }
    return (
        <div className="videoWrapper" ref={refPlayerContainer}>
            <ReactPlayer 
                url={trailer}
                width='100%'
                height='auto'
                controls = {false}

                playing={playing}
                volume={volume}
                ref={refPlayer}
                onProgress={handleProgress}
                onDuration={handleDuration} 
            />

            <ControlsVideo 
                handlePlay = {handlePlay}
                playing={playing}
                volume = {volume}
                handleVolume = {handleVolume}
                duration = {duration}
                playedSeconds = {playedSeconds}
                funcs = {{
                    progress: handleProgressControls,
                    fullscreen: handleFullScreen
                }}
            />

        </div>
    )
}

export default Video;