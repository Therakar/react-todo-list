import "../Style/App.css";
import "../Style/variables.css";
import Header from "./HeaderComponents/Header";
import TodoList from "./MainComponents/TodoList";
import Footer from "./FooterComponents/Footer";
import { useState } from "react";

const todoContainer = [];

export default function App() {
  const [items, setItems] = useState(todoContainer);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div className="app">
      <div className="container sheet-shadow">
        <Header onAddItems={handleAddItems} />
        <TodoList
          items={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          onClearList={handleClearList}
        />
        <Footer />
      </div>
    </div>
  );
}
