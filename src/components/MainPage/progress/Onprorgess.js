
const Progress = ({
    duration,
    playedSeconds,
    funcChange

}) => {
    console.log(playedSeconds);
    const progressStyle = {
        width: playedSeconds/(duration/100)+'%'
        
     };
      
    return(
        <>

            <div className="progressWrap">
                <input type='range' 
                    className="videoControlsProgress"
                    min='0'
                    max={duration}
                    value={playedSeconds}
                    step='0.1'
                    onChange={(e) => funcChange(e.target.value)}
                />

                <div className="progressBar"
                    style={progressStyle}
                >

                </div>
            </div>
            
            
        </>
    )

}

export default Progress;