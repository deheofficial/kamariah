import { useState, useEffect } from "react";
import KamariahLogo from "@/assets/KamariahLogo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language switcher state
  const [lang, setLang] = useState(i18n.language || "en");
  const [langOpen, setLangOpen] = useState(false);

  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setLangOpen(() => false);
  };

  const { t } = useTranslation();
  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#story", label: t("brandStory") },
    { href: "#products", label: t("products") },
    { href: "#export", label: t("export") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-4 border-gold ${isScrolled ? "shadow-lg py-3" : "py-5"} bg-blue-900 dark:bg-blue-950 text-white`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="relative inline-block">
            <img
              src={KamariahLogo}
              alt="Kamariah Logo"
              className="h-14 w-auto transition-all duration-300"
            />
            <span className="absolute -top-1.5 -right-2 w-2 h-2 text-[7px] font-bold leading-none flex items-center justify-center rounded-full bg-white border border-blue-500 text-blue-900">
              R
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 text-white hover:text-gold`}
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <button
              className={
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition-all font-medium focus:outline-none bg-blue-800 text-white border-blue-700 hover:bg-blue-700"
              }
              onClick={() => setLangOpen((v) => !v)}
            >
              <Globe className="w-5 h-5" />
              <span>{lang === "ms" ? "Malay" : "English"}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg z-50 bg-white border border-gray-200 overflow-hidden">
                <button
                  className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors text-gray-900 ${lang === "en" ? "font-bold bg-gray-50" : ""}`}
                  onClick={() => handleLangChange("en")}
                >
                  <Globe className="w-5 h-5" /> English
                </button>
                <button
                  className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors text-gray-900 ${lang === "ms" ? "font-bold bg-gray-50" : ""}`}
                  onClick={() => handleLangChange("ms")}
                >
                  <Globe className="w-5 h-5" /> Malay
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </button>
      </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div
          className={"md:hidden shadow-lg animate-fade-in bg-blue-900 border-t border-blue-800"}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium py-3 px-4 rounded-lg transition-colors text-white hover:bg-blue-800 hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-blue-800">
              <div className="relative">
                <button
                  className={
                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 transition-all font-medium focus:outline-none bg-blue-800 text-white border-blue-700 hover:bg-blue-700"
                  }
                  onClick={() => setLangOpen((v) => !v)}
                >
                  <Globe className="w-5 h-5" />
                  <span>{lang === "ms" ? "Malay" : "English"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {langOpen && (
                  <div className="absolute left-0 right-0 mt-2 rounded-lg shadow-lg z-50 bg-white border border-gray-200 overflow-hidden">
                    <button
                      className={`w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors text-gray-900 ${lang === "en" ? "font-bold bg-gray-50" : ""}`}
                      onClick={() => handleLangChange("en")}
                    >
                      <Globe className="w-5 h-5" /> English
                    </button>
                    <button
                      className={`w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors text-gray-900 ${lang === "ms" ? "font-bold bg-gray-50" : ""}`}
                      onClick={() => handleLangChange("ms")}
                    >
                      <Globe className="w-5 h-5" /> Malay
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
