import Footer from "../ui/footer/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}