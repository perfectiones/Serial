import '../scss/video/ControlsVideo.scss'
import Progress from './MainPage/progress/Onprorgess';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import React, {useState} from 'react';
import play from '../img/videoPlayer/play.svg'
import pause from '../img/videoPlayer/pause.svg'

const ControlsVideo = ({
    handlePlay,
    playing,
    handleVolume,
    volume,
    duration,
    playedSeconds,
    funcs
}) => {
    return(
        <>

        <div className='videoWrap'
            onClick={handlePlay}        
        >

        </div>

        <div 
            className='videoControlsPlay'
            onClick={handlePlay}        
        > {!playing  ? <div className='play' /> : <div className='pause' /> }</div>

        <div className='videoControls'>
            <Progress 
                playedSeconds={playedSeconds}
                duration={duration}
                funcChange={funcs.progress}
            />

            <div className='videoControls__header'>

                <div className='header__start'>
                    
                    <div className='playControl'
                        onClick={handlePlay}
                    >

                    </div>

                    <input type='range'
                        value={volume}
                        min='0'
                        max='1'
                        step='0.1'
                        onChange={handleVolume }
                    />

                    <div className='time'>

                        <p>
                            {Math.floor(playedSeconds / 59)}:{Math.round(playedSeconds % 59)} / {Math.floor(duration / 60)}:{Math.round(duration % 60)}

                        </p>
                    </div>

                </div>

                

                <div onClick={funcs.fullscreen}
                    className='fullscreen'

                />

                
            </div>
            
            <KeyboardEventHandler 
                handleKeys={["space"]}
                onKeyEvent={('space', handlePlay)}
                
            />

            <KeyboardEventHandler 
                handleKeys={['f']}
                onKeyEvent={('f',funcs.fullscreen)}
            /> 

        </div>
        
        </>
        
    )
}
export default ControlsVideo;