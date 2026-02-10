import { Button } from "@/components/ui/button";
import CardPet from "@/components/ui/CardPet";

const AdoptionSection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-amber-50">
      <div className="flex flex-col text-center py-10 mt-5">
        <h2 className="font-bold text-2xl text-primary-hover">
          Meet our new arrivals
        </h2>
        <p className="text-accent font-bold">
          Theses lovely friends are looking for their forever homes.
        </p>
      </div>

      <section className="flex justify-center items-center gap-5">
        <CardPet />
        <CardPet />
        <CardPet />
        <CardPet />
      </section>

      <Button variant="outline" className="my-10">
        View All Pets
      </Button>
    </section>
  );
};

export default AdoptionSection;
