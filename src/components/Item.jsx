export default function Item({ item, onDeletedItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.id}
        onChange={() => {
          onToggleItems(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeletedItems(item.id)}>❌</button>
      </span>
    </li>
  );
}
