import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { siteInfo } from '../data/siteData';

const PackageCard = ({ pkg, index }) => {
  const whatsappMessage = `Hi! I'm interested in the ${pkg.name} package (₹${pkg.price}). Can you provide more details?`;
  const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`relative bg-white rounded-2xl overflow-hidden ${
        pkg.popular
          ? 'ring-2 ring-purple-500 shadow-2xl scale-105'
          : 'shadow-lg hover:shadow-xl'
      } transition-all border border-gray-100`}
      data-testid={`package-card-${pkg.name.toLowerCase()}`}
    >
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
          POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            ₹{pkg.price}
          </span>
          <span className="text-gray-500 ml-2">/-</span>
        </div>
        <ul className="space-y-4 mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
            pkg.popular
              ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:scale-105'
              : 'bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:text-white'
          }`}
          data-testid={`package-buy-now-${pkg.name.toLowerCase()}`}
        >
          Buy Now
        </a>
      </div>
    </motion.div>
  );
};

export default PackageCard;
