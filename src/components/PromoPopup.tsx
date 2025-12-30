import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

const PromoPopup = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPromo = sessionStorage.getItem("kamariah-promo-seen");
      if (!hasSeenPromo) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("kamariah-promo-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-fade-up">
      <div className="bg-card rounded-2xl shadow-card border border-gold/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gold/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="text-gold" size={20} />
            <span className="font-serif font-semibold text-foreground">{t("specialOffer")}</span>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
            {t("bulkPurchasePromotion")}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {t("availableNow")}
          </p>
          <Button
            variant="gold"
            className="w-full text-black"
            onClick={() => {
              handleClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("contactUs")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
