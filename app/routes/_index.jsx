import products from "../products.json";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to my store!</h1>

      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img
                className="h-44"
                src={product.image}
                alt={`Preview of ${product.title}`}
              />
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
