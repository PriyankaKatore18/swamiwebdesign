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
      className={`relative h-full rounded-3xl overflow-hidden backdrop-blur-xl ${
        pkg.popular
          ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-yellow-400/60 shadow-[0_0_40px_rgba(0,0,0,0.9)] scale-[1.03]'
          : 'bg-zinc-900/80 border border-zinc-800 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]'
      } transition-all`}
      data-testid={`package-card-${pkg.name.toLowerCase()}`}
    >
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-[#ffd33d] text-black px-4 py-1 text-xs font-bold rounded-bl-lg">
          POPULAR
        </div>
      )}
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-extrabold text-[#ffd33d]">
            ₹{pkg.price}
          </span>
          <span className="text-zinc-400 ml-2">/-</span>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ffd33d] flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-black" />
              </div>
              <span className="text-zinc-200 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 block w-full text-center py-3 rounded-xl font-semibold transition-all ${
            pkg.popular
              ? 'bg-[#ffd33d] text-black hover:bg-yellow-400 hover:scale-105 shadow-lg shadow-yellow-500/40'
              : 'bg-zinc-800 text-zinc-100 hover:bg-[#ffd33d] hover:text-black'
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
