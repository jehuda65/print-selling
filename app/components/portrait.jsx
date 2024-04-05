import products from "../products.json";

export default function Portrait() {
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            className="flex flex-col justify-center md:h-[40vh] space-y-5 shadow-lg md:w-3/5 md:rounded-xl mx-10 rounded md:py-0 border-2 bg-gray-100 bg-opacity-20 px-5 md:pl-0 md:mx-auto "
            key={product.id}
          >
            <div className="flex flex-col text-center md:flex-row md:items-center md:space-x-6">
              <div className="bg-finkel bg-cover mix-blend-screen bg-center h-[40vh] rounded-l-xl md:w-1/2 shadow-inner"></div>
              <div className="flex flex-col my-auto md:text-left py-4 md:py-6 space-y-4 ml-0 md:px-10 text-gray-200">
                <h3 className="font-bold text-xl ">{product.title}</h3>
                <p className="text-sm md:text-base ">{product.description}</p>
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
