const SexCheckboxField = () => {
  return (
    <div className="flex justify-center items-center gap-1 w-full">
      <p className="text-gray-600 font-bold">Sexo:</p>

      <input
        type="radio"
        name="radio-3"
        id="male"
        className="appearance-none border-2 border-accent h-3 w-3 rounded-full checked:bg-gray-700 cursor-pointer"
        defaultChecked
      />
      <label htmlFor="male" className="text-sm text-gray-600 cursor-pointer">
        Masculino
      </label>

      <input
        type="radio"
        name="radio-3"
        id="female"
        className="appearance-none border-2 border-accent h-3 w-3 rounded-full checked:bg-gray-700 cursor-pointer"
      />
      <label htmlFor="female" className="text-sm text-gray-600 cursor-pointer">
        Feminino
      </label>
    </div>
  );
};

export default SexCheckboxField;
