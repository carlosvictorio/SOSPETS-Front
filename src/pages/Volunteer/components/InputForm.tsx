import React from "react";

type InputFormProps = {
  label: string;
  classname?: string;
  type?: string;
};

const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  ({ label, type, classname }, ref) => {
    return (
      <label className="floating-label">
        <span className="bg-blue-200 font-bold text-accent">{label}</span>
        <input
          placeholder={label}
          type={type}
          ref={ref}
          className={`${classname ? classname : ""} py-1 bg-blue-200 px-2 placeholder:text-sm rounded-sm outline-2 outline-accent focus:outline-3 focus:outline-accent`}
        />
      </label>
    );
  },
);
export default InputForm;
