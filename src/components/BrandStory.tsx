import familyImage from "@/assets/family.png";
import Flag_of_Malaysia from "@/assets/Flag_of_Malaysia.svg";
import { Heart, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const MalaysiaFlag = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <img
    src={Flag_of_Malaysia}
    alt="Malaysia flag"
    width={Math.round(size * 1.5)}
    height={size}
    className={className}
  />
);

const ForkSpoon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {/* Fork (left) */}
    <path d="M5 2v7" />
    <path d="M7 2v7" />
    <path d="M9 2v7" />
    <path d="M7 9v13" />

    {/* Spoon (right) */}
    <path d="M16.5 10c2.2 0 3.5-1.6 3.5-3.5S18.7 3 16.5 3S13 4.6 13 6.5S14.3 10 16.5 10Z" />
    <path d="M16.5 10v12" />
  </svg>
);


const BrandStory = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: MalaysiaFlag,
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
      icon: ForkSpoon,
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
          <span className="font-medium text-sm uppercase tracking-widest" style={{ color: 'var(--light-blue, #60a5fa)' }}>{t("brandStory.heritage")}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-3 mb-4">
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
            <div className="absolute -bottom-6 -right-6 z-20 bg-card p-6 rounded-xl shadow-card dark:bg-slate-800">
              <p className="font-serif text-3xl font-bold text-primary dark:text-white">20+</p>
              <p className="text-sm text-muted-foreground dark:text-slate-300">{t("brandStory.yearsOfTrust")}</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 font-serif">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--light-blue, #60a5fa)' }}>
              <span className="relative inline-block align-middle">
                <span className="font-serif text-2xl" style={{ color: 'var(--light-blue, #60a5fa)' }}>{t("brandStory.brandName", "KAMARIAH")}</span>
                <span className="absolute -top-2 -right-3 w-3 h-3 text-[8px] font-bold leading-none flex items-center justify-center rounded-full bg-white border border-primary text-primary dark:bg-slate-800 dark:border-slate-600 dark:text-white">
                  R
                </span>
              </span> {t("brandStory.story1")} <span className="font-medium" style={{ color: 'var(--light-blue, #60a5fa)' }}>Kamariah Kamaruddin</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed dark:text-slate-300">
              {t("brandStory.story2")}
            </p>
            <p className="text-muted-foreground leading-relaxed dark:text-slate-300">
              {t("brandStory.story3")}
            </p>
            <p className="font-medium leading-relaxed" style={{ color: 'var(--light-blue, #60a5fa)' }}>
              {(() => {
                const story4 = t("brandStory.story4");
                const brand = t("brandStory.brandName", "KAMARIAH");
                const idx = story4.indexOf(brand);
                if (idx === -1) return story4;
                return <>
                  {story4.slice(0, idx)}
                  <span className="relative inline-block align-middle">
                    <span className="font-serif text-2xl" style={{ color: 'var(--light-blue, #60a5fa)' }}>{brand}</span>
                    <span className="absolute -top-2 -right-3 w-3 h-3 text-[8px] font-bold leading-none flex items-center justify-center rounded-full bg-white border border-primary text-primary dark:bg-slate-800 dark:border-slate-600 dark:text-white">R</span>
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
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center justify-center">
                {typeof value.icon === "function" && value.icon.name === "MalaysiaFlag" ? (
                  <value.icon size={32} />
                ) : value.icon === Heart ? (
                  <Heart size={32} color="#ef4444" fill="#ef4444" strokeWidth={2} />
                ) : value.icon === Shield ? (
                  <Shield size={32} color="#facc15" fill="#facc15" strokeWidth={2} />
                ) : value.icon === ForkSpoon ? (
                  <ForkSpoon size={32} className="text-[#cd7f32]" />
                ) : (
                  <value.icon size={32} color="#3b82f6" strokeWidth={2} />
                )}
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-300 font-serif text-center">
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
