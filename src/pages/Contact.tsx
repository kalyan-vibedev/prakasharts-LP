import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Users, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, company, service, message } = formData;
    const subject = `Contact from ${name} - ${service}`;
    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}

Message:
${message}
    `;
    
    const mailtoLink = `mailto:info@prakasharts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactFeatures = [
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your advertising needs.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your campaign success.'
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: '64+ years of excellence in outdoor advertising solutions.'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Fast turnaround times for all your advertising requirements.'
    }
  ];

  const officeLocations = [
    {
      city: 'Hyderabad',
      type: 'Branch Office',
      address: '3-6-473/1, Street No : 5, Himayatnagar, HYDERABAD, 500 029',
      phone: '+91 - 988-511-9144',
      fax: '+91 - 40 - 2763 7444',
      email: 'hyd@prakasharts.com',
      mapUrl: 'https://maps.app.goo.gl/QnYicFt6AwNb7Cmf7?g_st=ipc',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      city: 'Vijayawada',
      type: 'Head Office',
      address: 'Museum Road, Governorpet, VIJAYAWADA, 520 002',
      phone: '+ 91-988-511-8144',
      fax: '+91 - 866 -2571 554',
      email: 'vja@prakasharts.com',
      mapUrl: 'https://maps.app.goo.gl/LVqrVypYuMEQ566p9?g_st=ipc',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      city: 'Bangalore',
      type: 'Branch Office',
      address: '102, IInd Floor, Ramanathan Complex, Infantry Road, BANGALORE -560 001',
      phone: '+ 91 - 988-021-9144',
      fax: '',
      email: 'bang@prakasharts.com',
      mapUrl: 'https://maps.app.goo.gl/idNjAXwmAf28iAg58?g_st=ipc',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      city: 'Chennai',
      type: 'Branch Office',
      address: '#138, Dr. Radhakrishnan Salai, 2nd floor, Mylapore, Chennai - 600004',
      phone: '+91 - 988-471-0144',
      fax: '',
      email: 'chn@prakasharts.com',
      mapUrl: 'https://maps.app.goo.gl/mU1BvbvLUumTZU7K7?g_st=ipc',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              Get in <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Ready to amplify your brand presence? Let's discuss how we can help you create impactful outdoor advertising campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                      placeholder="+91 8884555555"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                  >
                    <option value="">Select a service</option>
                    <option value="Billboard Advertising">Billboard Advertising</option>
                    <option value="Transit Media">Transit Media</option>
                    <option value="Street Furniture">Street Furniture</option>
                    <option value="Digital DOOH">Digital DOOH</option>
                    <option value="Airport Media">Airport Media</option>
                    <option value="Brand Activation">Brand Activation</option>
                    <option value="Custom Campaign">Custom Campaign</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50 resize-none"
                    placeholder="Tell us about your advertising campaign requirements, target audience, budget, and timeline..."
                  />
                </div>

                <div className="flex items-center justify-center pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </div>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>We'll respond within 24 hours • Your information is secure and confidential</p>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {contactFeatures.slice(0, 3).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Ready to amplify your brand presence across South India? 
                    Our team is here to help you create impactful outdoor advertising campaigns.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+91 8884555555</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>info@prakasharts.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Museum Road, Governorpet<br />Vijayawada – 520002<br />Andhra Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Office Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Serving South India with strategic locations across major cities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${office.gradient}`}></div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {office.type}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 font-semibold">{office.phone}</span>
                    </div>
                    
                    {office.fax && (
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-600 text-sm">Fax: {office.fax}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 text-sm break-all">{office.email}</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on Map
                  </motion.a>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Amplify Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you reach your target audience and <span className="font-bold">amplify your brand</span>. Contact us today and let's create an outdoor advertising campaign that delivers results.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="tel:+919876543210"
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Call Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 