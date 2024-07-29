import React, { useState } from "react";

function Another() {
  // Declare a state variable named 'text', initialized to an empty string
  const [text, setText] = useState(""); // useState hook to manage 'text' state

  return (
    <div>
      <input
        type="text"
        value={text} // Bind the input value to the 'text' state
        onChange={(e) => setText(e.target.value)} // Update 'text' state when input value changes
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Another;
