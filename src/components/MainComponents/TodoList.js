import "../../Style/MainStyle/TodoList.css";
import Todo from "./Todo";

export default function TodoList({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Todo item={item} key={item.id} />
      ))}
    </ul>
  );
}
