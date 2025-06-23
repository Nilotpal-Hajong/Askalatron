function App() {
  const products = [
    { name: "Askalatron", price: 999 },
    { name: "IronCore", price: 1499 },
    { name: "MiniBoard", price: 749 }
  ];

  return (
    <div>
      <h1>🛍️ Demo Shop</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
