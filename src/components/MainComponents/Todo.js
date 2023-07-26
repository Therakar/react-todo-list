import "../../Style/MainStyle/Todo.css";

export default function Todo() {
  return (
    <li className="todo-item">
      <div className="todo-text">
        <p>Todo Item</p>
      </div>
      <div className="todo-buttons">
        <button>✅</button>
        <button>❌</button>
      </div>
    </li>
  );
}
