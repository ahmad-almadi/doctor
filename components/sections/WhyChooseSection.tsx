'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Award, Users, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('expertCare'),
      description: t('expertCareDesc'),
    },
    {
      icon: Clock,
      title: t('availability'),
      description: t('availabilityDesc'),
    },
    {
      icon: Award,
      title: t('awardWinning'),
      description: t('awardWinningDesc'),
    },
    {
      icon: Users,
      title: t('patientCentered'),
      description: t('patientCenteredDesc'),
    },
    {
      icon: Heart,
      title: t('compassionate'),
      description: t('compassionateDesc'),
    },
    {
      icon: Zap,
      title: t('modernTechnology'),
      description: t('modernTechnologyDesc'),
    },
  ];

  return (
    <section id="why-choose" ref={ref} className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/10 to-medical-dark" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-4">
            {t('whyChooseTitle')} <span className="gradient-text">{t('doctorName')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4">
            {t('whyChooseSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="glass p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl lg:rounded-3xl h-full relative overflow-hidden">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl lg:rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.1), transparent)',
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-2xl bg-gradient-to-br from-medical-emerald to-medical-glow p-4 lg:p-5 mb-6 lg:mb-8 relative">
                    <feature.icon className="w-full h-full text-white" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-medical-emerald rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl relative z-10 leading-relaxed">{feature.description}</p>

                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-medical-emerald rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '15+', label: t('yearsExperience') },
              { value: '10K+', label: t('happyPatients') },
              { value: '50+', label: 'Medical Awards' },
              { value: '98%', label: t('successRate') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text mb-2 lg:mb-3"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
