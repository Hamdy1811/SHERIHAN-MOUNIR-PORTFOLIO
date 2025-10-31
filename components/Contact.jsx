import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-light-gray">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-6">Let's Create Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to elevate your brand's visual identity? 
            Let's discuss how we can bring your creative vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:sherihanmounir26@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              sherihanmounir26@gmail.com
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/sherihan-mounir-5b9ab3154"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              LinkedIn Profile
            </motion.a>
          </div>
          
          <div className="mt-12 text-gray-600">
            <p className="mb-2">📍 Cairo, Egypt</p>
            <p>📱 +20 109 903 3069</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact