import { useState } from "react";

function Assignment6Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="assignment-container">
      <h2>Assignment 6: React Counter App</h2>

      <p className="assignment-description">
        Counter application using the React useState Hook.
      </p>

      <div className="counter-container">
        <div className="counter-value">
          {count}
        </div>

        <div className="counter-buttons">
          <button onClick={decrement}>
            Decrement
          </button>

          <button onClick={reset} className="clear-button">
            Reset
          </button>

          <button onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assignment6Counter;