import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-primary text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-serif text-2xl font-bold mb-4"
        >
          SHERIHAN MOUNIR
        </motion.div>
        <p className="text-gray-400 mb-6">Creative Director & Art Director</p>
        
        <div className="flex justify-center space-x-6">
          <motion.a
            href="mailto:sherihanmounir26@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/sherihan-mounir-5b9ab3154"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm"
        >
          © 2024 Sherihan Mounir. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer