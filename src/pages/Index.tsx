import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import OurPromise from "@/components/OurPromise";
import Products from "@/components/Products";
import Export from "@/components/Export";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <main className="min-h-screen bg-background dark:bg-black transition-colors duration-300">
        <ThemeSwitcher />
        <Navbar />
        <Hero />
        <BrandStory />
        <OurPromise />
        <Products />
        <Export />
        <Contact />
        <Footer />
        <PromoPopup />
      </main>
    </I18nextProvider>
  );
};

export default Index;
