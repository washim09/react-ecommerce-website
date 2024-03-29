import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
    <button onClick={openWhatsApp} className="icon_wrapper bg-green-700 hover:bg-green-500">
    <BsWhatsapp />
    </button>
  </div>
  );
};

export default WhatsAppButton;
