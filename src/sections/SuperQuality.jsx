import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <div>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full macontainer"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red">Super</span>
            <span className="text-coral-red">Quality</span> Shoes
          </h2>
          <p className="mt-4">
            Discover stylish Nike arrivals, quality comfor, and innovation for
            your active life.
          </p>

          <Button label="View details" />
        </div>
      </section>
    </div>
  );
};

export default SuperQuality;
