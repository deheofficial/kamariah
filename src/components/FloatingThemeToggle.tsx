import whatsappLogo from "@/assets/image copy copy.png";

export default function FloatingThemeToggle() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/601169919646", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-full h-full transition-transform group-hover:scale-110"
      />
    </button>
  );
}
