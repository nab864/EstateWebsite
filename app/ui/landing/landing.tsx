import ImageCarousel from "./carousel";
import TopBar from "./top-bar";

export default function Landing() {
  return (
    <div className="h-screen relative flex flex-col">
      <TopBar />
      <ImageCarousel
        images={["/house-1.jpg", "/house-2.jpg", "/house-3.jpg"]}
      />
      <h1
        className="absolute bottom-30 left-30 m-8 text-4xl animate-slide-right opacity-0 text-secondary-accent"
        style={{ animationDelay: `${1.5}s` }}
      >
        Commitment You Feel <br />
        in Every Detail
      </h1>
    </div>
  );
}
