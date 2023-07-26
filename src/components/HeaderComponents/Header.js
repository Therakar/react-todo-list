import "../../Style/HeaderStyle/Header.css";
import FormAddTodo from "./FormAddTodo";

export default function Header() {
  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <FormAddTodo />
    </div>
  );
}
