import React from "react";

interface DropdownProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  label,
}) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[300px]">
      <label className="leading-snug">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="overflow-hidden flex-1 shrink px-4 py-3 leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 text-[color:var(--sds-color-text-default-tertiary)] max-md:pr-5"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
