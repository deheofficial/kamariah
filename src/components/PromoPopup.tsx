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
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 max-w-sm animate-fade-up">
      <div className="bg-card rounded-xl sm:rounded-2xl shadow-card border border-gold/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gold/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="text-gold w-[18px] h-[18px] sm:w-5 sm:h-5" />
            <span className="font-serif text-sm sm:text-base font-semibold text-foreground">{t("specialOffer")}</span>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
            {t("bulkPurchasePromotion")}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4">
            {t("availableNow")}
          </p>
          <Button
            variant="gold"
            className="w-full text-black text-sm sm:text-base"
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
