// useRef() - similar to useState(), but it does not cause any re-renders when the value changes, it allows components to "remember" information
// useRef can be used to refer to HTML elements, to prevent them from re-rendering?

import { useState, useRef, useEffect } from "react";

function UseRef() {
  const [number, setNumber] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log("Component rendered!");
  })

  const handleClickState = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const handleClickRed = () => {
    ref.current.focus();
    ref.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <h1>State: {number}</h1>
      <button onClick={handleClickState}>useState(): Click me!</button>
      <button onClick={handleClickRed}>useRef(): Click me!</button>
      <input ref={ref}></input>
    </div>
  );
}

export default UseRef;