import React from "react";

interface SaveConfigurationButtonProps {
  id: string;
}

const SaveConfigurationButton: React.FC<SaveConfigurationButtonProps> = () => {
  return (
    <button className="flex gap-4 items-center mt-2.5 w-full leading-none font-[number:var(--sds-typography-body-font-weight-regular)] max-w-[752px] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full overflow-hidden self-stretch p-3 my-auto bg-indigo-400 border-indigo-400 gap-[var(--sds-size-space-200)] min-w-[240px] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)] w-[752px]">
      Save Configuration
    </button>
  );
};

export default SaveConfigurationButton;
