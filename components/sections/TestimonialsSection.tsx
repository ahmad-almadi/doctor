'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonialsData = {
  en: [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'Dr. Smith provided exceptional care during my treatment. His expertise and compassionate approach made all the difference in my recovery.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'Outstanding medical professional! The attention to detail and personalized care plan exceeded my expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'I highly recommend Dr. Smith. His thorough approach and clear communication helped me understand my condition better.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'Professional, knowledgeable, and caring. Dr. Smith takes time to listen and provides comprehensive treatment plans.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      text: 'The best doctor I have ever had. His dedication to patient care and medical excellence is truly remarkable.',
      rating: 5,
    },
  ],
  ar: [
    {
      name: 'سارة جونسون',
      role: 'مريضة',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'قدم د. سميث رعاية استثنائية خلال علاجي. خبرته ونهجه الرحيم أحدثا فرقًا كبيرًا في تعافيي.',
      rating: 5,
    },
    {
      name: 'مايكل تشين',
      role: 'مريض',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'طبيب محترف متميز! الاهتمام بالتفاصيل وخطة الرعاية الشخصية تجاوزت توقعاتي.',
      rating: 5,
    },
    {
      name: 'إميلي رودريغيز',
      role: 'مريضة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'أوصي بشدة بالدكتور سميث. نهجه الشامل وتواصله الواضح ساعداني على فهم حالتي بشكل أفضل.',
      rating: 5,
    },
    {
      name: 'ديفيد طومسون',
      role: 'مريض',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'محترف وذو معرفة ورعاية. يأخذ د. سميث الوقت للاستماع ويقدم خطط علاج شاملة.',
      rating: 5,
    },
    {
      name: 'ليزا أندرسون',
      role: 'مريضة',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      text: 'أفضل طبيب قابلته على الإطلاق. تفانيه في رعاية المرضى والتميز الطبي رائع حقًا.',
      rating: 5,
    },
  ],
};

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t, language } = useLanguage();

  const testimonials = testimonialsData[language];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [language, testimonials.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" ref={ref} className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/5 to-medical-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6">
            {t('testimonialsTitle')} <span className="gradient-text">{t('testimonialsWord')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {t('testimonialsSubtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="glass p-8 md:p-12 rounded-3xl relative">
                  {/* Quote Icon */}
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-medical-emerald/20" />

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-medical-emerald text-medical-emerald" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-lg md:text-xl text-center mb-8 leading-relaxed">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-medical-emerald"
                    />
                    <div>
                      <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-gray-400 text-sm">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-medical-emerald/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-medical-emerald/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-medical-emerald w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
