import { useState } from "react";
import Item from "./Item";

export default function PackageList({
  items,
  onDeletedItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("inputs");
  let sortedItmes;
  if (sortBy === "inputs") sortedItmes = items;
  if (sortBy === "descriptions")
    sortedItmes = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItmes = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItmes.map((item) => (
          <Item
            key={item.id}
            onDeletedItems={onDeletedItems}
            item={item}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="inputs">Sorted By Input items</option>
          <option value="descriptions">Sorted By Descriptions</option>
          <option value="packed">Sorted By packed items</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
