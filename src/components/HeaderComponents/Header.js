import "../../Style/HeaderStyle/Header.css";
import FormAddTodo from "./FormAddTodo";

export default function Header({ onAddItems }) {
  return (
    <div className="header">
      <h1>MY TO-DO LIST</h1>
      <FormAddTodo onAddItems={onAddItems} />
    </div>
  );
}
