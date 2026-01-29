import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, rating, text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
      data-testid={`testimonial-card-${index}`}
    >
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{text}</p>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">Verified Customer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
