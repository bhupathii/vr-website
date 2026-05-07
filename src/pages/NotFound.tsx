import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <SEO title="404 Not Found - VR Global Experts" description="Page not found." />
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-primary opacity-10 mb-4 select-none" aria-hidden="true">404</p>
        <h1 className="text-2xl font-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-gray-700 text-sm leading-relaxed mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <Home size={15} />
            Go to Home
          </Link>
          <button
            className="btn-outline flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
