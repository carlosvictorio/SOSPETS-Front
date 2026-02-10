import { PixInput } from "@/components/ui/PixInput";
import SecPayment from "@/assets/secure-payment.png";
import QRcode from "@/assets/QR-Code.png";

const DonationSection = () => {
  const pixLink = "00020126580014BR.GOV.BCB.PIX...";

  return (
    <section className="donation-section bg-blue-100 flex justify-evenly items-center py-10">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-4xl text-primary-hover">
          Your support saves lives
        </h2>
        <p className="text-gray-700 font-bold">
          We are a 100% non-profit organization. Every dollar you donate goes
          <br />
          directly towards food, shelter, and medical care for animals in need.
        </p>
        <div className="flex items-center">
          <img src={SecPayment} alt="" className="w-12" />
          <h1 className="text-[#43A047] font-bold">Secure Payment!</h1>
        </div>
      </div>

      <div className="pix flex flex-col justify-center items-center gap-3">
        <img src={QRcode} alt="" className="w-60" />
        <div>
          <PixInput value={pixLink} />
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
