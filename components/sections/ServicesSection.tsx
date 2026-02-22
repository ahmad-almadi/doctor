'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Activity, Stethoscope, Pill, Syringe, Brain, Baby, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: t('generalConsultation'),
      description: t('generalConsultationDesc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: t('cardiology'),
      description: t('cardiologyDesc'),
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Activity,
      title: t('internalMedicine'),
      description: t('internalMedicineDesc'),
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Brain,
      title: t('neurology'),
      description: t('neurologyDesc'),
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Baby,
      title: t('pediatrics'),
      description: t('pediatricsDesc'),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Pill,
      title: t('chronicDisease'),
      description: t('chronicDiseaseDesc'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Syringe,
      title: t('preventiveCare'),
      description: t('preventiveCareDesc'),
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Eye,
      title: t('healthScreenings'),
      description: t('healthScreeningsDesc'),
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/5 to-medical-dark" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-4">
            {t('servicesTitle')} <span className="gradient-text">{t('servicesWord')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-medical-emerald/20">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} p-2 sm:p-3 lg:p-4 mb-3 sm:mb-4 lg:mb-6 relative z-10`}
                >
                  <service.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base xl:text-lg relative z-10 leading-relaxed">{service.description}</p>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16 px-4"
        >
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-medical-emerald text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold hover:bg-medical-glow transition-colors shadow-lg hover:shadow-medical-emerald/50 text-sm sm:text-base lg:text-lg xl:text-xl"
          >
            {t('scheduleConsultation')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
