import React from "react";

const SearchBar: React.FC = () => {
  return (
    <form className="flex gap-6 items-center self-stretch my-auto whitespace-nowrap min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)] w-[327px]">
      <div className="flex overflow-hidden flex-1 shrink gap-2 items-center self-stretch px-4 py-3 my-auto w-full bg-white rounded-full border border-solid basis-0 border-zinc-300 min-w-[240px]">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceee35d297d4c0fe5453107e73e7fbb494e6164c747eb1afdb410a1be3052fd4?placeholderIfAbsent=true&apiKey=55e82a9729ae4e5bbfa11f34c148e313"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </div>
    </form>
  );
};

export default SearchBar;
