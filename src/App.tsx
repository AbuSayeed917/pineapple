import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";

// Pages
import { Home } from "./pages/Home";
import { WorkPage } from "./pages/WorkPage";
import { AgencyPage } from "./pages/AgencyPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFound } from "./pages/NotFound";

import { BlogPage } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPost";
import { GalleryPage } from "./pages/GalleryPage";
import { SimulationPage } from "./pages/SimulationPage";
import { CareersPage } from "./pages/CareersPage";
import { TerminalPage } from "./pages/TerminalPage";
import { LabPage } from "./pages/LabPage";
import { SchematicsPage } from "./pages/SchematicsPage";
import { PixelPage } from "./pages/PixelPage";
import { PlaygroundPage } from "./pages/PlaygroundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { FloatingSVGs } from "./components/FloatingSVGs";

export default function App() {
  return (
    <Preloader>
      <div className="min-h-screen bg-onyx-black text-onyx-text relative overflow-hidden bg-grid-pattern selection:bg-onyx-primary/30">
        <FloatingSVGs />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/agency" element={<AgencyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/gallery" element={<GalleryPage />} />

            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/simulation" element={<SimulationPage />} />
            <Route path="/simulation/:gameId" element={<SimulationPage />} />

            <Route path="/careers" element={<CareersPage />} />
            <Route path="/terminal" element={<TerminalPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/schematics" element={<SchematicsPage />} />
            <Route path="/pixel" element={<PixelPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Preloader>
  );
}
