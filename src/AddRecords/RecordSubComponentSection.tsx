import React, { useState } from "react";

interface RecordSubComponentField {
  id: string;
  Title: string;
  Type: string;
}

interface RecordSubComponentProps {
  title: string;
  subComponent: {
    Title: string;
    Fileds: RecordSubComponentField[];
  };
  clone: boolean;
}

const RecordSubComponentSection: React.FC<RecordSubComponentProps> = ({
  title,
  subComponent,
  clone,
}) => {
  const [subComponents, setSubComponents] = useState([subComponent]);

  const addSubComponent = () => {
    setSubComponents([
      ...subComponents,
      {
        ...subComponent,
        Fileds: subComponent.Fileds.map((field) => ({
          ...field,
          id: `${field.id}-${subComponents.length}`,
        })),
      },
    ]);
  };

  return (
    <section className="flex flex-col justify-center px-3.5 py-3.5 mt-3.5 w-full rounded-lg border border-solid bg-neutral-100 border-zinc-300 max-md:max-w-full">
      <h3 className="flex-wrap gap-2.5 self-stretch px-2.5 w-full text-2xl tracking-wide leading-loose text-black max-md:max-w-full">
        {title}
      </h3>
      <hr />
      {subComponents.map((sc, index) => (
        <div key={index} className="mt-3.5 ml-6">
          <h4 className="text-xl font-semibold mb-2">{sc.Title}</h4>
          {sc.Fileds.map((field) => (
            <div
              key={field.id}
              className="flex flex-col pl-24 mt-3.5 w-full whitespace-nowrap max-md:pl-5 max-md:max-w-full"
            >
              <label htmlFor={`${field.id}-input`} className="leading-snug">
                {field.Title}
              </label>
              <input
                id={`${field.id}-input`}
                className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 mt-2 w-full leading-none bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] max-md:max-w-full"
                type={field.Type === "Input Text" ? "text" : "file"}
              />
            </div>
          ))}
        </div>
      ))}
      {clone && (
        <button
          onClick={addSubComponent}
          className="overflow-hidden gap-2 self-stretch p-3 mt-2.5 max-w-full leading-none bg-green-600 rounded-lg border border-emerald-600 border-solid font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] w-[180px]"
        >
          Add Section
        </button>
      )}
    </section>
  );
};

export default RecordSubComponentSection;
