import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import WhyChooseVisual from './WhyChooseVisual';
import { aboutContent } from '../data/siteData';
import { siteInfo } from '../data/siteData';

const WhyChooseSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const items = aboutContent.whyChoose || [];

  return (
    <section className="why-choose-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Animated visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <WhyChooseVisual />
          </motion.div>

          {/* Right: Heading + Accordion */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-xs uppercase tracking-[0.35em] text-[#ffd33d]"
            >
              SEO-Friendly Website Development
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Why Choose <span className="text-[#ffd33d]">{siteInfo.name}</span> for Website Development?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="mt-4 mb-10 max-w-2xl text-base leading-relaxed text-zinc-400"
            >
              We combine SEO, speed, and conversion-focused design to build websites that help businesses rank for website development and related local service searches.
            </motion.p>

            <div className="space-y-0 border-t border-zinc-700">
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-zinc-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="why-choose-section__trigger w-full flex items-center justify-between py-5 text-left gap-4 group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-bold text-white group-hover:text-[#ffd33d] transition-colors">
                        {index + 1}. {item.title}
                      </span>
                      <span className="flex-shrink-0 text-zinc-400 group-hover:text-[#ffd33d] transition-transform duration-200">
                        {isOpen ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-zinc-400 text-base leading-relaxed pb-5 pr-8">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
