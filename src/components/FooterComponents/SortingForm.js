import "../../Style/FooterStyle/SortingForm.css";

export default function SortingForm() {
  return (
    <div className="sorting-container">
      <select className="shadow">
        <option value="input">Sort by input order</option>

        <option value="packed">Sort by completion status</option>
      </select>
      <button className="clear-btn">Clear List</button>
    </div>
  );
}
