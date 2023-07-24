import products from "../products.json";
import Navbar from "./navbar";
import Portrait from "./portrait";


export const meta = () => {
  return [
    { title: "Yehudah Prints" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (

    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
       <Navbar />

       <div className="py-10">

      <h1 className="text-center font-bold text-3xl">Welcome to my studio!</h1>
      <Portrait />
     
        {products.map((product) => {
          return (
            
            <div className="flex flex-col justify-center text-center m-10 space-y-5 shadow-md w-1/4 rounded-xl min-w-max" key={product.id}>
              <h3>{product.title}</h3>
              
              <div className="flex flex-row">
              <img
                className="w-44 m-auto"
                src={product.image}
                alt={`Preview of ${product.title}`}
              />
              <div className="flex flex-col my-auto px-8">
              <p>{product.description}</p>
              <p>${product.price}</p>
             
                <a href="https://buy.stripe.com/eVa6psbYG7Lj0EMfYY">
                <button className="button-main">Buy Now</button></a>
                </div>
                </div>
                
            </div>
            
          );
        })}
      </div>
      </div>
    
  );
}
