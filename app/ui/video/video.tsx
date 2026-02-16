export default function Video() {
  return (
    <div>
      <video
        className="w-full h-full object-cover absolute inset-0"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        src="https://res.cloudinary.com/dlboibern/video/upload/f_auto,q_auto,vc_auto,w_1920/v1770257029/champagne_fqofx2.mp4"
        aria-label="Luxury estate champagne service video"
      ></video>
    </div>
  );
}
