import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const SocialFeed = () => {
  // Placeholder Instagram posts
  const instagramPosts = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    image: `https://via.placeholder.com/400x400/a855f7/ffffff?text=Post+${i + 1}`
  }));

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mb-6">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Social Feed
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Follow us on Instagram for the latest updates, tips, and inspiration
            </p>
            <a
              href="https://www.instagram.com/webakoof"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
              data-testid="follow-instagram-btn"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="py-20 bg-white" data-testid="instagram-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                data-testid={`instagram-post-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-cyan-200 flex items-center justify-center">
                  <div className="text-6xl opacity-30">📸</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <span>❤️</span>
                        <span>{Math.floor(Math.random() * 100) + 20}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{Math.floor(Math.random() * 20) + 5}</span>
                      </span>
                    </div>
                  </div>
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
              Stay Connected With Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get daily inspiration, web design tips, and exclusive offers on our social media
            </p>
            <a
              href="https://www.instagram.com/webakoof"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
              data-testid="follow-instagram-cta"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow @webakoof
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialFeed;
