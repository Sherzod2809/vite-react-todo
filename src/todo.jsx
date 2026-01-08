import { useState } from "react";
import "./todo.css";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        text: text,
        isDone: true,
      },
    ]);
    setText("");
  };

  const onDeleteClick = (value) => {
    const newTodos = todos.filter((todo, index) => index !== value);
    setTodos(newTodos);
  };

  const onToggleClick = (value) => {
    const todoIndex = todos.indexOf(value);

    const newArray = todos.map((todo) =>
      todo.text === value.text
        ? { text: value.text, isDone: !value.isDone }
        : todo
    );
    setTodos(newArray);
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="input-container">
            <input
              type="text"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
            <button onClick={handleAddTodo} disabled={Boolean(!text.trim())}>
              Add
            </button>
          </div>
          <ul className="list-container">
            {todos.map((todo, index) => {
              return (
                <li key={index} className="list-item">
                  <input
                    type="checkbox"
                    defaultChecked={todo.isDone}
                    onClick={() => onToggleClick(todo)}
                  />
                  <p className={todo.isDone ? "linethrough" : ""}>
                    {todo.text}
                  </p>
                  <button onClick={() => onDeleteClick(index)}>
                    {" "}
                    <i className="fa fa-trash icon"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todos;
