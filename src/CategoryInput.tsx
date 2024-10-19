import React from "react";

interface CategoryInputProps {
  id: string;
}

const CategoryInput: React.FC<CategoryInputProps> = () => {
  return (
    <div className="flex flex-col mt-2.5 max-w-full whitespace-nowrap font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] w-[296px]">
      <label
        htmlFor="category"
        className="leading-snug text-[color:var(--sds-color-text-default-default)]"
      >
        Category
      </label>
      <input
        type="text"
        id="category"
        className="overflow-hidden px-4 py-3 mt-2 w-full leading-none bg-white rounded-lg border border-solid border-zinc-300 text-[color:var(--sds-color-text-default-tertiary)] max-md:pr-5"
        placeholder="Value"
      />
    </div>
  );
};

export default CategoryInput;
