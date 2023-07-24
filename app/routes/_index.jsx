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
      <h1 className="text-center font-bold">Welcome to my store!</h1>

      <div>
        {products.map((product) => {
          return (
            <div className="flex flex-col justify-center text-center space-y-5" key={product.id}>
              <h3>{product.title}</h3>
              <img
                className="w-44 m-auto"
                src={product.image}
                alt={`Preview of ${product.title}`}
              />
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>
                <a href="https://buy.stripe.com/eVa6psbYG7Lj0EMfYY">
                <button className="button-main">Add to Cart</button></a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
