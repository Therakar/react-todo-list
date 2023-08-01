import "../../Style/MainStyle/SortingForm.css";

export default function SortingForm({ onDeleteItem, onClearList }) {
  return (
    <div className="sorting-container">
      <select className="shadow">
        <option value="input">Sort by input order</option>
        <option value="description">Sort by name</option>
        <option value="completed">Sort by completion status</option>
      </select>
      <button className="clear-btn" onClick={onClearList}>
        Clear List
      </button>
    </div>
  );
}
