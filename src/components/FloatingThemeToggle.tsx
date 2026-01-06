import whatsappIcon from "../assets/whatsapp.svg";

export default function FloatingThemeToggle() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/601169919646", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-7 h-7 transition-transform group-hover:scale-110"
      />
    </button>
  );
}
