import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Award, Star, Users, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const handleContactClick = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    if (setCurrentPage) {
      setCurrentPage('services');
    }
    window.location.hash = 'services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 pt-44 text-white overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/djeecujk0/image/upload/v1753992310/hero-bg_tru760.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              <span className="block mb-2">South India's Most</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Trusted OOH Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              64+ years of excellence in outdoor advertising, connecting brands with millions through premium media solutions across South India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={handleServicesClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers Section */}
      <section id="excellence" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Numbers That Speak <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our track record of success speaks volumes about our commitment to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '64+', label: 'Years of Excellence', color: 'from-blue-500 to-cyan-500' },
              { number: '300+', label: 'Cities Covered', color: 'from-green-500 to-emerald-500' },
              { number: '1000+', label: 'Successful Campaigns', color: 'from-purple-500 to-pink-500' },
              { number: '50M+', label: 'Daily Impressions', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Prakash Arts</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Six decades of industry leadership, pioneering innovation, and unparalleled expertise in outdoor advertising solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Strategic Media Assets',
                description: 'Premium locations across high-traffic corridors ensuring maximum brand exposure and audience engagement.',
                gradient: 'from-blue-500 via-cyan-500 to-blue-600'
              },
              {
                icon: Award,
                title: 'Industry Leadership',
                description: 'Founding member of the Indian Outdoor Advertising Association, setting industry standards since 2007.',
                gradient: 'from-green-500 via-emerald-500 to-teal-600'
              },
              {
                icon: Star,
                title: 'Proven Excellence',
                description: 'Delivered 1000+ successful campaigns for Fortune 500 companies with measurable ROI and brand impact.',
                gradient: 'from-yellow-500 via-orange-500 to-red-600'
              },
              {
                icon: Users,
                title: 'Comprehensive Support',
                description: 'Dedicated account management with 24/7 campaign monitoring and strategic optimization services.',
                gradient: 'from-purple-500 via-pink-500 to-rose-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 text-center h-full flex flex-col items-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center max-w-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/djeecujk0/image/upload/v1753992310/hero-bg_tru760.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">
              Ready to Amplify Your <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Brand</span>?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Join hundreds of successful brands who trust us with their outdoor advertising needs.
            </p>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-block bg-gradient-to-r from-white to-gray-100 text-blue-800 px-10 py-5 rounded-full font-bold text-xl hover:from-gray-100 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              Start Your Campaign Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;