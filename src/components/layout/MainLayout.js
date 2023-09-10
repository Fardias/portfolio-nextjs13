import Footer from "../general/Footer";
import Header from "../general/Header";

export default function MainLayout({ children }) {
  return (
    <div className="lg:container lg:mx-auto lg:px-20 px-4 relative">
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
