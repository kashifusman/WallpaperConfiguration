import React from "react";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import ConfigurationItemGrid from "./ConfigurationItemGrid";

const ConfigurationPage: React.FC = () => {
  const configurationItems = [];
  const baseImageURL = "https://cdn.builder.io/api/v1/image/assets/TEMP";
  const titles = [
    "Configuration Item 1",
    "Configuration Item 2",
    "Configuration Item 3",
    "Configuration Item 4",
    "Configuration Item 5",
    "Configuration Item 6",
    "Configuration Item 7",
    "Configuration Item 8",
    "Configuration Item 9",
    "Configuration Item 10",
    "Configuration Item 11",
    "Configuration Item 12",
    "Configuration Item 13",
    "Configuration Item 14",
    "Configuration Item 15",
    "Configuration Item 16",
    "Configuration Item 17",
    "Configuration Item 18",
    "Configuration Item 19",
    "Configuration Item 20",
  ];

  for (let i = 0; i < 20; i++) {
    //const randomImageHash = Math.random().toString(36).substring(2, 15);
    configurationItems.push({
      imageSrc: `${baseImageURL}/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313`,
      title: titles[i],
      icon1Src: `${baseImageURL}/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313`,
      icon2Src: `${baseImageURL}/d7e65138a0362472c81df9edb46333b6812bf5c339c6d858debe4a8e876814e2?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313`,
    });
  }

  //   const configurationItems = [
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/d7e65138a0362472c81df9edb46333b6812bf5c339c6d858debe4a8e876814e2?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b2fee46605d8d6763a18770c3d55fcbbbbe0e00488d21b8addb45c0d292911d?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/6597827c09e8c6a0107bc59758fe7005695720ce0d3aa2f4bff0478755a5eee3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/962a0cd2622323817e9cb1f26b1d827e37ba6b7309c27fa771610a51c25d4163?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/26dd68a31d9ed52c6ca04600702a8726b51ee344e4b4733ccc7f417b8d07691b?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/8b35d8a9491597aed7f7ff182573444619d537a8379a284e0ac46006a7fd36d7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/141e791527a026e76ac61a6bcc04dfabefd64bfc18f73d558dc4fecb3639501b?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/5deb116a8f7513a5ff24c0c4a5bde885261d435c2de28f2652c4c69959dfffd3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/7f92c1639074ef8e2cee7cb6178c3f33cf69a9a3efe95581a12bbfc1566c68cd?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/5deb116a8f7513a5ff24c0c4a5bde885261d435c2de28f2652c4c69959dfffd3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/672de147f598c1a7c72c43830715fd8444701e4ec6f1cfe311c61cf1ee4f8ae7?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/5deb116a8f7513a5ff24c0c4a5bde885261d435c2de28f2652c4c69959dfffd3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/4150a9e96033688ce23b9315764de3f72f3eaeb5f41394439b4dbf93a1af1ac6?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/5deb116a8f7513a5ff24c0c4a5bde885261d435c2de28f2652c4c69959dfffd3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/bd7af38ee98bb7681c3a5b259fb6d2704f489229d33b555846621194e85474e5?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/5deb116a8f7513a5ff24c0c4a5bde885261d435c2de28f2652c4c69959dfffd3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/c587337940d5b7d356577fe430ba87c7a1a054aadd3d12dd834cc76bba707288?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //     {
  //       imageSrc:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/a37c0c0c8972415e42eeab265fc22a674731a41bcb76d692ec5fac48a2bc4915?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       title: "Configuration Item 1",
  //       icon1Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/5deb116a8f7513a5ff24c0c4a5bde885261d435c2de28f2652c4c69959dfffd3?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //       icon2Src:
  //         "https://cdn.builder.io/api/v1/image/assets/TEMP/1a0e1e84aa7d837ffc72159cda5c83b66a35f0892dce7f6b29ef82c57c704a13?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313",
  //     },
  //   ];

  return (
    <main className="flex overflow-hidden flex-col bg-white px-[200px]">
      <div className="flex flex-col flex-1 px-48 py-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
          <div className="flex flex-wrap gap-8 justify-between items-center w-full max-md:max-w-full">
            <SearchBar />
            <FilterButtons />
          </div>
        </div>
        <ConfigurationItemGrid items={configurationItems} />
        <nav className="flex gap-2 items-center self-center px-3 py-2 mt-7 leading-none whitespace-nowrap rounded-lg font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)]">
          <button className="self-stretch my-auto">Next</button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a8c7bf634fe3ebe26d3352ac40b278972529cb1c5e75487f79a991d2f677b2c?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </nav>
      </div>
    </main>
  );
};

export default ConfigurationPage;
