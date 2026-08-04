import { useState } from "react";

type Props = {
  title: string;
  name: string;
  values: any[];
  handleChange: (e: any) => void;
  selected: string;
};

const Options = ({ title, name, values, handleChange, selected }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex flex-col pt-5">
      <label htmlFor={name} className="pb-4">
        {title}
      </label>
      <select
        value={selected}
        name={name}
        onChange={(e) => {
          handleChange(e);
          setIsSelected(true);
        }}
        id={name}
        className={`rounded-lg border border-[#2f3e5c]/20 bg-white py-3 pl-5 text-[#111] outline-hidden focus:border-[#2f3e5c] ${
          isSelected && "text-[#111]"
        }`}
      >
        <option value="Select Option">Select option</option>
        {values.map((value, key) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
