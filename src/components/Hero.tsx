import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-oil.jpg";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { t } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Golden cooking oil splash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-white font-serif italic mb-4 animate-fade-up delay-200">
            {t("tagline")}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 animate-fade-up delay-300">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
            <Button
              variant="hero"
              theme={theme}
              className="text-white"
              onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("exploreStory")}
            </Button>
            <Button
              variant="heroOutline"
              theme={theme}
              className="text-white"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("viewProducts")}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-2/4 -translate-x-2/4 animate-float">
          <ChevronDown className="text-white/70" size={32} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl dark:bg-slate-700/20" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl dark:bg-slate-700/20" />
    </section>
  );
};

export default Hero;
