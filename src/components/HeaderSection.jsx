import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeaderSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

return (
    <>
      <header className="bg-black bg-opacity-75 py-4 relative backdrop-blur-md transition-all duration-500 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div onClick={()=> navigate("/")} className="text-red-600 font-bold text-xl flex-shrink-0 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-red-400">
           MovieSphere
          </div>

          {/* Center: Navigation (desktop only) */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <div className="flex space-x-6">
              {["Home", "Genre", "Country", "Movies", "Series", "Animation"].map((item) => (
                <a 
                  key={item}
                  href="/" 
                  className="text-white hover:text-white relative py-1 transition-all duration-300 ease-out group hover:scale-105"
                >
                  <span className="relative z-10">{item}</span>
                  {/* Hover dot */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"></span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 -m-2 rounded-lg bg-red-500/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Right: Search + Login (desktop only) */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <div className="relative w-64 group">
              <div 
              onClick={()=> navigate("/search")}
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white h-10 rounded-full px-4 py-2 pr-10 w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-out focus:scale-105 focus:shadow-lg focus:shadow-red-500/20"
              >Search movies....
                </div>
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
            </div>
            
            {/* Login */}
            <div className="text-white hover:text-red-500 cursor-pointer transition-all duration-300 ease-out hover:scale-105 relative group">
              <span className="relative z-10">Login/Signup</span>
              <span className="absolute inset-0 -m-2 rounded-lg bg-red-500/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
            </div>
          </div>

          {/* Hamburger (mobile & tablet only) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 hover:text-red-500 transition-all duration-300 ease-out hover:scale-110 hover:bg-red-500/10 rounded-lg relative group"
          >
            <div className="relative z-10">
              {isMobileMenuOpen ? 
                <X className="h-6 w-6 transition-transform duration-300 rotate-0 group-hover:rotate-90" /> : 
                <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              }
            </div>
            <span className="absolute inset-0 rounded-lg bg-red-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Portal - Outside header for maximum z-index */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-20 transition-opacity duration-300"
            style={{ 
              zIndex: 2147483646,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Drawer - Full Width with Centered Content */}
          <div 
            className="lg:hidden fixed top-0 left-0 h-full w-full transition-all duration-500 ease-in-out"
            style={{ 
              zIndex: 2147483647,
              position: 'fixed',
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
              willChange: 'transform'
            }}
          >
            {/* Full width background with very transparent background */}
            <div className="h-full w-full bg-black bg-opacity-50 backdrop-blur-md transition-all duration-500 ease-in-out shadow-2xl">
              {/* Centered content container */}
              <div className="flex items-center justify-center h-full">
                <div className="w-full max-w-md mx-auto px-6 flex flex-col space-y-6 relative">
                  
                  {/* Close button at top right - Restored */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute -top-12 right-0 text-white hover:text-red-500 p-3 transition-all duration-300 ease-out hover:scale-110 hover:bg-red-500/20 rounded-lg group active:scale-95"
                    style={{ zIndex: 2147483647 }}
                  >
                    <X className="h-6 w-6 transition-all duration-300 group-hover:rotate-90" />
                    <span className="absolute inset-0 rounded-lg bg-red-500/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
                    <span className="absolute inset-0 rounded-lg border border-red-500/30 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                  </button>
                  
                  {/* Drawer Header: Logo with laptop-style hover effects */}
                  <div className="text-white font-bold text-2xl text-center mb-4 transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:text-red-400 animate-in slide-in-from-left-4 fade-in">
                   MovieSphere
                  </div>

                  {/* Search inside drawer - Reduced size */}
                  <div className="relative w-full max-w-xs mx-auto group transition-all duration-300 delay-100 animate-in slide-in-from-left-3 fade-in">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white rounded-full px-4 py-2.5 pr-10 w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-out focus:scale-105 focus:shadow-lg focus:shadow-red-500/30 border border-gray-300 hover:border-red-300"
                    />
                    <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
                  </div>

                  {/* Navigation Links - Better spacing */}
                  <nav className="flex flex-col space-y-1 mt-4">
                    {["Home", "Genre", "Country", "Movies", "Series", "Animation"].map((item, index) => (
                      <a 
                        key={item}
                        href="#" 
                        className={`text-white hover:text-red-500 py-2.5 border-b border-gray-700/30 transition-all duration-300 ease-out relative group hover:pl-4 hover:bg-red-500/10 rounded-lg px-3 animate-in slide-in-from-left-2 fade-in text-center`}
                        style={{ animationDelay: `${(index + 2) * 100}ms` }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10 text-base font-medium transition-all duration-300 group-hover:font-semibold">{item}</span>
                        {/* Enhanced red dot indicator */}
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150 shadow-lg shadow-red-500/50"></span>
                        {/* Enhanced sliding effect */}
                        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-400 to-red-600 opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-r-full shadow-lg shadow-red-500/30"></span>
                        {/* Subtle background glow */}
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/5 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                      </a>
                    ))}
                  </nav>

                  {/* Drawer Footer: Login - Better positioning and spacing */}
                  <div className="text-white hover:text-red-500 cursor-pointer transition-all duration-300 ease-out py-3 text-center border-t border-gray-700/30 pt-4 hover:bg-red-500/10 rounded-lg relative group animate-in slide-in-from-bottom-3 fade-in delay-700 mt-4">
                    <span className="relative z-10 text-lg font-semibold transition-all duration-300 group-hover:scale-105">Login/Signup</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
                    <span className="absolute inset-0 rounded-lg border border-red-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Custom CSS for guaranteed z-index priority and enhanced mobile touches */}
      <style jsx>{`
        .mobile-drawer-portal {
          position: fixed !important;
          z-index: 2147483647 !important;
          top: 0 !important;
          left: 0 !important;
          height: 100vh !important;
          width: 100% !important;
        }
        
        .mobile-overlay-portal {
          position: fixed !important;
          z-index: 2147483646 !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
        }

        /* Enhanced mobile touch interactions */
        @media (max-width: 1023px) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(239, 68, 68, 0.1);
          }
          
          /* Mobile hover states using :active for better touch responsiveness */
          .mobile-nav-item:active {
            background-color: rgba(239, 68, 68, 0.1) !important;
            color: rgb(248, 113, 113) !important;
            transform: scale(0.98) !important;
          }
          
          .mobile-nav-item:active .nav-dot {
            opacity: 1 !important;
            transform: scale(1.5) !important;
          }
          
          .mobile-nav-item:active .nav-slide {
            opacity: 1 !important;
          }
        }

        /* Ensure desktop navigation is completely hidden on mobile */
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
        }

        /* Smooth animations */
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInFromLeft 0.3s ease-out;
        }
        
        .animate-slide-in-bottom {
          animation: slideInFromBottom 0.3s ease-out;
        }
      `}</style>
    </>
  );




};

export default HeaderSection;