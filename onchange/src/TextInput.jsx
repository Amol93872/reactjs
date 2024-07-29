import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>Text: {text}</p>
    </div>
  );
}

export default TextInput;
