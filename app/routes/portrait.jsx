import products from "../products.json";

export default function Portrait() {

    {products.map((product) => {
    return (
<div className="flex flex-col justify-center text-center space-y-5 shadow-md w-1/4" key={product.id}>
    <h3>{product.title}</h3>
              
        <div className="flex flex-row">
            <img
             className="w-44 m-auto"
             src={product.image}
             alt={`Preview of ${product.title}`}
             />
            <div className="flex flex-col">
                <p>{product.description}</p>
                <p>${product.price}</p>
             
                <a href="https://buy.stripe.com/eVa6psbYG7Lj0EMfYY">
                <button className="button-main">Buy Now</button></a>
            </div>
        </div>
</div>
    );
})}}