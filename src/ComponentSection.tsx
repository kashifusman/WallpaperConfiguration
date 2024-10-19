import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SubComponentSection from "./SubComponentSection";

interface ComponentSectionProps {
  index: number;
  title: string;
  inputType: string;
  onRemove: () => void;
  isRemovable: boolean;
}

const ComponentSection: React.FC<ComponentSectionProps> = ({
  index,
  title,
  inputType,
  onRemove,
  isRemovable,
}) => {
  const [selectedType, setSelectedType] = useState("Input Text");
  const [showSubComponent, setShowSubComponent] = useState(false);
  //   const [subComponentSection, setSubComponentSection] = useState<
  //     {
  //       title: string;
  //       inputType: string;
  //     }[]
  //   >([]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
    if (selectedValue === "Sub Component") {
      setShowSubComponent(true);
    } else {
      setShowSubComponent(false);
    }
  };

  const inputOptions = [
    "Input Text",
    "Text Field",
    "Image Upload",
    "Sub Component",
  ];
  return (
    <>
      <section className=" relative flex flex-wrap gap-5 items-end px-2 py-2.5 mt-2.5 w-full bg-white rounded-lg border border-solid border-zinc-300 max-md:max-w-full">
        {isRemovable && (
          <button
            onClick={onRemove}
            className="absolute top-1 right-2 text-black-500 font-bold text-xl"
          >
            &times;
          </button>
        )}

        <div className="flex flex-wrap gap-2 items-start font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[length:var(--sds-typography-body-size-medium)] w-[300px]">
          <label
            htmlFor={`component-title-${title}`}
            className="leading-snug text-[color:var(--sds-color-text-default-default)]"
          >
            Component Title
          </label>
          <h1>{`key: ${index}`}</h1>
          <input
            type="text"
            id={`component-title-${title}`}
            className="overflow-hidden flex-1 shrink px-4 py-3 leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)] max-md:pr-5"
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
        <div className="flex flex-wrap items-start w-[79px]">
          <div className="flex grow shrink gap-3 items-center w-[63px]">
            <input
              type="checkbox"
              id={`clone-${title}`}
              className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch my-auto w-4 h-4 bg-white rounded border border-black border-solid min-h-[16px]"
            />
            <label
              htmlFor={`clone-${title}`}
              className="flex-1 shrink self-stretch my-auto leading-snug basis-0 font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)]"
            >
              Clone
            </label>
          </div>
        </div>
      </section>

      {showSubComponent && (
        <SubComponentSection title="Component Title" inputType="Input Text" />
      )}
      {/* {subComponentSection.map((section, index) => (
        <SubComponentSection
          key={index}
          title={section.title}
          inputType={section.inputType}
        />
      ))} */}
      {/* <SubComponentSection
        id="1"
        title="Component Title"
        inputType="Input Text"
      /> */}
    </>
  );
};

export default ComponentSection;
