import "../../Style/MainStyle/Todo.css";
import "../../Style/Button.css";

export default function Todo() {
  return (
    <li className="todo-item">
      <p className="todo-text">
        Todo Item to do to do do do dod odo asaaaa asas asas asasdas assadasd
      </p>

      <div className="todo-buttons">
        <button className="green">Done</button>
        <button className="red">Cancel</button>
      </div>
    </li>
  );
}
