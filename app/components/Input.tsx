import React from "react";

type InputProps = Readonly<{
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type: string;
}>;

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className="
            block
            rounded-md
            px-6
            py-3
            w-full
            text-md
            text-white
            bg-neutral-700
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            invalid:border-b-1
            "
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="
            absolute
            text-md
            text-zinc-150
            duration-150
            transform-translate-y-3
            scale-75
            top-4
            z-10
            origin-0
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
