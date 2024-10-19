import React from "react";

interface ConfigurationItemProps {
  imageSrc: string;
  title: string;
  icon1Src: string;
  icon2Src: string;
}

const ConfigurationItemBox: React.FC<ConfigurationItemProps> = ({
  imageSrc,
  title,
  icon1Src,
  icon2Src,
}) => {
  return (
    <article className="flex flex-col grow shrink py-2.5 pr-3.5 pl-2.5 w-40 bg-white rounded-lg border border-solid border-zinc-300 min-h-[276px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain flex-1 aspect-[1.02] w-[177px]"
      />
      <div className="flex overflow-hidden flex-col mt-3.5 w-full min-h-[68px]">
        <h3 className="flex-1 leading-snug font-[number:var(--sds-typography-body-font-weight-regular)] size-full text-[color:var(--sds-color-text-default-tertiary)] text-[length:var(--sds-typography-body-size-small)]">
          {title}
        </h3>
        <div className="flex flex-1 gap-2 items-end px-1 py-1 mt-2 size-full">
          <button className="flex overflow-hidden gap-2 justify-center items-center px-1.5 rounded-lg border border-solid bg-white bg-opacity-80 border-neutral-500 h-[26px] w-[26px]">
            <img
              loading="lazy"
              src={icon1Src}
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </button>
          <button className="flex overflow-hidden gap-2 justify-center items-center px-1.5 rounded-lg border border-solid bg-white bg-opacity-80 border-neutral-500 h-[26px] w-[26px]">
            <img
              loading="lazy"
              src={icon2Src}
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ConfigurationItemBox;
