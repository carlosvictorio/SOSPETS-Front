import DogCatImg from "@/assets/dog-cat.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-blue-50 h-[80%] flex justify-center items-center gap-8 py-10">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-4xl text-primary-hover text-shadow-sm text-shadow-gray-400">
          Give them the loving <br /> home they deserve
        </h2>
        <p className="text-xl text-accent text-shadow-sm text-shadow-gray-300">
          We rescue, rehabilitate, and rehome abandoned pets.
          <br /> Join our mission to bring happiness to every furry friend.
        </p>
        <div className="flex gap-2">
          <Button className="cursor-pointer">Adopt a Pet</Button>
          <Button variant="outline" className="cursor-pointer">
            Learn More
          </Button>
        </div>
      </div>

      <div>
        <img src={DogCatImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
