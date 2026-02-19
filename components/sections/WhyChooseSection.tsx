'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Award, Users, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Expert Care',
    description: 'Board-certified physicians with years of specialized experience',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency support and consultation services',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in patient care and medical innovation',
  },
  {
    icon: Users,
    title: 'Patient-Centered',
    description: 'Personalized treatment plans tailored to your unique needs',
  },
  {
    icon: Heart,
    title: 'Compassionate',
    description: 'Caring approach that treats you as a person, not just a patient',
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'State-of-the-art equipment and cutting-edge medical techniques',
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-choose" ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/10 to-medical-dark" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Dr. John Smith</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the difference of premium medical care with a personal touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-2xl h-full relative overflow-hidden">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-medical-emerald to-medical-glow p-4 mb-6 relative">
                    <feature.icon className="w-full h-full text-white" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-medical-emerald rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-400 relative z-10">{feature.description}</p>

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
          className="mt-16 glass p-8 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '10K+', label: 'Happy Patients' },
              { value: '50+', label: 'Medical Awards' },
              { value: '98%', label: 'Success Rate' },
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
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
