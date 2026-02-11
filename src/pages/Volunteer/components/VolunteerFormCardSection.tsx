import InputForm from "./InputForm";
import { withMask } from "use-mask-input";
import { Button } from "@/components/ui/button";
import LittlePets from "@/assets/volunteer-page/little-pets.png";
import SexCheckboxField from "./SexCheckboxField";

const VolunteerFormCardSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 py-10 rounded-md shadow-xl w-md bg-blue-200 relative">
        <img src={LittlePets} alt="" className="absolute -top-24" />
        <h1 className="font-bold text-white text-2xl text-shadow-sm border-b-2 border-accent">
          Cadastro de Voluntário(a)
        </h1>
        <div className="flex flex-col justify-center items-start gap-5">
          <InputForm label="Nome Completo" classname="w-96" />
          <InputForm label="E-mail" classname="w-96" />

          <div className="flex justify-between items-center w-full">
            <InputForm
              label="Telefone"
              type="tel"
              ref={withMask("(99) 99999-9999")}
              classname="w-36"
            />

            <SexCheckboxField />
          </div>
        </div>

        <Button className="w-[90%] font-bold bg-accent hover:bg-(--accent-hover)">
          Enviar
        </Button>
      </div>
      <h2 className="absolute bottom-0 font-bold text-4xl text-primary-hover text-shadow-sm text-shadow-gray-400">
        Faça Parte da Nossa Missão
      </h2>
    </section>
  );
};

export default VolunteerFormCardSection;
