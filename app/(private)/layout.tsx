import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
