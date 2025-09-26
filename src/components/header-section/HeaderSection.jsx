import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo from "./logo.png";

const HeaderSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className={`h-20 md:h-25 sm:h-auto pt-2 sm:pt-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-lg shadow-2xl' 
          : 'bg-black/75 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 ">
            
            {/* Logo */}
            <div 
  onClick={(e) => {
    e.preventDefault();
    console.log('Desktop logo clicked'); // Remove after testing
    window.location.href = '/';
  }}
  className="text-red-600 font-bold text-lg sm:text-xl lg:text-2xl flex-shrink-0 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-red-400"
>
  <img  className="w-24 sm:w-32 md:w-40 lg:w-38 h-auto"  src={logo} alt="Logo" />

</div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
              <div className="flex space-x-4 xl:space-x-6">
                {["Home", "Genre", "Country", "Movies", "Series", "Animation"].map((item) => (
                  <a 
                    key={item}
                    href="/" 
                    className="text-white hover:text-red-400 relative py-2 px-1 transition-all duration-300 ease-out group hover:scale-105 text-sm xl:text-base"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"></span>
                    <span className="absolute inset-0 -m-2 rounded-lg bg-red-500/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Desktop Search + Login - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <div className="relative w-48 xl:w-64 group">
                <div 
                  onClick={() => navigate("/search")}
                  className="bg-white h-9 xl:h-10 rounded-full px-3 xl:px-4 py-2 pr-10 w-full text-black text-sm cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 flex items-center"
                >
                  Search movies....
                </div>
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:scale-110" />
              </div>
              
              <div className="text-white hover:text-red-500 cursor-pointer transition-all duration-300 ease-out hover:scale-105 relative group text-sm xl:text-base">
                <span  onClick={() => navigate("/signup")} className="relative z-10">Login/Signup</span>
                <span className="absolute inset-0 -m-2 rounded-lg bg-red-500/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
              </div>
            </div>

            {/* Mobile Hamburger - Visible on mobile/tablet only */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 hover:text-red-500 transition-all duration-300 ease-out hover:scale-110 hover:bg-red-500/10 rounded-lg relative group"
            >
              <div className="relative z-10">
                {isMobileMenuOpen ? 
                  <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 rotate-0 group-hover:rotate-90" /> : 
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" />
                }
              </div>
              <span className="absolute inset-0 rounded-lg bg-red-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-14 sm:h-16 lg:h-20"></div>

      {/* Mobile Menu Portal */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          />

          {/* Mobile Drawer */}
          <div 
            className="lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out"
            style={{
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
            }}
          >
            {/* Full screen background */}
            <div className="h-full w-full bg-black/60 backdrop-blur-lg">
              {/* Content container - responsive positioning */}
              <div className="flex items-center justify-center h-full px-4 sm:px-6">
                <div className="w-full max-w-sm mx-auto flex flex-col space-y-4 sm:space-y-6 relative">
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-red-500 p-2 sm:p-3 transition-all duration-300 ease-out hover:scale-110 hover:bg-red-500/20 rounded-lg group active:scale-95"
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 group-hover:rotate-90" />
                    <span className="absolute inset-0 rounded-lg bg-red-500/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
                  </button>
                  
                  {/* Logo */}
                  <div  onClick={(e) => {
    e.preventDefault();
    console.log('Desktop logo clicked'); // Remove after testing
    window.location.href = '/';
  }} className="flex items-center justify-center mb-8 sm:mb-4 transition-all duration-300 ease-out cursor-pointer hover:scale-105 cursor-pointer">
                  <img  className="w-24 sm:w-32 md:w-40 lg:w-38 h-auto"  src={logo} alt="Logo" />
                  </div>
                  
<div className="relative w-full group">
  <input
    type="text"
    placeholder="Search movies..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onFocus={() => {
      navigate("/search");
      setIsMobileMenuOpen(false);
    }}
    className="bg-white rounded-full px-4 py-2.5 sm:py-3 pr-10 w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-out focus:scale-105 focus:shadow-lg focus:shadow-red-500/30 border border-gray-300 hover:border-red-300 cursor-pointer"
  />
  <Search 
    onClick={() => {
      navigate("/search");
      setIsMobileMenuOpen(false);
    }}
    className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110 cursor-pointer hover:text-red-500 hover:scale-125" 
  />
</div>

                  {/* Navigation Links - responsive spacing */}
                  <nav className="flex flex-col space-y-1 mt-2 sm:mt-4">
                    {["Home", "Genre", "Country", "Movies", "Series", "Animation"].map((item, index) => (
                      <a 
                        key={item}
                        href="#" 
                        className="text-white hover:text-red-500 py-2.5 sm:py-3 border-b border-gray-700/30 transition-all duration-300 ease-out relative group hover:pl-4 hover:bg-red-500/10 rounded-lg px-3 text-center active:bg-red-500/20 active:scale-98"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10 text-sm sm:text-base font-medium transition-all duration-300 group-hover:font-semibold">{item}</span>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150 shadow-lg shadow-red-500/50"></span>
                        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-400 to-red-600 opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-r-full"></span>
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/5 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                      </a>
                    ))}
                  </nav>

                  {/* Login section - responsive spacing */}
                  <div className="text-white hover:text-red-500 cursor-pointer transition-all duration-300 ease-out py-3 sm:py-4 text-center border-t border-gray-700/30 pt-4 hover:bg-red-500/10 rounded-lg relative group mt-2 sm:mt-4 active:bg-red-500/20 active:scale-98">
                    <span  onClick={() => navigate("/signup")} className="relative z-10 text-base sm:text-lg font-semibold transition-all duration-300 group-hover:scale-105">Login/Signup</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 transition-all duration-300 group-hover:opacity-100 blur-sm"></span>
                    <span className="absolute inset-0 rounded-lg border border-red-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}    
      
    </>
  );




  
};

export default HeaderSection;










