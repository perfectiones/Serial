import '../scss/video/ControlsVideo.scss'
import Progress from './MainPage/progress/Onprorgess';


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

        <div 
            className='videoControlsPlay'
            onClick={handlePlay}        
        > {!playing  ? 'Play' : 'Pause'}</div>

        <div className='videoControls'>
            <div className='videoControls__header'>
                <div>
                    <input type='range'
                    value={volume}
                    min='0'
                    max='1'
                    step='0.1'
                    onChange={handleVolume }
                    />
                </div>
                
                <div onClick={funcs.fullscreen}>Full</div>
            </div>
            

            <Progress 
                playedSeconds={playedSeconds}
                duration={duration}
                funcChange={funcs.progress}
            />
        </div>

        
        </>
        
    )
}
export default ControlsVideo;