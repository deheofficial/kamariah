import { Button } from "@/components/ui/button";
import heroImage from "@/assets/image.png";
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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={heroImage}
          alt="Kamariah cooking oil bottle"
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-900 font-serif italic mb-4 animate-fade-up delay-200 drop-shadow-md bg-white/70 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
            {t("tagline")}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-10 animate-fade-up delay-300 drop-shadow-md bg-white/70 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
            <Button
              variant="hero"
              theme={theme}
              onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("exploreStory")}
            </Button>
            <Button
              variant="heroOutline"
              theme={theme}
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("viewProducts")}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-2/4 -translate-x-2/4 animate-float">
          <ChevronDown className="text-gray-600" size={32} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl dark:bg-slate-700/20" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl dark:bg-slate-700/20" />
    </section>
  );
};

export default Hero;
