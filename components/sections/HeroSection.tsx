'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

const MedicalScene = dynamic(() => import('@/components/3d/MedicalScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-medical-blue/20 to-transparent" />
});

export default function HeroSection() {
  const { t, dir } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MedicalScene />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-medical-dark/60 via-medical-dark/80 to-medical-dark z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-24 sm:pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="glass px-4 sm:px-6 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-medical-emerald rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-300">{t('availableForConsultation')}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 px-2"
          >
            <span className="block text-white">{t('doctorName')}</span>
            <span className="block gradient-text mt-1 sm:mt-2 pb-2 sm:pb-3 lg:pb-4">{t('heroTitle')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-4"
          >
            {t('heroSubtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 px-4"
          >
            {t('heroDescription')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-4"
          >
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group bg-medical-emerald text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold flex items-center justify-center gap-2 lg:gap-3 hover:bg-medical-glow transition-all shadow-lg hover:shadow-medical-emerald/50 text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              {t('bookAppointment')}
              <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass glass-hover px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-white text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              {t('viewServices')}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto px-4"
          >
            {[
              { number: '15+', label: t('yearsExperience') },
              { number: '10K+', label: t('happyPatients') },
              { number: '98%', label: t('successRate') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold gradient-text mb-1 sm:mb-2 lg:mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-medical-emerald rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-medical-emerald rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
