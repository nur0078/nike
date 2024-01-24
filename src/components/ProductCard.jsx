import { star } from "../assets/icons";
const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.imgURL}
        alt="shoe collection"
        width={200}
        height={100}
        className="mb-6"
      />

      <span className="flex mx-auto my-2">
        <img src={star} width={16} height={16} className="mr-1" />
        <p className="font-montserrat text-sm text-slate-gray ml-1">(4.5)</p>
      </span>

      <div className="flex flex-col">
        <span className=" font-semibold font-montserrata mb-1">
          {product.name}
        </span>
        <span className="text-coral-red font-medium font-montserrat">
          {product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
