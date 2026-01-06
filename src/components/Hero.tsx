import { Button } from "@/components/ui/button";
import heroImage from "@/assets/image.png";
import productImage from "@/assets/image copy.png";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
      // Preload all product images on mount
      useEffect(() => {
        productImages.forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
      }, []);
    // Touch state for swipe
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    // Handle swipe gesture
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStartX(e.changedTouches[0].clientX);
      setTouchEndX(null);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEndX(e.changedTouches[0].clientX);
    };
    const handleTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        const distance = touchStartX - touchEndX;
        if (distance > 50) {
          nextImage(); // swipe left
        } else if (distance < -50) {
          prevImage(); // swipe right
        }
      }
      setTouchStartX(null);
      setTouchEndX(null);
    };
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const productImages = [heroImage, productImage];

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 mt-24"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 sm:pt-28 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <div className="text-left space-y-4 md:space-y-6 animate-fade-up">
            {/* Tagline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 dark:text-white leading-tight">
              {t("tagline")}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                variant="hero"
                theme={theme}
                size="lg"
                className="text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto min-w-[180px]"
                onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("exploreStory")}
              </Button>
              <Button
                variant="heroOutline"
                theme={theme}
                size="lg"
                className="text-sm sm:text-base font-semibold border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all shadow-md hover:shadow-lg w-full sm:w-auto min-w-[180px]"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("viewProducts")}
              </Button>
            </div>
          </div>

          {/* Right Image with Carousel */}
          <div className="relative animate-fade-up delay-300 mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-3xl blur-2xl scale-95" />

              {/* Product Image */}
              <div
                className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={productImages[currentImageIndex]}
                  alt="Kamariah cooking oil bottle"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-opacity duration-300"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-amber-600 w-6 sm:w-8"
                        : "bg-gray-400 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-amber-400/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 bg-orange-400/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
