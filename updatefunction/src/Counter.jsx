import React, { useState } from "react";

function Counter() {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Using the updater function to update state
  };

  // Function to decrement the count
  const decrement = () => {
    setCount((prevCount) => prevCount - 1); // Using the updater function to update state
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
