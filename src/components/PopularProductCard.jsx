import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        width={200}
        height={100}
        className="w-[280px] h-[280px]"
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className="" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ml-1">
          (4.5)
        </p>
      </div>
      <h3 className=" mt-2 leading-normal text-2xl font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-coral-red font-semibold font-montserrat leading-normal text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
