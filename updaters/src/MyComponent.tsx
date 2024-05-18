// updater functions; react batches multipe state changes

import {useState} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const decrementCounter = (): void => {
    // this is an updater function
    // prevCount is the pending/previous state of count!
    // React will group these updater functions in a queue and run them together!
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }

  const resetCounter = (): void => {
    // no updater function is necessary here, as this function doesn't depend on the previous state
    setCount(0);
  }

  const incrementCounter = (): void => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default MyComponent;