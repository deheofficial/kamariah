import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t("contactEmailLabel", "Email"),
      value: "hello@kamariah.my / km@3bumioleo.com",
      href: "mailto:hello@kamariah.my",
    },
    {
      icon: Phone,
      label: t("contactPhoneLabel", "Phone / WhatsApp"),
      value: "+60 11-3131 1309",
      href: "tel:+601131311309",
    },
    {
      icon: MapPin,
      label: t("contactAddressLabel", "Address"),
      value: "15th Floor, 566 Jalan Ipoh, 51200 Kuala Lumpur, Malaysia",
      href: "https://maps.app.goo.gl/cujWzoFtvFxzNi5WA",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* ===== Section Header ===== */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="font-medium text-sm uppercase tracking-widest" style={{ color: 'var(--light-blue, #60a5fa)' }}>
            {t("contactUs")}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("getInTouch")}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contactDesc")}
          </p>

          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6" />
        </div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* ===== Contact Info Cards ===== */}
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="
                flex items-start gap-4
                p-4 sm:p-5
                bg-background
                rounded-xl
                border border-border
                hover:border-gold/30
                hover:shadow-soft
                transition-all
                w-full
                max-w-full
                overflow-hidden
                group
              "
            >
              <div className="
                w-12 h-12 min-w-[3rem]
                bg-gold/10
                rounded-xl
                flex items-center justify-center
                flex-shrink-0
                group-hover:bg-gold/20
                transition-colors
              ">
                <info.icon className="text-gold" size={24} />
              </div>

              <div className="min-w-0 w-full">
                <h3 className="font-serif text-lg font-semibold text-white mb-3">
                  {info.label}
                </h3>
                <p className="text-base sm:text-lg font-medium text-foreground break-all sm:break-words">
                  {info.value}
                </p>
              </div>
            </a>
          ))}

          {/* ===== Business Hours Card ===== */}
          <div className="
            bg-background
            rounded-xl
            p-4 sm:p-6
            border border-border
            w-full
            max-w-full
            flex items-start gap-4
          ">
            <div className="w-12 h-12 min-w-[3rem] bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {t("businessHours")}
              </h3>
              <p className="text-white font-medium">
                Monday - Friday : 9:00 AM - 6:00 PM<br />
                Saturday, Sunday & Public Holiday : Closed
              </p>
            </div>
          </div>

          {/* ===== Contact Form Card ===== */}
          <div className="
            bg-background
            rounded-2xl
            p-6 sm:p-8
            border border-border
            shadow-soft
            w-full
            max-w-full
            md:col-span-2
          ">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
              {t("sendMessageTitle", "Send us a Message")}
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t("formNameLabel", "Name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("formNamePlaceholder", "Your name")}
                    className="
                      w-full
                      px-4 py-3
                      bg-card
                      border border-input
                      rounded-lg
                      focus:outline-none
                      focus:ring-2 focus:ring-gold/50
                      focus:border-gold
                      transition-all
                      text-white
                      placeholder:text-white/60
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t("formEmailLabel", "Email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("formEmailPlaceholder", "your@email.com")}
                    className="
                      w-full
                      px-4 py-3
                      bg-card
                      border border-input
                      rounded-lg
                      focus:outline-none
                      focus:ring-2 focus:ring-gold/50
                      focus:border-gold
                      transition-all
                      text-white
                      placeholder:text-white/60
                    "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("formSubjectLabel", "Subject")}
                </label>
                <select
                  className="
                    w-full
                    px-4 py-3
                    bg-card
                    border border-input
                    rounded-lg
                    focus:outline-none
                    focus:ring-2 focus:ring-gold/50
                    focus:border-gold
                    transition-all
                    text-white
                    bg-card
                  "
                >
                  <option value="">
                    {t("formSubjectSelect", "Select inquiry type")}
                  </option>
                  <option value="wholesale">
                    {t("formSubjectWholesale", "Wholesale Inquiry")}
                  </option>
                  <option value="export">
                    {t("formSubjectExport", "Export Partnership")}
                  </option>
                  <option value="distributor">
                    {t("formSubjectDistributor", "Distributor Inquiry")}
                  </option>
                  <option value="general">
                    {t("formSubjectGeneral", "General Question")}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("formMessageLabel", "Message")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("formMessagePlaceholder", "Tell us about your inquiry...")}
                  className="
                    w-full
                    px-4 py-3
                    bg-card
                    border border-input
                    rounded-lg
                    focus:outline-none
                    focus:ring-2 focus:ring-gold/50
                    focus:border-gold
                    transition-all
                    resize-none
                    text-white
                    placeholder:text-white/60
                  "
                />
              </div>

              <Button variant="default" size="lg" className="w-full text-white">
                <Send size={18} />
                {t("formSendButton", "Send Message")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
