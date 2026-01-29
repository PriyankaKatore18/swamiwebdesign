import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Paintbrush,
  FileCode,
  Layout,
  ShoppingBag,
  Terminal,
  Star,
  Send
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { siteInfo, techStack, testimonials, blogPosts } from '../data/siteData';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const iconMap = {
  Code2,
  Paintbrush,
  FileCode,
  Layout,
  ShoppingBag,
  Terminal
};

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/newsletter`, { email });
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error('This email is already subscribed');
      } else {
        toast.error('Failed to subscribe. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              data-testid="hero-content"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Fast Websites{' '}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Delivered in 24 Hours
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get a modern, responsive website with free domain, SSL, and hosting—all delivered in just 24 hours. 
                Professional design, lightning-fast turnaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/package-plans"
                  className="group relative inline-flex items-center justify-center"
                  data-testid="hero-view-packages-btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition"></div>
                  <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:scale-105 transition-transform">
                    <span>View Package Plans</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
                <a
                  href={`https://wa.me/${siteInfo.whatsappNumber}?text=Hi! I want to know more about Webakoof`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all"
                  data-testid="hero-whatsapp-btn"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, duration: 0.8, delay: 0.2 }}
              className="relative"
              data-testid="hero-image"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm bg-white/90 overflow-hidden">
                <img
                  src={siteInfo.heroImagePath}
                  alt={siteInfo.name}
                  className="w-full h-auto rounded-xl animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About/Intro Section */}
      <section className="py-20 bg-white" data-testid="about-intro-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-6 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={siteInfo.aboutIntroImagePath}
                  alt={siteInfo.name}
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designing Impactful Websites for Your Brand
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Webakoof, we are a team of dedicated web enthusiasts focused on building websites that are sleek, 
                functional, and impactful. We assist everyone—from new startups to established businesses—in creating 
                a modern, user-friendly, and SEO-optimized online presence that turns visitors into customers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                What sets us apart? Speed and quality. We deliver professionally designed websites in just 24 hours, 
                complete with free domain registration, SSL certificate, and hosting—all at an unbeatable price.
              </p>
              <Link
                to="/about-webakoof"
                className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-cyan-500 transition"
                data-testid="discover-more-btn"
              >
                <span>Discover More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" data-testid="tech-stack-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack for Design
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use the latest technologies to build fast, secure, and scalable websites
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => {
              const Icon = iconMap[tech.icon];
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all group"
                  data-testid={`tech-card-${tech.name.toLowerCase()}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-cyan-100 px-6 py-3 rounded-full mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-gray-900">EXCELLENT</span>
              <span className="text-gray-600">Based on 168 reviews</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from businesses we've helped succeed
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50" data-testid="latest-blog-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and guides to help you succeed online
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-500" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Join To Our Newsletters
            </h2>
            <p className="text-purple-100 mb-8 text-lg">
              Get the latest updates, tips, and exclusive offers delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                data-testid="newsletter-email-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition disabled:opacity-50 flex items-center justify-center space-x-2"
                data-testid="newsletter-submit-btn"
              >
                <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
