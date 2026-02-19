'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    image: '👩‍💼',
    rating: 5,
    text: 'Dr. Madi is exceptional! His thorough approach and genuine care made all the difference in my treatment. I finally found a doctor who truly listens.',
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    image: '👨‍💻',
    rating: 5,
    text: 'The level of professionalism and expertise is outstanding. Dr. Madi explained everything clearly and made me feel comfortable throughout my treatment.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient',
    image: '👩‍🎨',
    rating: 5,
    text: 'Best medical experience I\'ve ever had. The clinic is modern, the staff is friendly, and Dr. Madi\'s care is truly world-class.',
  },
  {
    name: 'David Thompson',
    role: 'Patient',
    image: '👨‍🔬',
    rating: 5,
    text: 'Dr. Madi saved my life with his quick diagnosis and expert treatment. I\'m forever grateful for his dedication and skill.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Patient',
    image: '👩‍🏫',
    rating: 5,
    text: 'Compassionate, knowledgeable, and always available. Dr. Madi goes above and beyond for his patients. Highly recommended!',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
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

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 relative overflow-hidden">
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
            Patient <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our patients have to say about their experience
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
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
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-8 left-8 text-medical-emerald/20"
                  >
                    <Quote size={60} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="fill-yellow-400 text-yellow-400" size={24} />
                        </motion.div>
                      ))}
                    </div>

                    {/* Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-gray-300 text-center mb-8 italic"
                    >
                      &ldquo;{testimonials[currentIndex].text}&rdquo;
                    </motion.p>

                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-emerald to-medical-glow flex items-center justify-center text-3xl">
                        {testimonials[currentIndex].image}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                        <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                      </div>
                    </motion.div>
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
              <ChevronLeft className="text-medical-emerald" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-medical-emerald'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-medical-emerald/20 transition-colors"
            >
              <ChevronRight className="text-medical-emerald" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
