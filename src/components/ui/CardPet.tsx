import { Badge } from "@/components/ui/badge";
import ImgPet from "@/assets/YellowLabrador.jpg";

const CardPet = () => {
  return (
    <div className="card bg-white w-64 h-80 shadow-md shadow-gray-4 00 flex flex-col">
      <figure className="h-[70%]">
        <img
          src={ImgPet}
          alt="Pets"
          className="w-full h-full object-cover object-center" // Criar um sistema para Redimensionar a imagem antes do Upload
        />
      </figure>

      <div className="card-body h-[30%] items-center text-center p-3">
        <h2 className="card-title text-sm">Card Title</h2>
        <p className="text-xs">Labrador - 4 months - Female</p>
        <div className="w-full gap-1 flex justify-center items-center">
          <Badge variant="outline" className="border-primary-hover font-bold">
            Playful
          </Badge>
          <Badge variant="outline" className="border-primary-hover font-bold">
            Friendly
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CardPet;
