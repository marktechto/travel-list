export default function Stat({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <p>
        You have {totalItems}items on your list and you already packed{" "}
        {packedItems} (
        {totalItems ? ((packedItems / totalItems) * 100).toFixed(2) : 0}%)
      </p>
    </footer>
  );
}
