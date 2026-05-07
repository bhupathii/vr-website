import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const studyAbroadMenu = {
  'By Country': [
    { label: 'Study in USA', path: '/study-abroad/country/usa' },
    { label: 'Study in UK', path: '/study-abroad/country/uk' },
    { label: 'Study in Canada', path: '/study-abroad/country/canada' },
    { label: 'Study in Australia', path: '/study-abroad/country/australia' },
    { label: 'Study in Germany', path: '/study-abroad/country/germany' },
    { label: 'Study in Ireland', path: '/study-abroad/country/ireland' },
  ],
  'By Course': [
    { label: 'Engineering', path: '/study-abroad' },
    { label: 'Business / MBA', path: '/study-abroad' },
    { label: 'IT / Data Science', path: '/study-abroad' },
    { label: 'Healthcare', path: '/study-abroad' },
  ],
  'By Level': [
    { label: 'Undergraduate', path: '/study-abroad' },
    { label: 'Postgraduate', path: '/study-abroad' },
    { label: 'Diploma', path: '/study-abroad' },
  ],
  'Explore': [
    { label: 'Cost Calculator', path: '/study-abroad' },
    { label: 'Country Comparison', path: '/study-abroad' },
  ],
};

const servicesMenu = [
  { label: 'Career Counseling', path: '/services/career-counseling' },
  { label: 'University Selection', path: '/services/university-selection' },
  { label: 'Application Support', path: '/services/application-support' },
  { label: 'Visa Assistance', path: '/services/visa-assistance' },
  { label: 'Scholarships and Loans', path: '/services/scholarships-loans' },
  { label: 'Test Preparation', path: '/services/test-preparation' },
  { label: 'Pre-Departure Support', path: '/services/pre-departure-support' },
];

const universitiesMenu = [
  { label: 'Top Universities', path: '/universities' },
  { label: 'Partner Universities', path: '/universities' },
  { label: 'University Profiles', path: '/universities' },
];

const successMenu = [
  { label: 'Testimonials', path: '/success-stories' },
  { label: 'Case Studies', path: '/success-stories' },
];

const resourcesMenu = [
  { label: 'Blog', path: '/resources' },
  { label: 'Guides', path: '/resources' },
  { label: 'SOP Tips', path: '/resources' },
  { label: 'Visa Updates', path: '/resources' },
];

const aboutMenu = [
  { label: 'Our Story', path: '/about' },
  { label: 'Mission', path: '/about' },
  { label: 'Team', path: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  // Close dropdowns when route changes (during render instead of effect to avoid cascading renders)
  if (prevLocation !== location.pathname) {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setPrevLocation(location.pathname);
  }

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
    setOpenSubMenu(null);
  };

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const activeLink = (path: string) =>
    `text-sm font-medium px-2 py-2 transition-colors ${isActive(path) ? 'text-accent border-b-2 border-accent' : 'text-gray-700 hover:text-primary'}`;

  const renderSimpleDropdown = (name: string, basePath: string, items: { label: string; path: string }[]) => (
    <li className="relative" onMouseEnter={() => setOpenDropdown(name)} onMouseLeave={() => setOpenDropdown(null)}>
      <button
        className={`flex items-center gap-1 px-1 py-2 ${isActive(basePath) ? 'text-accent border-b-2 border-accent' : 'text-sm font-medium text-gray-700 hover:text-primary'} text-sm font-medium`}
        onClick={() => toggleDropdown(name)}
        aria-expanded={openDropdown === name}
        aria-haspopup="true"
      >
        {name} <ChevronDown size={14} />
      </button>
      {openDropdown === name && (
        <ul className="dropdown-menu py-1 mt-0">
          {items.map(item => (
            <li key={item.label}>
              <Link to={item.path} className="dropdown-item">{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
    <nav ref={navRef} className="bg-white border-b border-border sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="VR Global Experts – Home">
            <img
              src="/logo.png"
              alt="VR Global Experts Pvt Ltd"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <Link to="/" className={activeLink('/')}>Home</Link>
            </li>

            {/* Study Abroad – multi-level */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown('study')}
              onMouseLeave={() => { setOpenDropdown(null); setOpenSubMenu(null); }}
            >
              <button
                className={`flex items-center gap-1 px-2 py-2 ${isActive('/study-abroad') ? 'text-accent border-b-2 border-accent' : 'text-sm font-medium text-gray-700 hover:text-primary'} text-sm font-medium`}
                onClick={() => toggleDropdown('study')}
                aria-expanded={openDropdown === 'study'}
                aria-haspopup="true"
              >
                Study Abroad <ChevronDown size={14} />
              </button>
              {openDropdown === 'study' && (
                <ul className="dropdown-menu py-2 mt-0 min-w-[220px]">
                  {Object.entries(studyAbroadMenu).map(([group, items]) => (
                    <li
                      key={group}
                      className="relative group"
                      onMouseEnter={() => setOpenSubMenu(group)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      <div className="flex items-center justify-between px-4 py-2.5 text-base text-gray-800 hover:bg-blue-50 hover:text-primary cursor-pointer">
                        <span className="font-medium text-gray-700 text-sm uppercase tracking-wider">{group}</span>
                        <ChevronDown size={12} className="-rotate-90" />
                      </div>
                      {openSubMenu === group && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg border border-gray-100 rounded-md min-w-[200px] py-1 z-50">
                          {items.map(item => (
                            <li key={item.label}>
                              <Link to={item.path} className="dropdown-item">{item.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  <li className="border-t border-gray-100 mt-1 pt-1">
                    <Link to="/study-abroad" className="dropdown-item font-medium text-primary">View All →</Link>
                  </li>
                </ul>
              )}
            </li>

            {renderSimpleDropdown("Services", "/services", servicesMenu)}
            {renderSimpleDropdown("Universities", "/universities", universitiesMenu)}
            {renderSimpleDropdown("Success Stories", "/success-stories", successMenu)}
            {renderSimpleDropdown("Resources", "/resources", resourcesMenu)}
            {renderSimpleDropdown("About", "/about", aboutMenu)}

            <li>
              <Link to="/contact" className={activeLink('/contact')}>Contact</Link>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-outline text-sm px-4 py-2">Book Free Consultation</Link>
            <Link to="/apply" className="btn-primary text-sm px-4 py-2">Apply Now</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <ul className="space-y-1 mt-4" role="list">
            <li><Link to="/" className="block py-2 text-sm font-medium text-gray-700">Home</Link></li>

            {/* Study Abroad mobile */}
            <li>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                onClick={() => setMobileExpanded(mobileExpanded === 'study' ? null : 'study')}
              >
                Study Abroad <ChevronDown size={14} className={mobileExpanded === 'study' ? 'rotate-180' : ''} />
              </button>
              {mobileExpanded === 'study' && (
                <div className="pl-4 mt-1 space-y-3">
                  {Object.entries(studyAbroadMenu).map(([group, items]) => (
                    <div key={group}>
                      <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-1">{group}</p>
                      {items.map(item => (
                        <Link key={item.label} to={item.path} className="block py-1.5 text-base text-gray-800 hover:text-primary">{item.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {[
              { label: 'Services', items: servicesMenu, key: 'services' },
              { label: 'Universities', items: universitiesMenu, key: 'uni' },
              { label: 'Success Stories', items: successMenu, key: 'success' },
              { label: 'Resources', items: resourcesMenu, key: 'resources' },
              { label: 'About', items: aboutMenu, key: 'about' },
            ].map(({ label, items, key }) => (
              <li key={key}>
                <button
                  className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                >
                  {label} <ChevronDown size={14} className={mobileExpanded === key ? 'rotate-180' : ''} />
                </button>
                {mobileExpanded === key && (
                  <div className="pl-4 mt-1">
                    {items.map(item => (
                      <Link key={item.label} to={item.path} className="block py-1.5 text-base text-gray-800 hover:text-primary">{item.label}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <li><Link to="/contact" className="block py-2 text-sm font-medium text-gray-700">Contact</Link></li>
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <Link to="/contact" className="btn-outline text-center text-sm">Book Free Consultation</Link>
            <Link to="/apply" className="btn-primary text-center text-sm">Apply Now</Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
