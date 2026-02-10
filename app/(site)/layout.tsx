import TopBar from "../ui/top-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dewpq5xih/video/upload/f_auto,q_auto,vc_auto,w_1920/v1768776498/champagne_fqjzmq.mp4"
          type="video/mp4"
        />
      </head>
      <body
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}