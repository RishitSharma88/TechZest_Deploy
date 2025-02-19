import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Globe2, Zap, MessageSquare, Users, ChevronRight, Github, Linkedin, Twitter, ArrowUp, Info, Box, PenTool as Tools } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('#hero');
      if (heroElement) {
        const headerBottom = heroElement.getBoundingClientRect().bottom;
        setDescriptionVisible(headerBottom < window.innerHeight / 2);
      }
      setShowScrollTop(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f4f9]">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 z-50 border-b border-gray-800 transition-colors duration-300 hover:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                src="https://i.postimg.cc/MpZ1TQk1/Techzest-logo-trans-1.png"
                alt="Logo"
                className="h-10 w-auto rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-white">TechZest</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-gray-300 flex items-center">
                <Info className="h-5 w-5 mr-1" />
                About Us
              </a>
              <a href="#services" className="text-white hover:text-gray-300 flex items-center">
                <Tools className="h-5 w-5 mr-1" />
                Services
              </a>
              <a href="#products" className="text-white hover:text-gray-300 flex items-center">
                <Box className="h-5 w-5 mr-1" />
                Products
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 flex items-center">
                <MessageSquare className="h-5 w-5 mr-1" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="border-b bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              TechZest Global Solutions
            </h1>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
              alt="Hero"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-8 animate-zoomIn"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gray-100 transition-opacity duration-500 ${descriptionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">WHO WE ARE AND WHAT WE BELIEVE IN</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are a specialized software technology firm dedicated to delivering innovative solutions for the
              financial services industry, with expertise in product development and consulting. Focusing on stock
              market trading and critical infrastructure, we provide end-to-end, scalable, and secure technology
              solutions tailored to financial institutions. Our mission is to be the trusted technology partner,
              enabling clients to navigate complex financial markets through advanced trading platforms and efficient
              software systems that drive long-term success and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 className="h-8 w-8" />, title: 'Web Development', description: 'Building responsive and user-friendly websites.' },
              { icon: <Zap className="h-8 w-8" />, title: 'Mobile Apps', description: 'Creating innovative mobile applications for iOS and Android.' },
              { icon: <Globe2 className="h-8 w-8" />, title: 'Cloud Solutions', description: 'Providing scalable and secure cloud services.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Trading Platform', description: 'Advanced trading platform for financial markets.' },
              { title: 'Analytics Software', description: 'Comprehensive analytics tools for data-driven decisions.' },
              { title: 'Security Solutions', description: 'Robust security solutions for financial institutions.' }
            ].map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 TechZest Global Solutions. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;