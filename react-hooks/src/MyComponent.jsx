import {useState, useEffect} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // useEffect(callback, [dependencies]) = React hook that tells React to do some code (callback) when:
  // - this component re-renders (i.e., change state)
  // - this component mounts (i.e., at the start )
  // - the state of a value changes

  // 1. useEffect(() => {}) // runs after every re-render
  // 2. useEffect(() => {}, []) // runs only when this component is mounted
  // 3. useEffect(() => {}, [value]) // runs only when this component is mounted and the value changes

  useEffect(() => {
    document.title = `Count: ${count}, Color: ${color}`;
  }, [count]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  const addCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const subtractCount = () => {
    setCount(prevCount => prevCount - 1);
  }

  const changeColor = () => {
    setColor(prevColor => prevColor === 'green' ? 'red' : 'green');
  }

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Widow Height: {height}px</p>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default MyComponent;