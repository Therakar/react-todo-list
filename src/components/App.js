import "../Style/App.css";
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

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div className="app">
      <div className="container">
        <Header onAddItems={handleAddItems} />
        <TodoList items={items} onToggleItem={handleToggleItem} />
        <Footer />
      </div>
    </div>
  );
}
