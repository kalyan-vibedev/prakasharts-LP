import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Users, TrendingUp, Award, MapPin, Phone, Mail, Send } from 'lucide-react';

interface ClientsProps {
  setCurrentPage?: (page: string) => void;
}

const Clients: React.FC<ClientsProps> = ({ setCurrentPage }) => {
  const handleContactClick = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Client logos from uploaded files
  const clientLogos = [
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992393/Unilever_mrjuqm.png', name: 'Unilever' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992394/TVS_zklgkr.png', name: 'TVS' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992392/Airtel_swownz.png', name: 'Airtel' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992396/Amazon_uodc2g.png', name: 'Amazon' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992394/Aparna_tplct9.png', name: 'Aparna' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992394/Apple_lo7xfg.png', name: 'Apple' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992394/Flipkart_ueotwn.png', name: 'Flipkart' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992395/Google_bknz9w.png', name: 'Google' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992392/HDFC_Bank_o7gyd0.png', name: 'HDFC Bank' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992393/ICICI_Bank_ykoerg.png', name: 'ICICI Bank' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992393/Maruti_Suzuki_i0a7li.png', name: 'Maruti Suzuki' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992395/My_Home_Group_hzuoer.png', name: 'My Home Group' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992392/Reliance_kkq4wp.png', name: 'Reliance' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992393/Samsung_jcz0dx.png', name: 'Samsung' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992392/Tanishq_ipkoxb.png', name: 'Tanishq' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992395/Tata_auqvqj.png', name: 'Tata' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992395/Vodafone_jnbcpr.png', name: 'Vodafone' },
    { filename: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992396/Wipro_be2zu4.png', name: 'Wipro' }
  ];

  const clientStats = [
    { icon: Users, value: '500+', label: 'Fortune 500 Clients', gradient: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: '95%', label: 'Client Retention Rate', gradient: 'from-green-500 to-emerald-500' },
    { icon: Award, value: '1000+', label: 'Brand Partners', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Star, value: '24/7', label: 'Brand Visibility', gradient: 'from-purple-500 to-pink-500' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Marketing Director, Tech Solutions Ltd',
      content: 'Prakash Arts has been instrumental in expanding our brand presence across South India. Their strategic locations and professional execution have delivered exceptional ROI.',
      rating: 5,
      company: 'Tech Solutions Ltd'
    },
    {
      name: 'Priya Sharma',
      position: 'Brand Manager, Retail Chain',
      content: 'The team\'s expertise in transit media helped us reach our target audience effectively. Their 24/7 support and campaign monitoring is outstanding.',
      rating: 5,
      company: 'Premium Retail Chain'
    },
    {
      name: 'Vikram Reddy',
      position: 'CEO, Real Estate Company',
      content: 'Six decades of experience really shows in their work quality. From planning to execution, everything was seamless and professional.',
      rating: 5,
      company: 'Elite Properties'
    }
  ];

  const featuredCampaigns = [
    {
      title: 'Hyderabad Financial District',
      description: '3.5km urban transformation project with benches, walkways, kiosks, bus shelters, and complete infrastructure development.',
      results: '3.5km Coverage',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992313/hyderabad-financial-district_f9lnac.jpg',
      metrics: ['Urban Integration', 'PPP Success', '3.5km Coverage']
    },
    {
      title: 'Bangalore Skywalk',
      description: 'Premium skywalk advertising in Marthalli with high visibility and strategic placement for maximum brand exposure.',
      results: 'High Traffic Area',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992314/bangalore-skywalk_r4fekl.jpg',
      metrics: ['Premium Visibility', 'Strategic Location', 'High Traffic Area']
    },
    {
      title: 'Chennai Billboard',
      description: 'Large format billboard advertising in prime Chennai locations with maximum visibility and brand impact.',
      results: 'Prime Location',
      image: 'https://res.cloudinary.com/djeecujk0/image/upload/v1753992315/chennai-billboard_qxuine.jpg',
      metrics: ['High Visibility', 'Brand Impact', 'Prime Location']
    }
  ];

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
              Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Clients</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Trusted by Fortune 500 companies and leading brands across South India for over six decades.
            </p>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2 mx-auto"
            >
              <span>Join Our Success Stories</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Trusted by Leading Brands */}
      <section id="leading-brands" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Fortune 500 companies and industry leaders trust us with their outdoor advertising needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 flex items-center justify-center"
              >
                <img
                  src={client.filename}
                  alt={client.name}
                  className="h-12 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    console.log('Client logo failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Valued Clients Stats */}
      <section id="valued-clients" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Valued Clients</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Numbers that demonstrate our commitment to client success and satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section id="featured-campaigns" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">Campaigns</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Showcasing our most successful and impactful outdoor advertising campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.log('Campaign image failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {campaign.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {campaign.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
              Ready to Join Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">Success Stories</span>?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Let's discuss how we can help amplify your brand presence across South India.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center"
            >
              <button
                onClick={handleContactClick}
                className="relative z-10 flex items-center justify-center"
              >
                <span className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
                  Get Started Today
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients; 