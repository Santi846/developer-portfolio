/** Lista de tecnologías como chips. Se usa en cards, timeline y detalle. */
function TagList({ items = [], className = '' }) {
  if (items.length === 0) return null;

  return (
    <ul className={`tag-list ${className}`}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
