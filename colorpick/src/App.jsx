import React, { useState } from "react";
import { SketchPicker } from "react-color";

function App() {
  const [color, setColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Color Picker App</h1>
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid #000",
        }}
      >
        Selected Color
      </div>
    </div>
  );
}

export default App;
