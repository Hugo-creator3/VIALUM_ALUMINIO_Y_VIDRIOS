import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Navbar } from "./components/layout/Navbar";
import { useLenis } from "./lib/useLenis";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { BlogPage } from "./pages/BlogPage";
import { PostPage } from "./pages/PostPage";
import { SimulatorPage } from "./pages/SimulatorPage";

function App() {
  useLenis();
  return (
    <div className="min-h-screen bg-graphite-950 font-body text-aluminum-100 antialiased">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo/:slug" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/simulador/:slug" element={<SimulatorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;