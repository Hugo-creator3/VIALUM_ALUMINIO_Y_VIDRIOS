import { Outlet } from "react-router-dom";
import { useScrollToHash } from "@/lib/useScrollToHash";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useLenis } from "@/lib/useLenis";

export function Layout() {
  useLenis();
  useScrollToHash();

  return (
    <div className="min-h-screen bg-graphite-950 font-body text-aluminum-100 antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
