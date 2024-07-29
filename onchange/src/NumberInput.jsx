import React, { useState } from "react";

function NumberInput() {
  const [number, setNumber] = useState("");

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleNumberChange} />
      <p>Number: {number}</p>
    </div>
  );
}

export default NumberInput;
