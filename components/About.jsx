import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-8">Creative Vision</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                As a Creative Director with over 10 years in fashion and visual merchandising, 
                I specialize in transforming brand narratives through compelling visual storytelling.
              </p>
              <p>
                My expertise spans from conceptualizing seasonal campaigns and directing photoshoots 
                to managing visual identity across digital and print platforms. I lead cross-functional 
                teams to ensure brand consistency while pushing creative boundaries.
              </p>
              <p>
                From the editorial minimalism of "Urban Canvas" to the vibrant energy of "Color Block City," 
                each project reflects my commitment to elevating brand aesthetics while maintaining 
                strategic alignment with business objectives.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {['Creative Direction', 'Visual Merchandising', 'Brand Strategy', 'Photography Direction', 'Campaign Development', 'Team Leadership'].map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-white space-y-6">
                <div className="font-serif text-7xl font-bold" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>10+</div>
                <div className="text-xl font-medium tracking-wide" style={{ color: '#f0f0f0' }}>Years of</div>
                <div className="text-2xl font-semibold tracking-tight" style={{ color: 'white' }}>Creative Excellence</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-300 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About