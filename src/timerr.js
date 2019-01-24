import React from 'react'


const conversion= (time)=>{
    const milsecparsec= 1000
    const milsecparmin= 1000*60
    const milsecparheur= 1000*60*60

    const heurs= Math.floor(time/milsecparheur)
    const heurreste= time % milsecparheur

    const minutes= Math.floor(heurreste/milsecparmin)
    const minuterste= heurreste % milsecparmin

    const seconds= Math.floor(minuterste / milsecparsec)

    return String(heurs).padStart(2,0) + ":" + String(minutes).padStart(2,0)+ ":" + String(seconds).padStart(2,0)
    

}


const Timer = (props) => {

    
    return <div className="time-container">
        <div className="time-inner-container">
            <div className="t-digits">
            {conversion(props.time)}
            </div>
            <div className="time-text">
                <div>Hour</div>
                <div>Minute</div>
                <div>Second</div>
            </div>
            <div>
                <button className="btnstart" onClick={props.demarrer}>Start</button>
                <button className="btnpause" onClick={props.pause}> Stop</button>
                <button className="btnreset" onClick={props.initialise}> Reset</button>
            </div>
        </div>
    </div>
}
    
export default Timer