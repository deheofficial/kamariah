import familyImage from "@/assets/family.png";
import { Heart, Shield, Flag, Utensils } from "lucide-react";
import { useTranslation } from "react-i18next";

const BrandStory = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: Flag,
      title: t("brandStory.values.authentic.title"),
      description: t("brandStory.values.authentic.description"),
    },
    {
      icon: Heart,
      title: t("brandStory.values.warmth.title"),
      description: t("brandStory.values.warmth.description"),
    },
    {
      icon: Shield,
      title: t("brandStory.values.honest.title"),
      description: t("brandStory.values.honest.description"),
    },
    {
      icon: Utensils,
      title: t("brandStory.values.trusted.title"),
      description: t("brandStory.values.trusted.description"),
    },
  ];

  return (
    <section
      id="story"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-medium text-sm uppercase tracking-widest text-amber-600 dark:text-amber-400">{t("brandStory.heritage")}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            {t("brandStory.title")}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gold/20 dark:bg-gold/10 rounded-2xl" />
            <img
              src={familyImage}
              alt={t("brandStory.familyImageAlt", "Malaysian family cooking together")}
              className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-card"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-2xl dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
              <p className="font-serif text-3xl font-bold text-gray-900 dark:text-white">20+</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t("brandStory.yearsOfTrust")}</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 font-serif">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="relative inline-block align-middle">
                <span className="font-serif text-base font-semibold text-gray-700 dark:text-gray-300">{t("brandStory.brandName", "KAMARIAH")}</span>
                <span className="absolute -top-1 -right-3 w-3 h-3 text-[8px] font-bold leading-none flex items-center justify-center rounded-full bg-white border border-gray-400 text-gray-700 dark:bg-slate-800 dark:border-slate-500 dark:text-gray-300">
                  R
                </span>
              </span> {t("brandStory.story1")} <span className="font-semibold text-gray-700 dark:text-gray-300">Kamariah Kamaruddin</span>.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {t("brandStory.story2")}
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {t("brandStory.story3")}
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {(() => {
                const story4 = t("brandStory.story4");
                const brand = t("brandStory.brandName", "KAMARIAH");
                const idx = story4.indexOf(brand);
                if (idx === -1) return story4;
                return <>
                  {story4.slice(0, idx)}
                  <span className="relative inline-block align-middle">
                    <span className="font-serif text-base font-semibold text-gray-700 dark:text-gray-300">{brand}</span>
                    <span className="absolute -top-1 -right-3 w-3 h-3 text-[8px] font-bold leading-none flex items-center justify-center rounded-full bg-white border border-gray-400 text-gray-700 dark:bg-slate-800 dark:border-slate-500 dark:text-gray-300">R</span>
                  </span>
                  {story4.slice(idx + brand.length)}
                </>;
              })()}
            </p>
          </div>
        </div>

        {/* Brand Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center justify-center">
                <value.icon size={32} className="text-blue-500" strokeWidth={2} />
              </div>
              <h3 className="font-serif text-base font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-serif text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
