import React, { useState } from "react";
import TodoItem from "./todoItem";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    return setInput(event.target.value);
  }

  function handleClick(event) {
    setItems([...items, input]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={input} onChange={handleInput} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <TodoItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
