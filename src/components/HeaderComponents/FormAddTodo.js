import "../../Style/HeaderStyle/FormAddTodo.css";
import Button from "../GenericComponents/Button";

export default function FormAddTodo() {
  return (
    <form className="add-form">
      <h3>Let's add some to-dos 💪🏻</h3>
      <div>
        <input type="text" placeholder="New activity..."></input>
        <Button />
      </div>
    </form>
  );
}
