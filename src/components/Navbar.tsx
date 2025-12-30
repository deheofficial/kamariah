import { useState, useEffect } from "react";
import KamariahLogo from "@/assets/KamariahLogo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force dark theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // const toggleTheme = () => {
  //   const next = theme === "light" ? "dark" : "light";
  //   setTheme(next);
  //   if (next === "dark") document.documentElement.classList.add("dark");
  //   else document.documentElement.classList.remove("dark");
  //   localStorage.setItem("theme", next);
  // };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-4 border-gold ${isScrolled ? "backdrop-blur-md shadow-lg py-3" : "py-5"} bg-white/95 dark:bg-slate-900/95`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="relative inline-block">
            <img
              src={KamariahLogo}
              alt="Kamariah Logo"
              className="h-20 w-auto transition-all duration-300"
            />
            <span className="absolute -top-2 -right-3 w-3 h-3 text-[8px] font-bold leading-none flex items-center justify-center rounded-full bg-white border border-primary text-primary dark:bg-slate-800 dark:border-slate-600 dark:text-white">
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
              className={`text-sm font-medium transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400`}
            >
              {link.label}
            </a>
          ))}
          {/* Theme toggle */}
          {/* <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </Button> */}
          <div className="relative">
            <button
              className={
                "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all font-medium focus:outline-none bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700"
              }
              onClick={() => setLangOpen((v) => !v)}
            >
              <Globe className="w-5 h-5" />
              <span>{lang === "ms" ? "Malay" : "English"}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 overflow-hidden">
                <button
                  className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${lang === "en" ? "font-bold bg-gray-50 dark:bg-slate-700" : ""}`}
                  onClick={() => handleLangChange("en")}
                >
                  <Globe className="w-5 h-5" /> English
                </button>
                <button
                  className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${lang === "ms" ? "font-bold bg-gray-50 dark:bg-slate-700" : ""}`}
                  onClick={() => handleLangChange("ms")}
                >
                  <Globe className="w-5 h-5" /> Malay
                </button>
              </div>
            )}
          </div>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-gray-700 dark:text-gray-200" size={24} />
          ) : (
            <Menu className="text-gray-700 dark:text-gray-200" size={24} />
          )}
        </button>
      </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div
          className={"md:hidden backdrop-blur-md shadow-lg animate-fade-in bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium py-3 px-4 rounded-lg transition-colors text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
              <div className="relative">
                <button
                  className={
                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 transition-all font-medium focus:outline-none bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }
                  onClick={() => setLangOpen((v) => !v)}
                >
                  <Globe className="w-5 h-5" />
                  <span>{lang === "ms" ? "Malay" : "English"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {langOpen && (
                  <div className="absolute left-0 right-0 mt-2 rounded-lg shadow-lg z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 overflow-hidden">
                    <button
                      className={`w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${lang === "en" ? "font-bold bg-gray-50 dark:bg-slate-700" : ""}`}
                      onClick={() => handleLangChange("en")}
                    >
                      <Globe className="w-5 h-5" /> English
                    </button>
                    <button
                      className={`w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${lang === "ms" ? "font-bold bg-gray-50 dark:bg-slate-700" : ""}`}
                      onClick={() => handleLangChange("ms")}
                    >
                      <Globe className="w-5 h-5" /> Malay
                    </button>
                  </div>
                )}
              </div>
              <Button
                variant="default"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>

              {/* mobile theme toggle */}
              {/* <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
