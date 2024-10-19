import React from "react";
import ConfigurationItemBox from "./ConfigurationItemBox";

interface ConfigurationItemData {
  imageSrc: string;
  title: string;
  icon1Src: string;
  icon2Src: string;
}

interface ConfigurationItemGridProps {
  items: ConfigurationItemData[];
}

const ConfigurationItemGrid: React.FC<ConfigurationItemGridProps> = ({
  items,
}) => {
  return (
    <section className="flex flex-wrap gap-24 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
      {items.map((item, index) => (
        <ConfigurationItemBox
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          icon1Src={item.icon1Src}
          icon2Src={item.icon2Src}
        />
      ))}
    </section>
  );
};

export default ConfigurationItemGrid;
