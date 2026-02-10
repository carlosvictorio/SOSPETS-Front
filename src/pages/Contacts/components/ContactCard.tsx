import type { ReactNode } from "react";

type ContactCardProps = {
  logo: string;
  title: string;
  info: string;
  desc: string;
  children: ReactNode;
};

const ContactCard = ({
  logo,
  title,
  info,
  desc,
  children,
}: ContactCardProps) => {
  return (
    <div className="card-contact h-[250px] w-[362px] bg-blue-200 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-5">
      <div className="info-left w-full flex flex-col justify-center items-start ml-[10%]">
        <img src={logo} alt="" className="w-10" />
        <h2 className="text-gray-600">{title}</h2>
        <p className="font-bold">{info}</p>
        <p>{desc}</p>
      </div>
      <div className="children-center w-[90%]">{children}</div>
    </div>
  );
};

export default ContactCard;
