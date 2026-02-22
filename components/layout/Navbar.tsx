'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('testimonials'), href: '#testimonials' },
    { name: t('contact'), href: '#appointment' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl lg:text-2xl xl:text-3xl font-bold gradient-text"
            >
              {t('doctorName')}
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-medical-emerald transition-colors relative group text-sm lg:text-base xl:text-lg"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-emerald group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            {/* Language Switcher */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
                title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="text-xs lg:text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
              </motion.button>
            )}

            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-medical-emerald text-white px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-full hover:bg-medical-glow transition-colors text-sm lg:text-base xl:text-lg"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              {t('callNow')}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass rounded-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-medical-emerald transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile Language Switcher */}
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'ar' : 'en');
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 glass px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>

                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 bg-medical-emerald text-white px-6 py-3 rounded-full hover:bg-medical-glow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {t('callNow')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
