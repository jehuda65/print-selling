import products from "../products.json";

export default function Portrait() {
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            className="flex flex-col justify-center space-y-5 shadow-lg md:shadow-gray-400 px-4 md:w-1/2 md:rounded-md md:mx-auto"
            key={product.id}
          >
            <div className="flex flex-col text-center md:flex-row md:items-center md:ml-6 space-x-6">
              <div className="bg-finkel bg-cover bg-center bg-no-repeat h-52 md:w-96 md:border-1 md:border-red-600"></div>
              <div className="flex flex-col my-auto md:text-left py-4 md:py-10">
                <h3 className="font-bold text-emerald-700 md:text-2xl">
                  {product.title}
                </h3>
                <p className="text-sm md:text-base">{product.description}</p>
                <p className="py-2 font-semibold">{product.price}</p>
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
