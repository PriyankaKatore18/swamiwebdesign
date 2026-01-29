import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
      data-testid={`blog-card-${index}`}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-cyan-100">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">📝</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-cyan-500 transition"
          data-testid={`blog-read-more-${index}`}
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
