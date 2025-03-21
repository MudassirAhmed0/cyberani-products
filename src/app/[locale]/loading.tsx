import Image from "next/image";

const Loading = () => {
  return (
    <div
      id="loader"
      className="w-full fullVh fullSvh flex items-center justify-center bg-[#01284F] z-[1232412342] fixed top-0"
    >
      <div role="status">
        <div className="relative lg:size-sp160 size-[120px]  ">
          <Image fill alt="play" className="flipped" src="/gifs/who.gif" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
