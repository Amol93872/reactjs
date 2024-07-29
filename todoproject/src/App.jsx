import React, { useState } from "react";
import "./App.css";

function App() {
  // Declare a state variable 'todos' to store a list of todo items, initialized as an empty list
  const [todos, setTodos] = useState([]); // stage 2
  // Declare a state variable 'input' to store the current input for a new todo item, initialized as an empty string
  const [input, setInput] = useState(""); //stage 1

  const handleInputChange = (e) => {
    // This function is called whenever the user types in the input field
    // It sets the value of the 'input' state variable to the current value of the input field
    setInput(e.target.value);
  };

  const addTodo = () => {
    // This function is called whenever the user clicks the "Add" button
    // It adds a new todo item to the 'todos' list if the input is not empty
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    // This function is called whenever the user clicks the "Delete" button for a todo item
    // It removes the todo item at the given index from the 'todos' list
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {/* This iterates over the 'todos' list and displays each todo item in an 'li' element */}
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
