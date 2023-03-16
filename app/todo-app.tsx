"use client";
import React, { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState(``);
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: true },
    { todoText: "todo 4", completed: false },
  ]);

  const onClickHandler = (chack: any) => {
    console.log(chack);

    const newTodos = todos.map((todo) => {
      if (todo.todoText == chack.todoText) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (delTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == delTodo.todoText) return false;
      return true;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <input
        placeholder="Add Items"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        style={{ height: "20px" }}
      />
      <button
        onClick={addTodo}
        style={{
          marginLeft: "5px",
          width: "80px",
          height: "28px",
          borderRadius: "10px",
          backgroundColor: "#36454f",
          color: "white",
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "red",
                fontSize: "25px",
                fontStyle: "italic",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                onClick={() => deleteTodo(elm)}
                style={{
                  borderRadius: "5px ",
                  backgroundColor: "#282c35",
                  padding: "4px 18px",
                  display: "inline-block",
                  color: "white",
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
