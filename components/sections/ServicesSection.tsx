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
    <section id="services" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/5 to-medical-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('servicesTitle')} <span className="gradient-text">{t('servicesWord')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              <div className="glass p-6 rounded-2xl h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-medical-emerald/20">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-4 relative z-10`}
                >
                  <service.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{service.description}</p>

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
          className="text-center mt-12"
        >
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-medical-emerald text-white px-8 py-4 rounded-full font-semibold hover:bg-medical-glow transition-colors shadow-lg hover:shadow-medical-emerald/50"
          >
            {t('scheduleConsultation')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
