import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "522717007637"; // reemplazar por el número real, formato E.164 sin '+'
const DEFAULT_MESSAGE = "Hola, quiero solicitar una cotización de aluminio y vidrio.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white" className="relative">
        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.76-1.75A11.94 11.94 0 0 0 16.02 27C22.63 27 28 21.64 28 15S22.63 3 16.02 3Zm0 21.9a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-4.6 1.04 1-4.46-.24-.37A9.85 9.85 0 1 1 25.87 15c0 5.46-4.43 9.9-9.85 9.9Zm5.4-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
