import React, { lazy, useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Todo/context";
import Loader from "./Todo/Loader";

const AddTodo = lazy(() => import("./Todo/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <div className="container">
          <div className="container__title">
            <div className="title">
              <h1>Todo</h1>
            </div>
          </div>
          <div className="container__todos">
            <React.Suspense fallback={<p>Loading...</p>}>
              <AddTodo onCreate={addTodo} />
            </React.Suspense>
            {loading ? <Loader /> : ""}
            {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo} />
            ) : loading ? null : (
              <p>You have no todos!</p>
            )}
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
