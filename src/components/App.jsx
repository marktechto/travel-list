import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stat from "./Stat";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Shoes", quantity: 2, packed: false },
];
export default function App() {
  const [items, setItems] = useState(initialItems);
  // Initialize with initialItems
  function handleOnAddItems(item) {
    setItems((prevItems) => [...prevItems, item]); // Correctly update state
  }
  function handleOnDeletedItems(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Correctly update state
  }
  function handleOnClearItems() {
    const confirm = window.confirm("Are you want to delete all items?");
    confirm && setItems([]);
  }
  function handleOnToggleItems(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleOnAddItems} />
      <PackageList
        items={items}
        onClearItems={handleOnClearItems}
        onDeletedItems={handleOnDeletedItems}
        onToggleItems={handleOnToggleItems}
      />
      <Stat items={items} /> {/* Pass items to Stat */}
    </div>
  );
}
