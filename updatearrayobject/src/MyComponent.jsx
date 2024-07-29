import React, { useState } from "react";

const MyComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]);

  const updateItem = (id, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => updateItem(item.id, `Updated ${item.name}`)}>
            update
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
