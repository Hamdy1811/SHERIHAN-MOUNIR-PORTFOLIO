import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://ik.imagekit.io/ko0ec3rfg/Gemini_Generated_Image_a3cqrha3cqrha3cq.png?updatedAt=1761920418345&tr=w-40,h-40,fo-auto,q-80" 
              alt="Sherihan Mounir" 
              className="w-10 h-10 rounded-full object-cover border-2 border-accent/30"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-serif font-bold text-xl tracking-tight cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              SHERIHAN MOUNIR
            </motion.div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Portfolio', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-accent transition-colors duration-300 font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden bg-warm-white border-t border-gray-100 overflow-hidden"
      >
        <div className="px-6 py-4 space-y-3">
          {['About', 'Portfolio', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left text-gray-700 hover:text-accent transition-colors duration-300 py-2"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Header