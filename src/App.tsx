import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { MessageCircle } from 'lucide-react';
const Home = lazy(() => import('./pages/Home'));
const StudyAbroad = lazy(() => import('./pages/StudyAbroad'));
const CountryPage = lazy(() => import('./pages/CountryPage'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Universities = lazy(() => import('./pages/Universities'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const Resources = lazy(() => import('./pages/Resources'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ApplyNow = lazy(() => import('./pages/ApplyNow'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919912174913"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-50 bg-[#128C7E] text-white p-3.5 rounded-full shadow-trust-lg hover:bg-[#0e7065] transition-colors items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-2 z-40" role="complementary" aria-label="Quick actions">
        <a
          href="https://wa.me/919912174913"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#15803D] text-white text-center text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
        >
          <MessageCircle size={15} /> WhatsApp
        </a>
        <Link to="/apply" className="flex-1 btn-primary text-center text-sm">
          Apply Now
        </Link>
      </div>

      <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/study-abroad/country/:country" element={<CountryPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<ServiceDetail />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
