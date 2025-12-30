import { Globe, TrendingUp, Package, ShieldCheck } from "lucide-react";
import bhutanFlag from "@/assets/flags/bhutan.png";
import ukFlag from "@/assets/flags/uk.png";
import cambodia from "@/assets/flags/cambodia.png";
import kosovo from "@/assets/flags/kosovo.png";
import croatia from "@/assets/flags/croatia.png";
import france from "@/assets/flags/france.png";
import HongKong from "@/assets/flags/HongKong.png";
import china from "@/assets/flags/china.png";
import { useTranslation } from "react-i18next";

const Export = () => {
  const { t } = useTranslation();
  const exportCountries = [
    { name: t("bhutan", "Bhutan"), flag: bhutanFlag, alt: t("bhutan", "Bhutan") },
    { name: t("uk", "United Kingdom"), flag: ukFlag, alt: t("uk", "United Kingdom") },
    { name: t("cambodia", "Cambodia"), flag: cambodia, alt: t("cambodia", "Cambodia") },
    { name: t("kosovo", "Kosovo"), flag: kosovo, alt: t("kosovo", "Kosovo") },
    { name: t("croatia", "Croatia"), flag: croatia, alt: t("croatia", "Croatia") },
    { name: t("france", "France"), flag: france, alt: t("france", "France") },
    { name: t("hongkong", "Hong Kong"), flag: HongKong, alt: t("hongkong", "Hong Kong") },
    { name: t("china", "China"), flag: china, alt: t("china", "China") },
  ];

  const reasons = [
    { icon: ShieldCheck, text: t("stableQuality") },
    { icon: TrendingUp, text: t("competitivePricing") },
    { icon: Package, text: t("strongSupply") },
    { icon: Globe, text: t("trustedDistributors") },
  ];

  return (
    <section id="export" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-medium text-sm uppercase tracking-widest" style={{ color: 'var(--light-blue, #60a5fa)' }}>{t("globalReach")}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              {t("exportTitle", "Our Global Presence")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("exportDesc", "Kamariah Cooking Oil is trusted not only in Malaysia, but also by international buyers across the globe.")}
            </p>

            {/* Export Countries */}
            <div className="mb-10">
              <h3 className="font-medium text-foreground mb-4">{t("exportCountriesTitle", "We proudly export to:")}</h3>
              <div className="flex flex-wrap gap-4">
                {exportCountries.map((country) => (
                  <span key={country.name} className="flex items-center gap-2">
                    <img src={country.flag} alt={country.alt} className="h-7 w-auto" />
                    <span className="font-medium text-foreground">{country.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">{t("whyChooseUsTitle", "Why International Buyers Choose Us:")}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason) => (
                  <div key={reason.text} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{reason.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Illustration */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-12 shadow-card border border-border">
              <div className="relative">
                {/* World Map Placeholder */}
                <div className="aspect-square bg-cream rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <div className="text-center z-10">
                    <Globe className="w-32 h-32 text-gold mx-auto mb-4 animate-float" />
                    <p className="font-serif text-2xl font-bold text-foreground">{t("worldwideTrust")}</p>
                    <p className="text-muted-foreground">{t("fromMalaysia")}</p>
                  </div>
                  {/* Country Flag Markers - distributed around the map */}
                  <span className="absolute bottom-8 left-8 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={bhutanFlag} alt="Bhutan" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute top-8 right-8 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={ukFlag} alt="United Kingdom" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute top-1/2 left-6 -translate-y-1/2 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={cambodia} alt="Cambodia" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute top-8 left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={kosovo} alt="Kosovo" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute bottom-8 right-8 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={croatia} alt="Croatia" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute top-1/2 right-6 -translate-y-1/2 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={france} alt="France" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute top-1/4 left-16 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={HongKong} alt="Hong Kong" className="object-cover h-10 w-10" />
                  </span>
                  <span className="absolute bottom-1/4 right-16 hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-card shadow z-20 overflow-hidden">
                    <img src={china} alt="China" className="object-cover h-10 w-10" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Export;
