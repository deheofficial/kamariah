import { useState } from "react";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-bottle.jpg";
import img1kg from "@/assets/1kg.PNG";
import img2kg from "@/assets/2kg.PNG";
import img5kg from "@/assets/5kg.PNG";
import img17kg from "@/assets/17kg.PNG";
import halalLogo from "@/assets/halal-logo.png";
import buatanMalaysiaLogo from "@/assets/buatan-malaysia.png";
import mspoLogo from "@/assets/mspo.png";
import haccp from "@/assets/haccp.png";
import mpobLogo from "@/assets/mpob.png";
import { Flame, Droplets, Sparkles, ChefHat, Package, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const [showSpecs, setShowSpecs] = useState(false);

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
    { image: halalLogo, alt: t("halalMalaysia") },
    { image: haccp, alt: t("haccp") },
    { image: mspoLogo, alt: t("mspo") },
    { image: mpobLogo, alt: t("mpobLicense") },
    { image: buatanMalaysiaLogo, alt: t("buatanMalaysia") },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-medium text-sm uppercase tracking-widest" style={{ color: 'var(--light-blue, #60a5fa)' }}>{t("ourProducts")}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            RBD Palm Olein - CP8
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("productDesc")}
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold/5 rounded-3xl rotate-3" />
            <div className="relative bg-gradient-to-br from-cream to-cream-dark p-12 rounded-3xl">
              <div className="flex items-center justify-center rounded-xl mx-auto" style={{ width: '14rem', height: '18rem', padding: '1.5rem' }}>
                <img
                  src={selectedSize ? selectedSize.img : productImage}
                  alt={selectedSize ? selectedSize.label : "Kamariah CP8 Cooking Oil"}
                  className="max-w-full max-h-full object-contain animate-float"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            
            {/* Size Badges as Buttons */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size.label}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors
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
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                {t("ourGoodness")}
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={24} color="#f59e42" strokeWidth={2.2} />
                    </div>
                    <span className="text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="default" className="text-white" onClick={() => setShowSpecs(true)}>
                {t("viewSpecifications")}
              </Button>
              <Button
                variant="warm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("enquireNow")}
              </Button>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">{t("certifications")}</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                  cert.image ? (
                    <span key={cert.alt} className="bg-white p-2 rounded-lg flex items-center justify-center" style={{ display: 'inline-flex' }}>
                      <img src={cert.image} alt={cert.alt} className="h-16 w-auto" />
                    </span>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Modal */}
      {showSpecs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brown/60 backdrop-blur-sm" onClick={() => setShowSpecs(false)} />
          <div className="relative bg-card rounded-2xl shadow-card max-w-md w-full p-8 animate-fade-up">
            <button
              onClick={() => setShowSpecs(false)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              {t("viewSpecifications")}
            </h3>
            <div className="space-y-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
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
