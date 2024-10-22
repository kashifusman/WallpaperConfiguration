import React, { useState } from "react";

interface RecordComponentSectionProps {
  title: string;
  type: string;
  clone: boolean;
}

const RecordComponentSection: React.FC<RecordComponentSectionProps> = ({
  title,
  type,
  clone,
}) => {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };

  const handleInputChange = (id: number, value: string) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  return (
    <section className="flex flex-col justify-center px-3.5 py-3.5 mt-3.5 w-full rounded-lg bg-neutral-100 max-md:max-w-full">
      <h2 className="flex-wrap gap-2.5 self-stretch p-2.5 w-full text-2xl tracking-wide leading-loose text-black max-md:max-w-full">
        {title}
      </h2>
      {fields.map((field) => (
        <div
          key={field.id}
          className="flex flex-col pl-24 mt-3.5 w-full whitespace-nowrap font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)] max-md:pl-5 max-md:max-w-full"
        >
          <label
            htmlFor={`${title}-input-${field.id}`}
            className="leading-snug"
          >
            Description
          </label>
          {type === "Input Text" ? (
            <input
              id={`${title}-input-${field.id}`}
              className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 mt-2 w-full leading-none bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] max-md:max-w-full"
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
          ) : (
            <input
              id={`${title}-input-${field.id}`}
              className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 mt-2 w-full leading-none bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] max-md:max-w-full"
              type="file"
              accept="image/*"
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
          )}
        </div>
      ))}
      {clone && (
        <button
          onClick={addField}
          className="overflow-hidden gap-2 self-end p-2 mt-3.5 leading-none rounded-lg border border-solid bg-neutral-200 border-neutral-500"
        >
          Add Field
        </button>
      )}
    </section>
  );
};

export default RecordComponentSection;
