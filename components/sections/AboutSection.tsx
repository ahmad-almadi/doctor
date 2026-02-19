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
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/10 to-medical-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('aboutTitle')} <span className="gradient-text">{t('doctorName')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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
              className="relative aspect-square rounded-3xl overflow-hidden glass p-4"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
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
          >
            <h3 className="text-3xl font-bold mb-6">{t('excellenceTitle')}</h3>
            <p className="text-gray-400 mb-6">
              {t('aboutText1')}
            </p>
            <p className="text-gray-400 mb-8">
              {t('aboutText2')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-xl"
                >
                  <stat.icon className={`${stat.color} mb-2`} size={24} />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
        >
          <h3 className="text-3xl font-bold text-center mb-12">{t('professionalJourney')}</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-medical-emerald via-medical-glow to-transparent" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? (language === 'ar' ? 'text-left pl-8' : 'text-right pr-8') : (language === 'ar' ? 'text-right pr-8' : 'text-left pl-8')}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-xl inline-block"
                  >
                    <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                    <div className="text-xl font-semibold mb-1">{language === 'ar' ? item.titleAr : item.title}</div>
                    <div className="text-gray-400">{language === 'ar' ? item.descAr : item.desc}</div>
                  </motion.div>
                </div>
                
                {/* Center Dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-4 h-4 bg-medical-emerald rounded-full border-4 border-medical-dark shadow-lg shadow-medical-emerald/50"
                  />
                </div>
                
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
