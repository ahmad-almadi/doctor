'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const timeline = [
  { year: '2008', title: 'Medical Degree', titleAr: 'شهادة الطب', desc: 'Harvard Medical School', descAr: 'كلية الطب بجامعة هارفارد' },
  { year: '2012', title: 'Residency', titleAr: 'الإقامة الطبية', desc: 'Johns Hopkins Hospital', descAr: 'مستشفى جونز هوبكنز' },
  { year: '2015', title: 'Board Certified', titleAr: 'معتمد من المجلس', desc: 'Internal Medicine', descAr: 'الطب الباطني' },
  { year: '2018', title: 'Private Practice', titleAr: 'عيادة خاصة', desc: 'Founded Premium Clinic', descAr: 'تأسيس عيادة متميزة' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  const stats = [
    { icon: Award, value: '15+', label: t('experience'), color: 'text-blue-400' },
    { icon: Users, value: '10,000+', label: t('patientsTreated'), color: 'text-emerald-400' },
    { icon: Clock, value: '24/7', label: t('available'), color: 'text-purple-400' },
    { icon: Heart, value: '98%', label: t('successRate'), color: 'text-red-400' },
  ];

  return (
    <section id="about" ref={ref} className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/10 to-medical-dark" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-4">
            {t('aboutTitle')} <span className="gradient-text">{t('doctorName')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Image with 3D Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden glass p-3 sm:p-4"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop"
                  alt={t('doctorName')}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 to-transparent" />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-medical-emerald/5 rounded-2xl blur-xl" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="px-4 lg:px-0"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">{t('excellenceTitle')}</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-gray-400 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              {t('aboutText2')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl"
                >
                  <stat.icon className={`${stat.color} mb-2 lg:mb-3 w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8`} />
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-4"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('professionalJourney')}</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-medical-emerald via-medical-glow to-transparent" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`flex flex-col md:flex-row items-center mb-8 sm:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? (language === 'ar' ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8') : (language === 'ar' ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8')}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-4 sm:p-6 rounded-xl w-full"
                  >
                    <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">{item.year}</div>
                    <div className="text-lg sm:text-xl font-semibold mb-1">{language === 'ar' ? item.titleAr : item.title}</div>
                    <div className="text-gray-400 text-sm sm:text-base">{language === 'ar' ? item.descAr : item.desc}</div>
                  </motion.div>
                </div>
                
                {/* Center Dot - Hidden on mobile */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-4 h-4 bg-medical-emerald rounded-full border-4 border-medical-dark shadow-lg shadow-medical-emerald/50"
                  />
                </div>
                
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
