import LogoTelefone from "@/assets/contact-icons/icons8-telefone-48.png";
import LogoWhats from "@/assets/contact-icons/whatsapp.png";
import LogoGmail from "@/assets/contact-icons/icons8-gmail-novo-48.png";
import LogoInsta from "@/assets/contact-icons/icons8-instagram-48.png";
import LogoAdress from "@/assets/contact-icons/icons8-local-48.png";
import ContactCard from "./ContactCard";
import ButtonContact from "./ContactButton";

const ContactCardsSection = () => {
  return (
    <section className="flex justify-center items-center py-10 bg-amber-50">
      <div className="w-[80%] gap-10 flex justify-center items-center flex-wrap">
        <ContactCard
          logo={LogoTelefone}
          title="CONTATO"
          info="+55 11 99999-9999"
          desc="Segunda a Sexta, 9h às 18h"
        >
          <div className="btn-center w-[90%]">
            <button className="h-8 bg-green-400 hover:bg-green-500 cursor-pointer rounded-sm flex justify-center items-center w-full">
              <img src={LogoWhats} alt="" className="w-6" />
              <p className="ml-1.5 text-white font-bold">Chamar no Whatsapp</p>
            </button>
          </div>
        </ContactCard>

        <ContactCard
          logo={LogoGmail}
          title="E-MAIL"
          info="sosong@gmail.com"
          desc="Para dúvidas gerais e parcerias"
        >
          <ButtonContact text="Enviar E-mail" />
        </ContactCard>

        <ContactCard
          logo={LogoAdress}
          title="ENDEREÇO"
          info="Rua dos Animais, 123"
          desc="Bairro Feliz, São Paulo - SP"
        >
          <ButtonContact text="Ver no Mapa" />
        </ContactCard>

        <ContactCard
          logo={LogoInsta}
          title="INSTAGRAM"
          info="@sospets"
          desc="Acompanhe nosso trabalho"
        >
          <ButtonContact text="Ver Perfil" />
        </ContactCard>
      </div>
    </section>
  );
};

export default ContactCardsSection;
