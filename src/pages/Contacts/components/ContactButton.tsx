const ContactButton = ({ text }: { text: string }) => {
  return (
    <button className="h-8 bg-white rounded-sm font-bold flex justify-center items-center w-full hover:bg-primary-content hover:border hover:border-primary cursor-pointer">
      <p className="ml-1.5">{text}</p>
    </button>
  );
};

export default ContactButton;
