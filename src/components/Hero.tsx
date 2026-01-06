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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-left space-y-6 animate-fade-up">
            {/* Tagline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 dark:text-white leading-tight">
              {t("tagline")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="hero"
                theme={theme}
                size="lg"
                className="text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("exploreStory")}
              </Button>
              <Button
                variant="heroOutline"
                theme={theme}
                size="lg"
                className="text-base font-semibold"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("viewProducts")}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-3xl blur-2xl scale-95" />

              {/* Product Image */}
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
                <img
                  src={heroImage}
                  alt="Kamariah cooking oil bottle"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/30 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="text-gray-600 dark:text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
