import React from "react";
import ConfigurationItem from "./ConfigurationItem";

interface ConfigurationListProps {
  configurations: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const ConfigurationList: React.FC<ConfigurationListProps> = ({
  configurations,
}) => {
  return (
    <section className="flex flex-col items-center gap-2 px-20">
      <div className="Frame17 w-full bg-white flex justify-between p-4">
        {/* Left content */}
        <div className="Frame16 text-left space-y-1">
          <div className="ConfiguredList text-[#1e1e1e] text-xl font-normal font-['Inter'] leading-normal">
            Configured List
          </div>
          <div className="CreateANewConfigurationToCreateUiToSetupWallpaperGenerator text-[#757575] text-sm font-normal font-['Inter'] leading-tight">
            Create a new configuration to create UI to setup wallpaper generator
          </div>
        </div>

        {/* Right button */}
        <div className="Button flex items-center px-3 py-2 bg-[#e3e3e3] rounded-lg border border-[#767676]">
          <span className="text-[#1e1e1e] text-base font-normal font-['Inter']">
            Add Configuration
          </span>
        </div>
      </div>
      {configurations.map((config, index) => (
        <ConfigurationItem key={index} {...config} />
      ))}
    </section>
  );
};

export default ConfigurationList;
