import React from 'react';
import { motion } from 'framer-motion';
import { demoWebsites } from '../data/siteData';

const LivePreview = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Demo Websites
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of websites across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Websites Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" data-testid="demo-websites-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Demo Websites
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoWebsites.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100"
                data-testid={`demo-website-${index}`}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-square bg-gray-50">
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.name}</h3>
                  <a
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-95 transition"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Your Own Website?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Choose a package and get your professional website delivered in 24 hours
            </p>
            <a
              href="/package-plans"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
              data-testid="view-packages-cta"
            >
              View Package Plans
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LivePreview;
