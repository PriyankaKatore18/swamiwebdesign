import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Gauge, MapPinned, Search, ShieldCheck, Smartphone } from 'lucide-react';
import { aboutContent } from '../data/siteData';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';
import WhyChooseSection from '../components/WhyChooseSection';

const seoPoints = [
  {
    icon: Search,
    title: 'Website development keywords',
    description: 'We naturally include search phrases like website development, web design, and SEO-friendly websites in the right places.',
  },
  {
    icon: Gauge,
    title: 'Fast loading performance',
    description: 'Lightweight code and optimised assets help improve speed, Core Web Vitals, and overall user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first responsiveness',
    description: 'Every page is designed to look sharp and function smoothly on phones, tablets, and desktop screens.',
  },
  {
    icon: Code2,
    title: 'Clean technical structure',
    description: 'Semantic HTML, strong heading hierarchy, and structured layouts make your site easier for search engines to read.',
  },
  {
    icon: MapPinned,
    title: 'Local SEO support',
    description: 'We help service businesses show up for local searches with location-aware content and clear service pages.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust and conversion',
    description: 'Clear calls to action, testimonials, and service highlights help turn traffic into enquiries and leads.',
  },
];

const About = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content') ?? '';

    document.title = 'About Swami Web | Website Development Company in India';

    if (descriptionTag) {
      descriptionTag.setAttribute(
        'content',
        'Swami Web builds SEO-friendly website development projects with fast load times, mobile-responsive design, and pages that help businesses rank and convert.',
      );
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag) {
        descriptionTag.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb="Home / About Swami Web"
        heading="About Swami Web"
        subtitle="SEO-friendly website development, fast delivery, and conversion-focused design."
        videoSrc=""
        height="short"
        align="center"
      />

      <SectionEffect variant="page" className="py-20" data-testid="seo-highlights-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.35em] text-[#ffd33d]"
              >
                Website Development SEO
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Website development built to <span className="text-[#ffd33d]">rank, load fast, and convert.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-zinc-300 text-lg leading-relaxed"
              >
                Swami Web creates SEO-friendly websites for businesses that want to show up for search terms like website development, web design, and local service searches. Every project is structured for speed, readability, and trust.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-zinc-400 leading-relaxed"
              >
                From the homepage to contact pages, we use clean code, optimised content, and clear calls to action so your website is ready for both users and search engines.
              </motion.p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {seoPoints.map((point, index) => (
                <motion.article
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-2xl border border-zinc-700 bg-zinc-900/80 p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-[#ffd33d]/40"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#ffd33d]/25 bg-[#ffd33d]/10 text-[#ffd33d]">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {point.description}
                  </p>
                </motion.article>
              ))}
            </div>
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
