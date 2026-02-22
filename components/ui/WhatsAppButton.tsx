'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-shadow group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Tooltip - Hidden on mobile */}
      <div className="hidden md:block absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {t('chatOnWhatsApp')}
        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
      </div>
    </motion.a>
  );
}
