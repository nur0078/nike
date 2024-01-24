import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div className="flex gap-3 justify-evenly ">
      {products.map((product) => (
        <div key={product} className="">
          <div className="">
            <ProductCard product={product} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
