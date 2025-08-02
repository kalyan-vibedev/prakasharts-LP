import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string, section?: string) => {
    // Update URL hash for direct access
    window.location.hash = path;
    
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // If section is specified, scroll to that section after a short delay
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  };

  const navigationSections = [
    {
      title: 'Home',
      items: [
        { name: 'Numbers That Speak Excellence', path: 'home', section: 'excellence' },
        { name: 'Why Choose Prakash Arts?', path: 'home', section: 'why-choose' }
      ]
    },
    {
      title: 'About',
      items: [
        { name: 'Our Legacy Story', path: 'about', section: 'legacy' },
        { name: 'Our Journey', path: 'about', section: 'journey' },
        { name: 'Our Achievements', path: 'about', section: 'achievements' },
        { name: 'Our Values', path: 'about', section: 'values' }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'Why Choose Our Services?', path: 'services', section: 'why-services' },
        { name: 'Static Media Solutions', path: 'services', section: 'static-media' },
        { name: 'Transit Media Solutions', path: 'services', section: 'transit-media' },
        { name: 'Digital DOOH Solutions', path: 'services', section: 'digital-dooh' }
      ]
    },
    {
      title: 'Clients',
      items: [
        { name: 'Trusted by Leading Brands', path: 'clients', section: 'leading-brands' },
        { name: 'Our Valued Clients', path: 'clients', section: 'valued-clients' },
        { name: 'Featured Campaigns', path: 'clients', section: 'featured-campaigns' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/prakasharts' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/prakasharts' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/prakasharts' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/prakasharts' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://res.cloudinary.com/djeecujk0/image/upload/v1753992404/company-logo_uv24ml.png"
                alt="Prakash Arts Logo"
                className="h-6 w-auto mb-2 filter brightness-0 invert"
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="text-sm font-bold mb-2">Prakash Arts</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                South India's most trusted OOH partner with 64+ years of excellence in outdoor advertising.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Phone className="h-2.5 w-2.5 text-blue-400" />
                  <span className="text-xs text-gray-300">+91 8884555555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-2.5 w-2.5 text-blue-400" />
                  <span className="text-xs text-gray-300">info@prakasharts.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-2.5 w-2.5 text-blue-400 mt-0.5" />
                  <span className="text-xs text-gray-300">
                    Museum Road, Governorpet, Vijayawada – 520002
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.title} className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xs font-semibold mb-3 text-white flex items-center">
                  {section.title === 'Home' && <Star className="h-2.5 w-2.5 mr-1.5" />}
                  {section.title === 'About' && <Users className="h-2.5 w-2.5 mr-1.5" />}
                  {section.title === 'Services' && <TrendingUp className="h-2.5 w-2.5 mr-1.5" />}
                  {section.title === 'Clients' && <Award className="h-2.5 w-2.5 mr-1.5" />}
                  {section.title}
                </h4>
                <ul className="space-y-1.5">
                  {section.items.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + sectionIndex * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => handleNavigation(item.path, item.section)}
                        className="text-xs text-gray-300 hover:text-blue-400 transition-colors duration-200 group flex items-center"
                      >
                        <ArrowRight className="h-1.5 w-1.5 mr-1 group-hover:translate-x-1 transition-transform duration-200" />
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-3"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <p className="text-xs text-gray-400">
                © {currentYear} Prakash Arts. All rights reserved.
              </p>
              <div className="flex space-x-3 text-xs text-gray-400">
                <button 
                  onClick={() => handleNavigation('contact', 'quote')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Get Quote
                </button>
                <button 
                  onClick={() => handleNavigation('contact', 'support')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Support
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-3 w-3" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;