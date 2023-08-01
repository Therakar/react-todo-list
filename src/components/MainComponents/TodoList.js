import "../../Style/MainStyle/TodoList.css";
import Todo from "./Todo";
import SortingForm from "./SortingForm";

export default function TodoList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="bottom-list">
        <SortingForm onClearList={onClearList} />
      </div>
    </div>
  );
}
