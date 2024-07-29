import React, { useState } from "react";

function Textarea() {
  const [textarea, setTextarea] = useState("");

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <div>
      <textarea value={textarea} onChange={handleTextareaChange} />
      <p>Textarea: {textarea}</p>
    </div>
  );
}

export default Textarea;
