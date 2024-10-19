import React, { useState } from "react";

import ComponentSection from "./ComponentSection";
import { v4 as uuidv4 } from "uuid";

interface ConfigurationSetupProps {
  id: string;
}

const ConfigurationSetup: React.FC<ConfigurationSetupProps> = () => {
  const [componentSections, setComponentSections] = useState<
    { id: string; title: string; inputType: string }[]
  >([{ id: uuidv4(), title: "Component Title", inputType: "Input Text" }]);

  const handleAddSection = () => {
    setComponentSections((prevSections) => [
      ...prevSections,
      { id: uuidv4(), title: "Component Title", inputType: "Input Text" },
    ]);
  };

  const handleRemoveSection = (idToRemove: string) => {
    setComponentSections((prevSections) =>
      prevSections.filter((section) => section.id !== idToRemove)
    );
  };

  //   const componentSections = [
  //     { title: "Component Title", inputType: "Input Text" },
  //     { title: "Component Title", inputType: "Input Text" },
  //     { title: "Component Title", inputType: "Input Text" },
  //     { title: "Component Title", inputType: "Sub Field" },
  //   ];

  return (
    <div className="flex items-start justify-center min-h-screen ">
      <main className="flex flex-col px-20 py-6 bg-white rounded-lg">
        <header className="flex flex-col w-full max-w-[752px] max-md:max-w-full">
          <h1 className="text-xl">Configuration Setup</h1>
          <p className="self-start mt-1 leading-snug font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
            Create a new configuration to create UI to setup wallpaper generator
          </p>
        </header>

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
        <button
          onClick={handleAddSection}
          className="overflow-hidden gap-2 self-stretch p-3 mt-2.5 max-w-full leading-none bg-green-600 rounded-lg border border-emerald-600 border-solid font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] w-[180px]"
        >
          Add Section
        </button>

        {/* <AddSectionButton id="1" /> */}

        {componentSections.map((section, index) => (
          <ComponentSection
            key={section.id}
            index={index}
            title={section.title}
            inputType={section.inputType}
            onRemove={() => handleRemoveSection(section.id)} // Pass the correct index
            isRemovable={index !== 0}
          />
        ))}

        {/* <SubComponentSection
          id="1"
          title="Component Title"
          inputType="Input Text"
        /> */}
        <button className="w-full px-5 py-3 mt-2.5 leading-none bg-blue-600 text-white rounded-lg font-medium border border-blue-700 hover:bg-blue-700 transition-all">
          Save
        </button>
      </main>
    </div>
  );
};

export default ConfigurationSetup;
