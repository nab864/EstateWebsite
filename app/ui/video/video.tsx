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
        src="https://res.cloudinary.com/dewpq5xih/video/upload/f_auto,q_auto,vc_auto,w_1920/v1768776498/champagne_fqjzmq.mp4"
        aria-label="Luxury estate champagne service video"
      ></video>
    </div>
  );
}
