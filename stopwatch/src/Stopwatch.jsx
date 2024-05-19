import { useState, useEffect } from "react";

function Stopwatch() {
  const [miliseconds, setMiliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const milisecondsInterval = setInterval(handleMiliseconds, 1);
    const secondsInterval = setInterval(handleSeconds, 1000);
    const minutesInterval = setInterval(handleMinutes, 60 * 1000);

    return () => {
      clearInterval(milisecondsInterval);
      clearInterval(secondsInterval);
      clearInterval(minutesInterval);
    }
  }, [isRunning]);

  const handleMiliseconds = () => {
    if (isRunning) {
      setMiliseconds(prevMiliseconds => (prevMiliseconds + 1) % 100);
    }
  }

  const handleSeconds = () => {
    if (isRunning) {
      setSeconds(prevSeconds => (prevSeconds + 1) % 60);
    }
  }

  const handleMinutes = () => {
    if (isRunning) {
      setMinutes(prevMinutes => prevMinutes + 1);
    }
  }

  const startStopwatch = () => {
    setIsRunning(true);
  }

  const stopStopwatch = () => {
    setIsRunning(false);
  }

  const resetStopwatch = () => {
    setMiliseconds(0);
    setSeconds(0);
    setMinutes(0);
  }

  const stopwatch = () => {
    return `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(miliseconds)}`;
  }

  const padNumber = (number) => {
    return number > 9 ? `${number}` : `0${number}`;
  }

  return (
    <div id="stopwatch-container">
      <div id="stopwatch">
        <h1 className="stopwatch-timer" id="minutes">
          {padNumber(minutes)}
        </h1>
        <h1>:</h1>
        <h1 className="stopwatch-timer" id="seconds">
          {padNumber(seconds)}
        </h1>
        <h1>:</h1>
        <h1 className="stopwatch-timer" id="miliseconds">
          {padNumber(miliseconds)}
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