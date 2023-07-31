import { useState } from "react";
import "../../Style/HeaderStyle/FormAddTodo.css";
import Button from "../GenericComponents/Button";

export default function FormAddTodo({ onAddItems }) {
  const [description, setDescription] = useState("");

  // this function will handle the submit of the new to-do
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //clause guard (if there's not description return immediately)

    //creation of the new item
    const newItem = { description, completed: false, id: Date.now() };
    console.log(newItem);

    //renders the new to-do
    onAddItems(newItem);

    //reset
    setDescription("");
  }

  return (
    //when submit launch the fucntion handleSubmit
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Let's add some to-dos 💪🏻</h3>
      <div>
        <input
          className="shadow"
          type="text"
          placeholder="New to-do..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <Button />
      </div>
    </form>
  );
}
