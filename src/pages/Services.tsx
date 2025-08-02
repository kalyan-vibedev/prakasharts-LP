import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Clock, Zap, ArrowRight } from 'lucide-react';

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServiceSectionProps {
  id?: string;
  title: string;
  services: ServiceItem[];
  delay?: number;
  gradient: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const handleContactClick = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const staticMediaServices = [
    {
      title: 'Cantilever',
      description: 'Overhanging display structures for enhanced visibility at key intersections',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992423/cantilever_intb0a.jpg'
    },
    {
      title: 'Billboards',
      description: 'Large-scale outdoor displays for maximum brand impact and visibility',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992416/billboards_g8l3df.jpg'
    },
    {
      title: 'Public Utility',
      description: 'Public utility infrastructure branding and advertising solutions',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992421/public-utility_skpluu.jpg'
    },
    {
      title: 'Unipole',
      description: 'Premium single-pole installations at strategic commercial locations',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992417/unipole_nlowjl.jpg'
    },
    {
      title: 'Foot Over Bridge',
      description: 'Bridge advertising solutions for high-traffic pedestrian areas',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992420/foot-over-bridge_foisil.jpg'
    },
    {
      title: 'Gantry',
      description: 'Highway gantry displays for maximum vehicular traffic exposure',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992415/gantry_lb8roh.jpg'
    },
    {
      title: 'Bus Shelter',
      description: 'Transit advertising at bus stops with high footfall and visibility',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992418/bus-shelter_s5uqme.jpg'
    },
    {
      title: 'Model Bus Shelter',
      description: 'Premium model bus shelter advertising with enhanced visibility and design',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992416/model-bus-shelter_t6ddca.jpg'
    },
    {
      title: 'Police Kiosks',
      description: 'Police kiosks branding and advertising in high-security areas',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992417/police-kiosks_hjzebi.jpg'
    },
    {
      title: 'Metro Gantry',
      description: 'Metro station gantry displays for enhanced transit advertising visibility',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992420/metro-gantry_x7v69t.jpg'
    },
    {
      title: 'Metro Facade',
      description: 'External metro station branding with high visibility and passenger engagement',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992417/metro-facade_qs4qrb.jpg'
    },
    {
      title: 'Metro Pillars',
      description: 'Metro station pillar advertising for targeted transit audience reach',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992416/metro-pillars_eff4kn.jpg'
    }
  ];

  const transitMediaServices = [
    {
      title: 'Elevator Branding',
      description: 'Complete elevator interior and exterior branding solutions',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992416/elevator-branding_nertrf.jpg'
    },
    {
      title: 'Escalator Branding',
      description: 'Escalator advertising for high-traffic transit areas',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992419/escalator-branding_rojwug.jpg'
    },
    {
      title: 'AFC Gates Branding',
      description: 'Automatic fare collection gates advertising in transit stations',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992422/afc-gates-branding_pqd2zf.jpg'
    },
    {
      title: 'Static Entry Level',
      description: 'Static advertising at entry levels of transit stations',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992415/static-entry-level_sz4gks.jpg'
    },
    {
      title: 'Static Platform Level',
      description: 'Platform level static advertising for maximum passenger visibility',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992418/static-platform-level_ntiocc.jpg'
    },
    {
      title: 'Airport Media',
      description: 'Comprehensive airport advertising solutions for premium audience',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992414/airport-media_szilzp.jpg'
    }
  ];

  const digitalServices = [
    {
      title: 'Foot Over Bridge Digital',
      description: 'Digital displays on foot over bridges for high pedestrian traffic visibility',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992420/foot-over-bridge-digital_ypla6d.jpg'
    },
    {
      title: 'Cantilever Digital',
      description: 'Digital cantilever displays for enhanced visibility at key intersections',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992416/cantilever-digital_pgr1jj.jpg'
    },
    {
      title: 'Police Kiosks Digital',
      description: 'Digital advertising on police kiosks in high-security areas',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992423/police-kiosks-digital_ddhuwl.jpg'
    },
    {
      title: 'Inside Metro Station',
      description: 'Digital advertising inside metro stations for captive audience',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992419/inside-metro-station_rucznn.jpg'
    },
    {
      title: 'Airport Digital',
      description: 'Premium digital advertising solutions at airports for high-value audience',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992414/airport-digital_e634c5.jpg'
    }
  ];

  const ServiceCard = ({ service, index }: ServiceCardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            console.log('Service image failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );

  const ServiceSection = ({ title, services, delay = 0, gradient, id }: ServiceSectionProps) => (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title.split(' ').map((word, index) => 
              index === title.split(' ').length - 1 ? (
                <span key={index} className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive OOH solutions with unmatched expertise and strategic locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 pt-44 text-white overflow-hidden">
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
              Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Comprehensive outdoor advertising solutions designed to maximize your brand's visibility and impact across South India.
            </p>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2 mx-auto"
            >
              <span>Get Your Quote</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section id="why-services" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Services</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We offer comprehensive OOH solutions with unmatched expertise and strategic locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: 'High Visibility', description: 'Strategic locations for maximum brand exposure' },
              { icon: Target, title: 'Targeted Reach', description: 'Precise audience targeting across demographics' },
              { icon: Clock, title: '24/7 Presence', description: 'Round-the-clock brand visibility and impact' },
              { icon: Zap, title: 'Quick Setup', description: 'Fast campaign deployment and execution' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Static Media Services */}
      <ServiceSection 
        title="Static Media Solutions" id="static-media" 
        services={staticMediaServices} 
        gradient="from-blue-500 to-cyan-500"
      />

      {/* Transit Media Services */}
      <ServiceSection 
        title="Transit Media Solutions" id="transit-media" 
        services={transitMediaServices} 
        delay={0.2}
        gradient="from-green-500 to-emerald-500"
      />

      {/* Digital Services */}
      <ServiceSection 
        title="Digital DOOH Solutions" id="digital-dooh" 
        services={digitalServices} 
        delay={0.4}
        gradient="from-purple-500 to-pink-500"
      />

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
              Ready to Start Your <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Campaign</span>?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Get in touch with our team to discuss your advertising requirements and get a customized quote.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={handleContactClick}
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Your Quote Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 