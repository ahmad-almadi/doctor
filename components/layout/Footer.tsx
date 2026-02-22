'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative bg-medical-dark border-t border-white/10 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 opacity-20">
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-medical-emerald rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">{t('doctorName')}</h3>
            <p className="text-gray-400 text-sm">
              {t('footerDescription')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-medical-emerald transition-colors text-sm">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-medical-emerald transition-colors text-sm">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-medical-emerald transition-colors text-sm">
                  {t('services')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-medical-emerald transition-colors text-sm">
                  {t('testimonials')}
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-gray-400 hover:text-medical-emerald transition-colors text-sm">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('servicesFooter')}</h3>
            <ul className="space-y-2">
              {[t('generalConsultationFooter'), t('cardiologyFooter'), t('pediatricsFooter'), t('surgeryFooter'), t('emergencyCareFooter')].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('contactFooter')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-medical-emerald" />
                +1 (234) 567-8900
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-medical-emerald" />
                info@drsmith.com
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-medical-emerald mt-1" />
                123 Medical Center, Health City, HC 12345
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-medical-emerald/20 transition-colors group"
              aria-label={social.label}
            >
              <social.icon size={20} className="text-gray-400 group-hover:text-medical-emerald transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm border-t border-white/10 pt-8"
        >
          <p>&copy; {new Date().getFullYear()} {t('doctorName')}. {t('copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
}
