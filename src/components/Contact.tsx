/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// EmailJS config from .env.local
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();

  // Form state for EmailJS
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      window.alert('Your inquiry has been sent successfully!');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

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
      value: "15th Floor, 566 Jalan Ipoh, 51200\nKuala Lumpur, Malaysia",
      href: "https://maps.app.goo.gl/DuM63N7CsAMFdm586",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* ===== Section Header ===== */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="font-medium text-sm uppercase tracking-widest text-blue-900 dark:text-blue-300">
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
                bg-gray-50 dark:bg-slate-800
                rounded-xl
                border border-gray-200 dark:border-slate-700
                hover:border-blue-300 dark:hover:border-blue-700
                hover:shadow-md
                transition-all
                w-full
                max-w-full
                overflow-hidden
                group
              "
            >
              <div className="
                w-12 h-12 min-w-[3rem]
                bg-blue-50 dark:bg-blue-900/30
                rounded-xl
                flex items-center justify-center
                flex-shrink-0
                group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50
                transition-colors
              ">
                <info.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>

              <div className="min-w-0 w-full">
                <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.label}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all sm:break-words whitespace-pre-line">
                  {info.value}
                </p>
              </div>
            </a>
          ))}

          {/* ===== Business Hours Card ===== */}
          <div className="
            bg-gray-50 dark:bg-slate-800
            rounded-xl
            p-4 sm:p-6
            border border-gray-200 dark:border-slate-700
            w-full
            max-w-full
            flex items-start gap-4
          ">
            <div className="w-12 h-12 min-w-[3rem] bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t("businessHours")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Monday - Friday : 9:00 AM - 6:00 PM<br />
                Saturday, Sunday & Public Holiday : Closed
              </p>
            </div>
          </div>

          {/* ===== Contact Form Card ===== */}
          <div className="
            bg-gray-50 dark:bg-slate-800
            rounded-2xl
            p-6 sm:p-8
            border border-gray-200 dark:border-slate-700
            shadow-sm
            w-full
            max-w-full
            md:col-span-2
          ">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("sendMessageTitle", "Send us a Message")}
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("formNameLabel", "Name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("formNamePlaceholder", "Your name")}
                    className="
                      w-full
                      px-4 py-3
                      bg-white dark:bg-slate-900
                      border border-gray-300 dark:border-slate-600
                      rounded-lg
                      focus:outline-none
                      focus:ring-2 focus:ring-blue-500
                      focus:border-blue-500
                      transition-all
                      text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                    "
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("formEmailLabel", "Email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("formEmailPlaceholder", "your@email.com")}
                    className="
                      w-full
                      px-4 py-3
                      bg-white dark:bg-slate-900
                      border border-gray-300 dark:border-slate-600
                      rounded-lg
                      focus:outline-none
                      focus:ring-2 focus:ring-blue-500
                      focus:border-blue-500
                      transition-all
                      text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                    "
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("formSubjectLabel", "Subject")}
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4 py-3
                    bg-white dark:bg-slate-900
                    border border-gray-300 dark:border-slate-600
                    rounded-lg
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition-all
                    text-gray-900 dark:text-white
                  "
                  required
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("formMessageLabel", "Message")}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("formMessagePlaceholder", "Tell us about your inquiry...")}
                  className="
                    w-full
                    px-4 py-3
                    bg-white dark:bg-slate-900
                    border border-gray-300 dark:border-slate-600
                    rounded-lg
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition-all
                    resize-none
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                  "
                  required
                />
              </div>

              <Button variant="default" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" type="submit" disabled={sending}>
                <Send size={18} />
                {sending ? 'Sending...' : t("formSendButton", "Send Message")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;