import React, { useState } from "react";
import SubComponentSectionFields from "./SubComponentSectionFields";
import { v4 as uuidv4 } from "uuid";

interface SubComponentSectionProps {
  title: string;
  inputType: string;
}

const SubComponentSection: React.FC<SubComponentSectionProps> = ({
  title,
  inputType,
}) => {
  const [subComponentFields, setSubComponentFields] = useState<
    { id: string; title: string; inputType: string }[]
  >([{ id: uuidv4(), title: "Component Title", inputType: "Input Text" }]);

  const handleAddSubComponentFields = () => {
    setSubComponentFields((prevSections) => [
      ...prevSections,
      { id: uuidv4(), title: title, inputType: inputType },
    ]);
  };

  const handleRemoveSubComponentFields = (idToRemove: string) => {
    setSubComponentFields((prevSection) =>
      prevSection.filter((section) => section.id !== idToRemove)
    );
  };

  // const handleRemoveSubComponentFields = (index: number) => {
  //   setSubComponentFields((prevSections) =>
  //     prevSections.filter((_, i) => i !== index)
  //   );
  // };

  return (
    <section className="flex flex-col pt-5 pr-5 pb-2.5 pl-24 mt-2.5 w-full rounded-xl bg-neutral-100 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:pl-5 max-md:max-w-full">
      <h2 className="flex-wrap self-stretch py-3 w-full leading-snug rounded border-b border-zinc-400 text-[color:var(--sds-color-text-neutral-tertiary)] max-md:max-w-full">
        Sub Sections / Setup sub components
      </h2>
      {subComponentFields.map((section, index) => (
        <SubComponentSectionFields
          key={section.id}
          title={section.title}
          inputType={section.inputType}
          onRemove={() => handleRemoveSubComponentFields(section.id)}
          isRemovable={index !== 0}
        />
      ))}
      <button
        onClick={handleAddSubComponentFields}
        className="flex w-[200px] gap-2.5 justify-center items-center  grow shrink self-stretch py-3 mt-2.5 leading-none bg-blue-600 text-white rounded-lg font-medium border border-blue-700 hover:bg-blue-700 transition-all"
      >
        Add Field
      </button>
    </section>
  );
};

export default SubComponentSection;
