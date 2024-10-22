import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface SubComponentSectionFieldsProps {
  title: string;
  inputType: string;
  onRemove: () => void;
  isRemovable: boolean;
}

const SubComponentSectionFields: React.FC<SubComponentSectionFieldsProps> = ({
  title,
  inputType,
  onRemove,
  isRemovable,
}) => {
  const [selectedType, setSelectedType] = useState("Input Text");
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };
  const inputOptions = ["Input Text", "Text Field", "Image Upload"];
  return (
    <div className="relative flex flex-wrap gap-5 items-end pt-4 pl-2 pr-1 pb-5 mt-3.5 w-full bg-white rounded-lg border border-solid border-zinc-300 max-md:max-w-full">
      {isRemovable && (
        <button
          onClick={onRemove}
          className="absolute top-1 right-2 text-black-500 font-bold text-xl"
        >
          &times;
        </button>
      )}

      <div className="flex flex-col w-60">
        <label
          htmlFor={`sub-component-title-${title}`}
          className="leading-snug text-[color:var(--sds-color-text-default-default)]"
        >
          Sub-Component Title
        </label>
        <input
          type="text"
          id="sub-component-title"
          className="overflow-hidden px-4 py-3 mt-2 w-full leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)] max-md:pr-5"
          placeholder="Value"
        />
      </div>
      <div className="flex flex-wrap gap-2 items-start font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[length:var(--sds-typography-body-size-medium)] w-[300px]">
        <label htmlFor={`input-type-${inputType}`} className="leading-snug">
          Input Type
        </label>

        <Dropdown
          label=""
          value={selectedType}
          onChange={handleTypeChange}
          options={inputOptions}
        />
      </div>
    </div>
  );
};

export default SubComponentSectionFields;
