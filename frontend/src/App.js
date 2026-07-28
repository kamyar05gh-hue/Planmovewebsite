import "@/App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import { Toaster } from "@/components/ui/sonner";

// Secondary legal pages are rarely visited, so they are code-split
// to keep the initial bundle lean.
const ImpressumPage = lazy(() => import("@/pages/ImpressumPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));

function AppShell() {
  return (
    <div className="App">
      <Landing />
      <Toaster position="bottom-center" theme="light" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route
          path="/impressum"
          element={
            <Suspense fallback={null}>
              <ImpressumPage />
            </Suspense>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <Suspense fallback={null}>
              <PrivacyPage />
            </Suspense>
          }
        />
        <Route
          path="/agb"
          element={
            <Suspense fallback={null}>
              <TermsPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
