import React from 'react'
import { motion } from 'framer-motion'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="modal-overlay absolute inset-0" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative z-10 bg-warm-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-serif text-4xl font-bold mb-2">{project.title}</h3>
              <p className="text-accent font-medium text-lg">{project.role}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={project.images[0]}
                alt={project.title}
                className="w-full h-80 object-cover rounded-xl"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  src={project.images[1]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  src={project.images[2]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-serif text-xl font-semibold mb-3">Concept</h4>
                <p className="text-gray-700 leading-relaxed">{project.concept}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-serif text-xl font-semibold mb-3">Execution</h4>
                <p className="text-gray-700 leading-relaxed">{project.execution}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Mood</h4>
                  <p className="text-gray-700">{project.mood}</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Aesthetic</h4>
                  <p className="text-gray-700">{project.aesthetic}</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Product Focus</h4>
                  <p className="text-gray-700">{project.productFocus}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal