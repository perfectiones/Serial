
const Progress = ({
    duration,
    playedSeconds,
    funcChange

}) => {

    return(
        <>
            <input type='range' 
                className="videoControlsProgress"
                min='0'
                max={duration}
                value={playedSeconds}
                step='1'
                onChange={(e) => funcChange(e.target.value)}
                />
        </>
    )

}

export default Progress;