import VolunteersImg from "@/assets/volunteers.jpg";
import { Button } from "@/components/ui/button";

const VolunteerSection = () => {
  return (
    <section className="bg-amber-50 w-screen py-20 flex justify-center items-center">
      <div className="bg-blue-200 w-[70%] py-8 flex justify-center items-center gap-8 rounded-lg shadow-xl">
        <div className="left-side flex flex-col justify-center items-start gap-5">
          <h2 className="card-title font-bold text-2xl text-primary-hover">
            Become a Volunteer
          </h2>
          <p className="text-gray-700 font-bold">
            Do you love animals? Join our team of dedicated <br /> volunteers
            and make a real difference. Whether you <br /> can walk dogs, foster
            kittens, or help with events, we <br /> need you.
          </p>

          <Button>Join Our Team</Button>
        </div>

        <div>
          <img src={VolunteersImg} alt="" className="w-96 rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
