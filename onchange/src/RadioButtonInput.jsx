import React, { useState } from "react";

function RadioButtonInput() {
  const [radio, setRadio] = useState("");

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        value="Option1"
        checked={radio === "Option1"}
        onChange={handleRadioChange}
      />{" "}
      Option 1
      <input
        type="radio"
        value="Option2"
        checked={radio === "Option2"}
        onChange={handleRadioChange}
      />{" "}
      Option 2
      <input
        type="radio"
        value="Option3"
        checked={radio === "Option3"}
        onChange={handleRadioChange}
      />{" "}
      Option 3<p>Selected Radio: {radio}</p>
    </div>
  );
}

export default RadioButtonInput;
