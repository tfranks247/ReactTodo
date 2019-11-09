import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import uuid from "uuid/v1"

function App() {
  const [todos, setTodos] = useState([
    { name: "one", id: uuid()}, 
    { name: "two", id: uuid()}, 
    { name: "three", id: uuid() }
]);
  const [newTodo, setNewTodo] = useState ("");

  const handleSubmit = event => {
    event.preventDefault(); // the page wont refresh because of this
    setTodos([...todos, {name: newTodo, id: uuid()}]);
    console.log(todos);// destructuring and then adding a new todo and creating a new array
    setNewTodo("");
  };

  const handleChange = event => {
    setNewTodo(event.target.value);
  };
  const deleteTodo = id => {
    setTodos(todos.filter(i => i.id !== id))
  };

  return (
    <div className="App">
      <ul>
        {todos.map(i => (
        <li key={i.id} onClick={() =>deleteTodo(i.id)}>
          <b>{i.name}</b>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
          <input type = "text" onChange = {handleChange} value= {newTodo} />
          <input type = "submit" />
      </form>
    </div>
    
  );
        }

export default App;
