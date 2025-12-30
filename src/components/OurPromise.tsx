import { Star, Repeat, Leaf, ShieldCheck, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurPromise = () => {
  const { t } = useTranslation();
  const promises = [
    {
      icon: Star,
      title: t("qualityTaste"),
      description: t("qualityTasteDesc"),
    },
    {
      icon: Repeat,
      title: t("consistentAroma"),
      description: t("consistentAromaDesc"),
    },
    {
      icon: Leaf,
      title: t("healthyOil"),
      description: t("healthyOilDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("cleanSafe"),
      description: t("cleanSafeDesc"),
    },
    {
      icon: DollarSign,
      title: t("betterValue"),
      description: t("betterValueDesc"),
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-medium text-sm uppercase tracking-widest" style={{ color: 'var(--light-blue, #60a5fa)' }}>{t("ourCommitment")}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              {t("ourPromise")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("promiseDesc")}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6" />
          </div>

          {/* Promise Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <div
                key={promise.title}
                className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/30">
                    {promise.icon && (
                      <promise.icon size={24} className="text-blue-600 dark:text-blue-400" strokeWidth={2} />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
