import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div className="">
      <p className="text-3xl my-4  font-bold font-montserrat">
        Our <span className="text-coral-red"> Popular </span> Products
      </p>
      <p className=" text-sm text-slate-gray mb-10">
        Experience top-noch quality and style with our sough-after selections.
        <br />
        Discover a world of comfort, design, and value.
      </p>
      <div className="flex justify-around gap-4">
        {products.map((product) => (
          <div key={product} className="">
            <div className="">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
