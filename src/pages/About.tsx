import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Users, 
  MapPin, 
  Clock, 
  Play, 
  X,
  Star,
  Target,
  TrendingUp,
  Shield,
  Heart,
  Zap,
  Globe,
  Building,
  Trophy
} from 'lucide-react';

interface AboutProps {
  setCurrentPage?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleContactClick = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'Unwavering commitment to delivering exceptional quality in every campaign.',
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering new technologies and creative solutions in outdoor advertising.',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.',
      gradient: 'from-green-500 via-emerald-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Deep passion for creating impactful advertising that connects with audiences.',
      gradient: 'from-pink-500 via-rose-500 to-red-600'
    }
  ];

  const achievements = [
    {
      icon: Clock,
      value: '64+',
      label: 'Years',
      sublabel: 'Industry Experience',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      value: '300+',
      label: 'Cities',
      sublabel: 'Pan South India Coverage',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      value: '10000+',
      label: 'Clients',
      sublabel: 'Including Fortune 500',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Trophy,
      value: '95%',
      label: 'Client Retention Rate',
      sublabel: 'Proven Excellence',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const milestones = [
    {
      year: '1960',
      title: 'Foundation',
      description: 'Established by late Sri CDS Prakasa Rao, graduated from JJ School of Arts, Bombay.',
      icon: Building,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      year: '1980',
      title: 'Expansion',
      description: 'Expanded operations across South India with strategic media partnerships.',
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      year: '2000',
      title: 'Digital Revolution',
      description: 'Embraced digital technologies and launched innovative DOOH solutions.',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as South India\'s most trusted OOH partner with 64+ years of excellence.',
      icon: Trophy,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="legacy" className="relative py-32 pt-44 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/djeecujk0/image/upload/v1753992310/hero-bg_tru760.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Legacy Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Six decades of pioneering innovation, unwavering commitment to excellence, and building lasting relationships with brands across South India.
            </p>
            <motion.button
              onClick={() => setShowVideo(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Play className="h-6 w-6" />
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">Legacy Story</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Founded in 1960 by late Sri CDS Prakasa Rao, a graduate from JJ School of Arts, Bombay, 
                Prakash Arts has evolved from a small advertising agency to South India's most trusted 
                outdoor advertising partner.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over six decades of experience, we have built an extensive network of premium media 
                assets across 300+ cities, serving Fortune 500 companies and local businesses alike. 
                Our commitment to innovation and excellence has made us the preferred choice for brands 
                seeking impactful outdoor advertising solutions.
              </p>
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Learn More About Us
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setShowVideo(true)}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Watch Our Story</h3>
                  <p className="text-blue-100 text-sm">Discover our journey and commitment to excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Six decades of milestones that shaped the outdoor advertising industry
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg border-4 border-white"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak for our excellence and commitment to delivering outstanding results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2`}>
                  {achievement.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.label}</h3>
                <p className="text-gray-700 text-sm">{achievement.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The core principles that guide our every decision and action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden">
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
              Ready to Partner with <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Us</span>?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Join hundreds of successful brands who trust us with their outdoor advertising needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleContactClick}
                className="inline-block bg-gradient-to-r from-white to-gray-100 text-blue-800 px-10 py-5 rounded-full font-bold text-xl hover:from-gray-100 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-white/25"
              >
                Start Your Campaign Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/B4Ez4yu8soQ?autoplay=1"
                title="About Prakash Arts"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;