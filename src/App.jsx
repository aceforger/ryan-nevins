import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BooksSection from "./components/BooksSection";
import AboutAuthor from "./components/AboutAuthor";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="bg-sky-light text-charcoal">
      <Navbar />
      <main>
        <HeroSection />
        <BooksSection />
        <AboutAuthor />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
