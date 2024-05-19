import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0);
  const intervalId = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1);
    }

    return () => {
      clearInterval(intervalId.current);
    }
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  const stopStopwatch = () => {
    setIsRunning(false);
  }

  const resetStopwatch = () => {
    setElapsedTime(0);
    setIsRunning(false);
  }

  const formatMinutes = () => {
    const minutes = Math.floor(elapsedTime / (1000 * 60));
    return padNumber(minutes);
  }

  const formatSeconds = () => {
    const seconds = Math.floor(elapsedTime / 1000);
    return padNumber(seconds);
  }

  const formatMiliseconds = () => {
    const miliseconds = Math.floor(elapsedTime % 1000);
    return padNumberMiliseconds(miliseconds);
  }

  const padNumber = (number) => {
    return number > 9 ? `${number}` : `0${number}`;
  }

  const padNumberMiliseconds = (number) => {
    return number > 99 ? 
      `${number}`
      : number > 9 ?
        `0${number}`
        : `00${number}`;
  }

  return (
    <div id="stopwatch-container">
      <div id="stopwatch">
        <h1 className="stopwatch-timer" id="minutes">
          {formatMinutes()}
        </h1>
        <h1>:</h1>
        <h1 className="stopwatch-timer" id="seconds">
          {formatSeconds()}
        </h1>
        <h1>:</h1>
        <h1 className="stopwatch-timer" id="miliseconds">
          {formatMiliseconds()}
        </h1>
      </div>
      <div id="buttons">
          <button className="control-button" id="start" onClick={startStopwatch}>
            Start
          </button>
          <button className="control-button" id="stop" onClick={stopStopwatch}>
            Stop
          </button>
          <button className="control-button" id="reset" onClick={resetStopwatch}>
            Reset
          </button>
        </div>
    </div>
  );
}

export default Stopwatch;