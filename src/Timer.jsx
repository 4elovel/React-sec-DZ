import React, {useState} from "react";
function Timer() {
    const [timer, setTimer] = useState(new Date)
    setInterval(() => {
        setTimer(new Date);
    },1000);
    return (
        <div>
            {timer.toLocaleTimeString()}
        </div>
    )
  }
  
  export default Timer