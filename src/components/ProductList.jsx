import { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  [state, dispatch] = useContext(ProductContext);
  return (
    <div className="px-20 pb-20 ">
      <h2 className="text-4xl font-medium">Product List</h2>
      <ul className="mt-5 flex flex-col gap-5">
        {state.products.map((product) => (
          <li key={product.id}>
            <h3 className="text-2xl font-medium">
            {product.title} 
            </h3>
            <div>
              <button className="px-2 py-1 bg-black text-white hover:bg-emerald-600">Buy</button>
              <button className="px-2 py-1 bg-black text-white hover:bg-emerald-600">Remove</button>
              <button className="px-2 py-1 bg-black text-white hover:bg-emerald-600">Restock</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
