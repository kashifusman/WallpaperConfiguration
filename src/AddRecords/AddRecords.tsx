import React, { useState, useEffect } from "react";
import Header from "./Header";
import RecordComponentSection from "./RecordComponentSection";
import RecordSubComponentSection from "./RecordSubComponentSection";

interface ComponentData {
  id: string;
  Title: string;
  Type: string;
  Clone: string;
  SubComponent?: {
    Title: string;
    Fileds: Array<{ id: string; Title: string; Type: string }>;
  } | null;
}

const sampleData = {
  Category: "Wallpaper",
  Data: [
    {
      id: "1",
      Title: "Component1",
      Type: "Input Text",
      Clone: "False",
      SubComponent: null,
    },
    {
      id: "2",
      Title: "Component2",
      Type: "Input Text",
      Clone: "True",
      SubComponent: null,
    },
    {
      id: "3",
      Title: "Component3",
      Type: "Image Upload",
      Clone: "False",
      SubComponent: null,
    },
    {
      id: "4",
      Title: "Component4",
      Type: "Image Upload",
      Clone: "True",
      SubComponent: null,
    },
    {
      id: "5",
      Title: "Component5",
      Type: "SubComponent",
      Clone: "False",
      SubComponent: {
        Title: "SubComponent1",
        Fileds: [
          { id: "11", Title: "SubComponent11", Type: "Input Text" },
          { id: "12", Title: "SubComponent12", Type: "Input Text" },
        ],
      },
    },
    {
      id: "6",
      Title: "Component6",
      Type: "SubComponent",
      Clone: "True",
      SubComponent: {
        Title: "SubComponent2",
        Fileds: [
          { id: "21", Title: "SubComponent21", Type: "Input Text" },
          { id: "22", Title: "SubComponent22", Type: "Input Text" },
        ],
      },
    },
  ],
};

const AddRecords: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);

  useEffect(() => {
    setComponents(sampleData.Data);
  }, []);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/wallpaper-data");
  //       const data = await response.json();

  //       setComponents(data.Data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  return (
    <main className="flex flex-col px-48 bg-white max-md:px-5">
      <Header />
      <section className="flex flex-col self-center mt-8 max-w-full w-[810px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="tracking-tight leading-tight font-[number:var(--sds-typography-heading-font-weight)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-heading-size-base)] max-md:max-w-full">
            Add Records
          </h1>
          <p className="self-start mt-1 leading-snug font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-body-size-medium)]">
            enter records for creating new wallpaper settings
          </p>
        </div>
        {components.map((component) => (
          <React.Fragment key={component.id}>
            {component.Type !== "SubComponent" ? (
              <RecordComponentSection
                title={component.Title}
                type={component.Type}
                clone={component.Clone === "True"}
              />
            ) : (
              <RecordSubComponentSection
                title={component.Title}
                subComponent={component.SubComponent!}
                clone={component.Clone === "True"}
              />
            )}
          </React.Fragment>
        ))}
        <button className="w-full px-5 py-3 mt-2.5 leading-none bg-blue-600 text-white rounded-lg font-medium border border-blue-700 hover:bg-blue-700 transition-all">
          Save
        </button>
      </section>
    </main>
  );
};

export default AddRecords;
