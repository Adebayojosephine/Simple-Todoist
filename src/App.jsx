import { useState } from "react";
import Logo from "./components/Logo";
import TodoList from "./components/TodoList";
import CompletedTable from "./components/CompletedTable";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Go grocery shopping", completed: false },
    { id: 2, text: "Take the garbage out", completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addNewTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <Logo />
      <TodoList
        todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        addNewTodo={addNewTodo}
      />
      <CompletedTable completedTodos={completedTodos} />
    </div>
  );
};

export default App;
