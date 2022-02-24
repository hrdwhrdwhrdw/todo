import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Todo/context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="item-list__item">
      <div className={`${classes.join("")} item-list__todo`}>
        <div className="round">
          <input
            id={`checkbox${index}`}
            type="checkbox"
            onChange={() => onChange(todo.id)}
            checked={todo.completed ? todo.completed : false}
          />
          <label htmlFor={`checkbox${index}`}></label>
        </div>
        <p className="item-list__title">{todo.title}</p>
      </div>
      <button onClick={removeTodo.bind(null, todo.id)}>Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
