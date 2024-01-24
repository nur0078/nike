import { star } from "../assets/icons";
const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.imgURL}
        alt="shoe collection"
        width={200}
        height={100}
        className=""
      />

      <span className="flex my-2 mx-auto">
        <img src={star} width={16} height={16} className="mr-1" />
        <p className="font-montserrat text-sm text-slate-gray ml-1 ">(4.5)</p>
      </span>

      <span className="font-bold font-montserrat ">{product.name}</span>
      <br />
      <span className="text-coral-red  font-montserrat">{product.price}</span>
    </div>
  );
};

export default ProductCard;
