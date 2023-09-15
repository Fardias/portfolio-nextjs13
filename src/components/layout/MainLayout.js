import Footer from "../general/Footer";
import Header from "../general/Header";
import 'animate.css';

export default function MainLayout({ children }) {
  return (
    <div className="lg:container lg:mx-auto lg:px-20 px-4 relative flex flex-col justify-between md:gap-10">
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
