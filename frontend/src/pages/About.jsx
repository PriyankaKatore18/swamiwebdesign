import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { aboutContent, teamMembers, siteInfo } from '../data/siteData';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteInfo.aboutBreadcrumbBgPath})` }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              About Webakoof
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner for fast, professional web design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white" data-testid="founder-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-12 h-96 flex items-center justify-center">
                <div className="text-8xl opacity-40">👩‍💼</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {aboutContent.founder.title}
              </h2>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6">
                {aboutContent.founder.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutContent.founder.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" data-testid="vision-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
              data-testid="vision-card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutContent.vision}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
              data-testid="mission-card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                {aboutContent.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Team Webakoof
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals behind your success
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
                data-testid={`team-member-${index}`}
              >
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-75 transition"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-full overflow-hidden flex items-center justify-center text-4xl font-bold text-purple-600">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      member.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
