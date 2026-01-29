import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteInfo } from '../data/siteData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xl px-4 py-2 rounded-lg">
                  <img
                    src={siteInfo.logoPath}
                    alt={siteInfo.name}
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActivePath(link.path)
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={`https://wa.me/${siteInfo.whatsappNumber}?text=Hi! I want to try Webakoof for free`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                data-testid="try-for-free-button"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                  Try For Free
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
              data-testid="mobile-menu"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                      isActivePath(link.path)
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${siteInfo.whatsappNumber}?text=Hi! I want to try Webakoof for free`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold text-center mt-4"
                  data-testid="mobile-try-for-free-button"
                >
                  Try For Free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
