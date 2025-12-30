import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-white transition-colors duration-200 border-t-4 border-gold">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative inline-block mb-4">
              <h3 className="font-serif text-2xl font-bold" style={{ color: 'var(--light-blue, #60a5fa)' }}>{t("brandName", "KAMARIAH")}</h3>
              <span className="absolute -top-2 -right-4 text-xs font-bold" style={{ color: 'var(--light-blue, #60a5fa)', background: 'transparent' }}>®</span>
            </div>
            <p className="text-foreground/70 dark:text-slate-300 mb-4">
              {t("footerSlogan")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground dark:text-white mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {["home", "story", "products", "export", "contact"].map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-foreground/70 dark:text-slate-300 hover:text-gold dark:hover:text-gold transition-colors"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-foreground dark:text-white mb-4">
              {t("followUs", "Follow Us")}
            </h4>

            <div className="flex gap-4 items-center">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Kamariah-Product-100064986189326/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gold rounded-full p-2 hover:bg-gold/80 transition-colors"
              >
                <FaFacebookF size={20} color="#fff" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/3bumioleo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gold rounded-full p-2 hover:bg-gold/80 transition-colors"
              >
                <FaInstagram size={20} color="#fff" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@minyakmasakkamariah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-gold rounded-full p-2 hover:bg-gold/80 transition-colors"
              >
                <FaTiktok size={20} color="#fff" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 dark:text-slate-300 text-sm">
            © {currentYear} {t("brandName", "Kamariah")}. {t("allRightsReserved")}
          </p>
          <p className="text-foreground/60 dark:text-slate-300 text-sm">
            {t("madeInMalaysia")} 🇲🇾
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
