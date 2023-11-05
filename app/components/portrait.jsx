import products from "../products.json";

export default function Portrait() {
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            className="flex flex-col justify-center space-y-5 shadow-lg md:w-3/5 md:rounded-xl mx-10 rounded md:py-5 bg-white px-5 md:mx-auto "
            key={product.id}
          >
            <div className="flex flex-col text-center md:flex-row md:items-center md:space-x-6">
              <div className="bg-finkel bg-contain bg-center bg-no-repeat h-52 md:w-96"></div>
              <div className="flex flex-col my-auto md:text-left py-4 ml-0">
                <h3 className="font-bold text-emerald-700">{product.title}</h3>
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
