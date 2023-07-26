import "../../Style/MainStyle/Todo.css";
import "../../Style/Button.css";

export default function Todo() {
  return (
    <li className="todo-item">
      <div className="todo-text">
        <p>Todo Item</p>
      </div>
      <div className="todo-buttons">
        <button className="green">Done</button>
        <button className="red">Cancel</button>
      </div>
    </li>
  );
}
