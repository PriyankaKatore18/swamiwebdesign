import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutContent } from '../data/siteData';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';
import WhyChooseSection from '../components/WhyChooseSection';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb="Home / About Swami Web"
        heading="About Swami Web"
        subtitle="Your trusted partner for fast, professional web design."
        videoSrc=""
        height="short"
        align="center"
      />

      {/* Founder Section */}
      <SectionEffect variant="page" className="py-20" data-testid="founder-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#ffd33d]/30 rounded-2xl blur-2xl opacity-70"></div>
              <div className="relative bg-zinc-900/90 rounded-2xl p-6 min-h-[22rem] flex items-center justify-center overflow-hidden border border-yellow-500/30 backdrop-blur-xl">
                <div className="w-48 h-48 rounded-2xl bg-zinc-800/90 border border-yellow-500/30 flex items-center justify-center">
                  <img src="/assets/misc/icon-10.svg" alt="Founder" className="w-24 h-24 opacity-80 text-yellow-300" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                {aboutContent.founder.title}
              </h2>
              <h3 className="text-2xl font-semibold text-[#ffd33d] mb-6">
                {aboutContent.founder.name}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {aboutContent.founder.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </SectionEffect>

      {/* Why Choose Swami Web - Design Crew style */}
      <SectionEffect variant="bento" className="py-20" data-testid="why-choose-section">
        <WhyChooseSection />
      </SectionEffect>

      {/* Our Mission - Design Crew style heading + content */}
      <SectionEffect variant="page" className="py-20" data-testid="our-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Our <span className="text-[#ffd33d]">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-4xl"
          >
            {aboutContent.mission}
          </motion.p>
        </div>
      </SectionEffect>

      {/* What We Believe - Design Crew style */}
      <SectionEffect variant="methodology" className="py-20" data-testid="what-we-believe-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight"
          >
            What We <span className="text-[#ffd33d]">Believe</span>
          </motion.h2>
          <ul className="space-y-6 max-w-3xl">
            {(aboutContent.whatWeBelieve || []).map((belief, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 group"
              >
                <span className="flex-shrink-0 mt-1 text-[#ffd33d]">
                  <CheckCircle2 className="w-6 h-6" />
                </span>
                <span className="text-zinc-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                  {belief}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionEffect>
    </div>
  );
};

export default About;
