import "../../Style/MainStyle/Todo.css";
import "../../Style/Button.css";
import Button from "../GenericComponents/Button";

export default function Todo({ item, onToggleItem }) {
  return (
    <li className="todo-item">
      <p
        style={item.completed ? { textDecoration: "line-through" } : {}}
        className="todo-text"
      >
        {item.description}
      </p>

      <div className="todo-buttons">
        <button
          className={item.completed ? "yellow" : "green"}
          onClick={() => {
            onToggleItem(item.id);
          }}
        >
          {item.completed ? "Undone" : "Done"}
        </button>
        <button className="red">Cancel</button>
      </div>
    </li>
  );
}
