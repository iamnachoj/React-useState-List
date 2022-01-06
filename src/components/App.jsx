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
  function deleteItem(id) {
    setItems(
      items.filter((item, index) => {
        return index !== id;
      })
    );
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
          {items.map((item, index) => (
            <TodoItem key={index} id={index} item={item} delete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
