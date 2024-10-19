import React from "react";

interface ConfigurationItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ConfigurationItem: React.FC<ConfigurationItemProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="self-stretch px-5 py-3.5 bg-white rounded-[14px] border border-[#b5afaf] flex-col justify-end items-end gap-3.5 flex">
      <div className="self-stretch h-[189px] px-[19px] py-5 bg-white rounded-[11px] justify-start items-center gap-[17px] inline-flex">
        <img className="w-[135px] self-stretch " src={imageUrl} />
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[17px] flex">
            <div className="self-stretch grow shrink basis-0 text-[#1e1e1e] text-[32px] font-normal font-['Inter'] leading-[38.40px]">
              {title}
            </div>
            <div className="self-stretch grow shrink basis-0 text-[#757575] text-base font-normal font-['Inter'] leading-snug">
              {description}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[243px] h-10 relative">
        <div className="w-[243px] h-10 left-0 top-0 absolute">
          <div className="w-[75px] h-10 px-[9px] py-3 left-[168px] top-0 absolute bg-[#8e8e93] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 inline-flex">
            <button className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
              Edit
            </button>
          </div>
          <div className="w-[75px] h-10 px-[9px] py-3 left-[84px] top-0 absolute bg-[#8e8e93] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 inline-flex">
            <button className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
              Create
            </button>
          </div>
          <div className="w-[75px] h-10 px-[9px] py-3 left-0 top-0 absolute bg-[#8e8e93] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 inline-flex">
            <button className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationItem;
