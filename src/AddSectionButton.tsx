import React from "react";

interface AddSectionButtonProps {
  id: string;
}

const AddSectionButton: React.FC<AddSectionButtonProps> = () => {
  return (
    <button className="overflow-hidden gap-2 self-stretch p-3 mt-2.5 max-w-full leading-none bg-green-600 rounded-lg border border-emerald-600 border-solid font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] w-[180px]">
      Add Section
    </button>
  );
};

export default AddSectionButton;
