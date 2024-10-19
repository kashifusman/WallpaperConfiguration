import React from "react";
import { useNavigate } from "react-router-dom";

const FilterButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleAddConfigurationClick = () => {
    navigate("/setup");
  };

  return (
    <div className="flex gap-2 items-start self-stretch my-auto min-w-[240px] text-[color:var(--sds-color-text-brand-tertiary)] max-md:max-w-full">
      <button className="flex gap-2 justify-center items-center p-2 whitespace-nowrap rounded-lg bg-zinc-800 text-[color:var(--sds-color-text-brand-on-brand)]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1653cc14e39c3046030201a565cd1b83ef71da82354897202129da1ce32c18?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <span className="self-stretch my-auto">New</span>
      </button>
      {/* <button className="gap-2 self-stretch p-2 rounded-lg bg-neutral-100">
        Price ascending
      </button>
      <button className="gap-2 self-stretch p-2 rounded-lg bg-neutral-100">
        Price descending
      </button> */}
      <button
        onClick={handleAddConfigurationClick}
        className="gap-2 self-stretch p-2 whitespace-nowrap rounded-lg bg-neutral-100"
      >
        Add Configuration
      </button>
    </div>
  );
};

export default FilterButtons;
