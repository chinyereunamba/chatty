import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  id?: string;
  label: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export { type InputProps };

export default function Input({
  type,
  placeholder,
  name,
  id,
  label,
  change,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 my-3">
      <label htmlFor={id}>{label} </label>
      <input
        className="p-2.5 text-base focus:bg-teal-100/40 border border-gray-500 rounded-md focus:outline-none focus:border-white"
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={change}
      />
    </div>
  );
}
