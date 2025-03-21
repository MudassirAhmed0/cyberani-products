import React from "react";
interface Props {
  fromBlogs?: boolean;
  setSearch: (search: string) => void;
}
const Search = ({ fromBlogs, setSearch }: Props) => {
  return (
    <label
      htmlFor={"search"}
      className={`${
        fromBlogs ? "bg-[#0000000f] text-gray" : "bg-[#1A3D5E]"
      } lg:w-[65.2083333333vw] w-full lg:h-sp64 h-12 border8 overflow-hidden lg:px-sp32 px-8`}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        name="search"
        id="search"
        autoComplete="off"
        type="text"
        className="size-full outline-none bg-transparent lg:text18 mtext18 placeholder:text-inherit"
        placeholder="Search"
      />
    </label>
  );
};

export default Search;
