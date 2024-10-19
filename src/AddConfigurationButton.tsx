import React from "react";

const AddConfigurationButton: React.FC = () => {
  return (
    <button className="overflow-hidden gap-2 self-stretch p-3 my-auto leading-none bg-green-600 rounded-lg border border-solid border-zinc-800 font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)]">
      Add Configuration
    </button>
  );
};

export default AddConfigurationButton;
