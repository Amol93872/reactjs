import React, { useState } from "react";

function Counter() {
  // Declare a state variable named 'count', initialized to 0
  const [count, setCount] = useState(0); // useState hook to manage 'count' state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me 🤫 </button>
    </div>
  );
}

export default Counter;
