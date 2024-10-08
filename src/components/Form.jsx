import { useState } from "react";

export default function Form({ onAddItems }) {
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
      <h3>ለ ጉዞዎ ምን ይፈልጋሉ?</h3>
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
        placeholder="ዐይነቶች..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
