import ImageCarousel from "./carousel";
import TopBar from "./top-bar";

export default function Landing() {
  return (
    <div className="h-screen relative flex flex-col">
      <TopBar />
      <ImageCarousel
        images={["/house-1.jpg", "/house-2.jpg", "/house-3.jpg"]}
      />
      <div
        className="absolute bottom-30 left-30 m-8 flex flex-col items-center animate-slide-right opacity-0"
        style={{ animationDelay: `${1.5}s` }}
      >
        <h1 className="text-4xl text-[#f6f3ee]">
          Commitment You Feel <br />
          in Every Detail
        </h1>
        <button className="border text-[#f6f3ee] hover:bg-[#f6f3ee] hover:text-black transition-colors duration-300 p-1 mt-3 rounded cursor-pointer">
          Find an Estate Manager
        </button>
      </div>
    </div>
  );
}
