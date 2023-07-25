import products from "../products.json";

export default function Portrait() {
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            className="flex flex-col justify-center text-left m-10 space-y-5 shadow-lg w-5/6 md:w-1/2 rounded-xl"
            key={product.id}
          >
            <div className="flex flex-row">
              <img
                className="w-44 m-auto md:w-1/4"
                src={product.image}
                alt={`Preview of ${product.title}`}
              />
              <div className="flex flex-col my-auto px-8">
                <h3 className="font-bold text-emerald-700">{product.title}</h3>
                <p className="text-sm md:text-base">{product.description}</p>
                <p className="py-4 font-semibold">{product.price}</p>

                <a href="https://buy.stripe.com/eVa6psbYG7Lj0EMfYY">
                  <button className="button-main">Buy Now</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
