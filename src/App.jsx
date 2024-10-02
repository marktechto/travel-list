import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Shoes", quantity: 2, packed: false }, // Fixed duplicate id
];

export default function App() {
  const [items, setItems] = useState([]); // Initialize with initialItems

  function handleOnAddItems(item) {
    setItems((items) => [...items, item]); // Correctly update state
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleOnAddItems} />
      <PackageList items={items} />
      <Stat items={items} /> {/* Pass items to Stat */}
    </div>
  );
}

function Logo() {
  return <h1>🌴Quaregnaw Food Order</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      id: new Date().getTime(), // Use timestamp for uniqueness
      packed: false,
    };
    onAddItems(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😁trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackageList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}

function Stat({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      <p>
        You have {totalItems} items on your list and you already packed{" "}
        {packedItems} (
        {totalItems ? ((packedItems / totalItems) * 100).toFixed(2) : 0}%)
      </p>
    </footer>
  );
}
