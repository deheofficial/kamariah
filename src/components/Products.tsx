import { useState } from "react";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-bottle.jpg";
import img1kg from "@/assets/1kg.PNG";
import img2kg from "@/assets/2kg.PNG";
import img5kg from "@/assets/5kg.PNG";
import img17kg from "@/assets/17kg.PNG";
import halalLogo from "@/assets/halal-logo.png";
import halalCert from "@/assets/halal-cert.png";
import buatanMalaysiaLogo from "@/assets/buatan-malaysia.png";
import mspoLogo from "@/assets/mspo.png";
import haccp from "@/assets/haccp.png";
import mpobLogo from "@/assets/mpob.png";
import { Flame, Droplets, Sparkles, ChefHat, Package, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Products = () => {
  const { t } = useTranslation();
  const [showSpecs, setShowSpecs] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{image: string; alt: string; fullImage?: string} | null>(null);

  const sizes = [
    { label: "1kg", img: img1kg },
    { label: "2kg", img: img2kg },
    { label: "5kg", img: img5kg },
    { label: "17kg", img: img17kg },
  ];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const benefits = [
    { icon: Flame, text: t("highHeat") },
    { icon: Droplets, text: t("noAbsorb") },
    { icon: Sparkles, text: t("crispyAromatic") },
    { icon: ChefHat, text: t("malaysianCooking") },
    { icon: Package, text: t("idealUse") },
  ];

  const specs = [
    { label: t("type"), value: t("cookingOil") },
    { label: t("ingredient"), value: "100% Pure Palm Olein" },
    { label: t("shelfLife"), value: "24 months" },
    { label: t("appearance"), value: t("appearanceValue", "Clear golden oil") },
    { label: t("packaging"), value: "1kg, 2kg, 5kg, 17kg" },
  ];

  const certifications = [
    { image: halalLogo, alt: t("halalMalaysia"), fullImage: halalCert },
    { image: haccp, alt: t("haccp") },
    { image: mspoLogo, alt: t("mspo") },
    { image: mpobLogo, alt: t("mpobLicense") },
    { image: buatanMalaysiaLogo, alt: t("buatanMalaysia") },
  ];

  useEffect(() => {
    const imagesToPreload = [productImage, ...sizes.map((s) => s.img)];
    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="products" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-medium text-sm uppercase tracking-widest text-blue-900 dark:text-blue-300">{t("ourProducts")}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            RBD Palm Olein - CP8
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            {t("productDesc")}
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Product Image */}
          <div className="relative mb-12 sm:mb-16 lg:mb-0">
            <div className="absolute inset-0 bg-gold/5 rounded-2xl md:rounded-3xl rotate-3" />
            <div className="relative bg-gradient-to-br from-cream to-cream-dark p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl">
              <div className="flex items-center justify-center rounded-xl mx-auto w-48 h-64 p-4 sm:w-56 sm:h-72 sm:p-6">
                <img
                  src={selectedSize ? selectedSize.img : productImage}
                  alt={selectedSize ? selectedSize.label : "Kamariah CP8 Cooking Oil"}
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>

            {/* Size Badges as Buttons */}
            <div className="absolute -bottom-8 sm:-bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 w-full px-4">
              {sizes.map((size) => (
                <button
                  key={size.label}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors
                    ${selectedSize && selectedSize.label === size.label
                      ? 'bg-[hsl(190,100%,80%)] text-blue-dark border-blue-dark dark:bg-[hsl(190,80%,30%)] dark:text-white'
                      : 'bg-white text-blue-dark border-border hover:bg-[hsl(190,100%,90%)] dark:bg-white dark:text-black dark:hover:bg-[hsl(190,80%,20%)]'}`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                {t("ourGoodness")}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3 md:gap-4 p-2.5 md:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={20} className="md:w-[22px] md:h-[22px] text-blue-600 dark:text-blue-400" strokeWidth={2} />
                    </div>
                    <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Button variant="default" className="text-white w-full sm:w-auto" onClick={() => setShowSpecs(true)}>
                {t("viewSpecifications")}
              </Button>
              <Button
                variant="warm"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("enquireNow")}
              </Button>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">{t("certifications")}</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {certifications.map((cert, idx) => (
                  cert.image ? (
                    <button
                      key={cert.alt}
                      onClick={() => setSelectedCert(cert)}
                      className="bg-white p-2 sm:p-3 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-200 hover:scale-105"
                      aria-label={`View ${cert.alt} certificate`}
                    >
                      <img src={cert.image} alt={cert.alt} className="h-10 sm:h-14 w-auto" />
                    </button>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-600" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              {selectedCert.alt}
            </h3>
            <div className="flex items-center justify-center bg-white rounded-xl p-8">
              <img
                src={selectedCert.fullImage || selectedCert.image}
                alt={selectedCert.alt}
                className="max-w-full max-h-[60vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Specifications Modal */}
      {showSpecs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowSpecs(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowSpecs(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t("viewSpecifications")}
            </h3>
            <div className="space-y-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 border-b border-gray-200 dark:border-slate-700">
                  <span className="text-gray-600 dark:text-gray-400">{spec.label}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
