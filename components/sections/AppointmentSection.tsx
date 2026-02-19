'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function AppointmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'John Doe' },
    { name: 'email', label: 'Email', type: 'email', icon: Mail, placeholder: 'john@example.com' },
    { name: 'phone', label: 'Phone', type: 'tel', icon: Phone, placeholder: '+1 (234) 567-8900' },
    { name: 'date', label: 'Preferred Date', type: 'date', icon: Calendar },
    { name: 'time', label: 'Preferred Time', type: 'time', icon: Clock },
  ];

  return (
    <section id="appointment" ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-blue/10 to-medical-dark" />
        {isMounted && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-medical-emerald rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book an <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards better health
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-medical-emerald/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-medical-glow/10 rounded-full blur-3xl" />

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {inputFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={field.name === 'message' ? 'md:col-span-2' : ''}
                  >
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {field.label}
                    </label>
                    <div className="relative">
                      <field.icon
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                          focusedField === field.name ? 'text-medical-emerald' : 'text-gray-500'
                        }`}
                        size={20}
                      />
                      <motion.input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={field.placeholder}
                        required
                        whileFocus={{ scale: 1.02 }}
                        className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl focus:outline-none transition-all ${
                          focusedField === field.name
                            ? 'border-medical-emerald shadow-lg shadow-medical-emerald/20'
                            : 'border-white/10'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="md:col-span-2"
                >
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className={`absolute left-4 top-4 transition-colors ${
                        focusedField === 'message' ? 'text-medical-emerald' : 'text-gray-500'
                      }`}
                      size={20}
                    />
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your health concerns..."
                      rows={4}
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl focus:outline-none transition-all resize-none ${
                        focusedField === 'message'
                          ? 'border-medical-emerald shadow-lg shadow-medical-emerald/20'
                          : 'border-white/10'
                      }`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-medical-emerald to-medical-glow text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-medical-emerald/50 transition-all group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Book Appointment
              </motion.button>

              {/* Info Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center text-gray-400 text-sm mt-6"
              >
                We&apos;ll confirm your appointment within 24 hours
              </motion.p>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { icon: Phone, title: 'Call Us', value: '+1 (234) 567-8900', href: 'tel:+1234567890' },
              { icon: Mail, title: 'Email Us', value: 'info@drsmith.com', href: 'mailto:info@drsmith.com' },
              { icon: Clock, title: 'Working Hours', value: 'Mon-Fri: 9AM-6PM', href: '#' },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-medical-emerald to-medical-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                <div className="font-semibold text-white">{item.value}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
