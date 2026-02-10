import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCardsSection from "./components/ContactCardsSection";

const index = () => {
  return (
    <div className="h-screen w-screen bg-amber-50">
      <Header />
      <div className="h-[50%] bg-blue-50 flex flex-col justify-center items-center gap-3">
        <h2 className="font-bold text-4xl text-primary-hover text-shadow-sm text-shadow-gray-400">
          Entre em contato com a gente
        </h2>
        <div className="w-lg flex justify-center items-center">
          <p className="text-xl text-accent text-shadow-sm text-shadow-gray-300 text-center">
            Quer adotar, ser voluntário ou fazer uma parceria? Estamos aqui para
            ouvir você. Envie uma mensagem e nossa equipe responderá o mais
            breve possível.
          </p>
        </div>
      </div>
      <ContactCardsSection />
      <Footer />
    </div>
  );
};

export default index;
