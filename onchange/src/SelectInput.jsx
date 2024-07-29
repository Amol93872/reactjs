import React, { useState } from "react";

function SelectInput() {
  const [option, setOption] = useState("");

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <select value={option} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
      </select>
      <p>Selected Option: {option}</p>
    </div>
  );
}

export default SelectInput;
