import React, { useState } from "react";

function MyComponent() {
  const [user, setUser] = useState({ name: "Alice", age: 18 });

  const handleAgeChange = (newAge) => {
    setUser({ ...user, age: newAge }); // Create a new object with updated age
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <input
        type="number"
        value={user.age}
        onChange={(e) => handleAgeChange(parseInt(e.target.value))}
      />
      <button onClick={() => handleAgeChange(user.age + 1)}>
        Increase Age
      </button>
    </div>
  );
}
export default MyComponent;
