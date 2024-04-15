import { useState } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

const TodoList = ({ todos, handleCheckboxChange, addNewTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      addNewTodo({
        id: todos.length + 1,
        text: newTodoText,
        completed: false,
      });
      setNewTodoText("");
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="form">
        <input
          className="input"
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button className="button" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  addNewTodo: PropTypes.func.isRequired,
};

export default TodoList;
