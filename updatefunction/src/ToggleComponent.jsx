import React, { useState } from "react";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Details
      </button>
      {isVisible && <p>Here are some details...</p>}
    </div>
  );
}

export default ToggleComponent;
