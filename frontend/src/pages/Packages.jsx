import React from 'react';
import { motion } from 'framer-motion';
import { packages } from '../data/siteData';
import PackageCard from '../components/PackageCard';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';

const Packages = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb="Home / Package Plans"
        heading="Website Package Plans"
        subtitle="Select a package that matches your stage of growth—each option includes everything you need to launch a professional website."
        videoSrc=""
        height="short"
        align="center"
      />

      {/* Packages Section */}
      <SectionEffect variant="page" className="py-20" data-testid="packages-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.name} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </SectionEffect>

      {/* Features Comparison */}
      <SectionEffect variant="bento" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              All Packages Include
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚡', title: '24 Hour Delivery', desc: 'Lightning-fast turnaround' },
                { icon: '📱', title: 'Mobile Responsive', desc: 'Works on all devices' },
                { icon: '🔒', title: 'Free SSL', desc: 'Secure & trusted' },
                { icon: '🌐', title: 'Free Domain', desc: '.in or .com included' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/60 text-center border border-zinc-800"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionEffect>
    </div>
  );
};

export default Packages;
