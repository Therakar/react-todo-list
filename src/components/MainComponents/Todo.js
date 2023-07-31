import "../../Style/MainStyle/Todo.css";
import "../../Style/Button.css";

export default function Todo({ item }) {
  return (
    <li className="todo-item">
      <p className="todo-text">{item.description}</p>

      <div className="todo-buttons">
        <button className="green">Done</button>
        <button className="red">Cancel</button>
      </div>
    </li>
  );
}
