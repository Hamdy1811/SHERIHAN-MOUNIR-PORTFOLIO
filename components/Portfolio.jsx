import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

const portfolioData = [
  {
    id: 1,
    title: "Color Block City",
    role: "Creative Director",
    category: "Fashion Campaign",
    thumbnail: "https://ik.imagekit.io/ko0ec3rfg/cotainer%20outdoor%20shoot%20marzouk/shoot%20marzouk5.jpg?updatedAt=1761906776694&tr=w-800,h-600,fo-auto,q-80",
    images: [
      "https://ik.imagekit.io/ko0ec3rfg/cotainer%20outdoor%20shoot%20marzouk/shoot%20marzouk5.jpg?updatedAt=1761906776694&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/cotainer%20outdoor%20shoot%20marzouk/shoot%20marzouk2.jpg?updatedAt=1761906774757&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/cotainer%20outdoor%20shoot%20marzouk/shoot%20marzouk6.jpg?updatedAt=1761906773982&tr=w-1200,h-900,fo-auto,q-90"
    ],
    concept: "Capturing the energy and optimism of summer through vibrant colors and bold prints that reflect contemporary urban life. Outdoor shoot around large, brightly colored industrial containers creating a dynamic, high-energy lookbook feel.",
    execution: "Natural sunlight, soft garments contrasted against saturated geometric backgrounds, styling features floral prints and striped knits.",
    mood: "Cheerful, casual, modern, energetic",
    aesthetic: "Soft garments contrasted against saturated, geometric backgrounds",
    productFocus: "Light, breathable cotton wear with seasonal prints and layers"
  },
  {
    id: 2,
    title: "Pastel & Print Utility",
    role: "Creative Director",
    category: "Editorial Campaign",
    thumbnail: "https://ik.imagekit.io/ko0ec3rfg/white%20bricks%20indoor%20shoot%20abdallah%20sabry-20251031T100436Z-1-001/20150212-_MG_1904.jpg?updatedAt=1761905826390&tr=w-800,h-600,fo-auto,q-80",
    images: [
      "https://ik.imagekit.io/ko0ec3rfg/white%20bricks%20indoor%20shoot%20abdallah%20sabry-20251031T100436Z-1-001/20150212-_MG_1904.jpg?updatedAt=1761905826390&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/white%20bricks%20indoor%20shoot%20abdallah%20sabry-20251031T100436Z-1-001/20150212-Mobaco%20Summer%202015-13405.jpg?updatedAt=1761906484537&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/white%20bricks%20indoor%20shoot%20abdallah%20sabry-20251031T100436Z-1-001/20150212-_MG_1900.jpg?updatedAt=1761906492789&tr=w-1200,h-900,fo-auto,q-90"
    ],
    concept: "Modernizing preppy and nautical themes through bold color and print play for a fresh, youthful spring/summer aesthetic.",
    execution: "Studio shoot with textured white brick walls, warm soft lighting for vintage editorial tone, mixing bold stripes and florals with vibrant solids.",
    mood: "Fresh, sophisticated, slightly rebellious",
    aesthetic: "Modern preppy meets urban chic",
    productFocus: "Knit sweaters, light cotton shirts, colorful trousers, and graphic tees"
  },
  {
    id: 3,
    title: "Urban Canvas",
    role: "Creative Director",
    category: "Editorial Campaign",
    thumbnail: "https://ik.imagekit.io/ko0ec3rfg/black&white%20shoot%20abdallah%20sabry/black&white%20shoot%20abdallah%20sabry2.jpg?updatedAt=1761844583667&tr=w-800,h-600,fo-auto,q-80",
    images: [
      "https://ik.imagekit.io/ko0ec3rfg/black&white%20shoot%20abdallah%20sabry/black&white%20shoot%20abdallah%20sabry2.jpg?updatedAt=1761844583667&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/black&white%20shoot%20abdallah%20sabry/black&white%20shoot%20abdallah%20sabry1.jpg?updatedAt=1761844584453&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/black%26white%20shoot%20abdallah%20sabry-20251030T170150Z-1-001/MOBACO%20SS%202016-19308-212.jpg?updatedAt=1761845078465&tr=w-1200,h-900,fo-auto,q-90"
    ],
    concept: "A celebration of cotton and denim quality through a timeless, editorial lens. The vision focuses on stripping back color to highlight texture, fit, and enduring style.",
    execution: "High-contrast black and white photography emphasizing fabric detail and shadow play. Minimal styling with essential wardrobe staples posed to project confidence.",
    mood: "Confident, classic, sophisticated",
    aesthetic: "Editorial minimalism with strong contrasts",
    productFocus: "Denim, cotton shirts, and everyday tailoring"
  },
  {
    id: 4,
    title: "Equestrian Roots",
    role: "Creative Director",
    category: "Lifestyle Campaign",
    thumbnail: "https://ik.imagekit.io/ko0ec3rfg/farm%20shoot%20abdallah%20sabry/farm%20shoot%20abdallah%20sabry3.jpg?updatedAt=1761906933912&tr=w-800,h-600,fo-auto,q-80",
    images: [
      "https://ik.imagekit.io/ko0ec3rfg/farm%20shoot%20abdallah%20sabry/farm%20shoot%20abdallah%20sabry3.jpg?updatedAt=1761906933912&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/farm%20shoot%20abdallah%20sabry/farm%20shoot%20abdallah%20sabry4.jpg?updatedAt=1761906932481&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/farm%20shoot%20abdallah%20sabry/farm%20shoot%20abdallah%20sabry1.jpg?updatedAt=1761906929641&tr=w-1200,h-900,fo-auto,q-90"
    ],
    concept: "Evoking rugged elegance and comfort inspired by countryside and equestrian lifestyles for the autumn/winter transition.",
    execution: "Shot on rustic farm location using natural textures—hay, wood, corrugated iron. Styling includes quilted jackets, puffers, knits, and tall boots.",
    mood: "Earthy, warm, intimate",
    aesthetic: "Countryside luxury meets casual comfort",
    productFocus: "Outerwear, denim, layered knitwear, and seasonal essentials"
  },
  {
    id: 5,
    title: "Skyline & Sand",
    role: "Creative Director",
    category: "Summer Campaign",
    thumbnail: "https://ik.imagekit.io/ko0ec3rfg/MOBACO%20SUMMER%202014-519.jpg?updatedAt=1761919201607&tr=w-800,h-600,fo-auto,q-80",
    images: [
      "https://ik.imagekit.io/ko0ec3rfg/MOBACO%20SUMMER%202014-519.jpg?updatedAt=1761919201607&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/MOBACO%20SUMMER%202014-617-1.jpg?updatedAt=1761919199060&tr=w-1200,h-900,fo-auto,q-90",
      "https://ik.imagekit.io/ko0ec3rfg/MOBACO%20SUMMER%202014-207-1.jpg?updatedAt=1761919196655&tr=w-1200,h-900,fo-auto,q-90"
    ],
    concept: "A dreamy, retro-inspired summer story blending nostalgia, leisure, and effortless style.",
    execution: "Highly stylized set with white sand, painted blue-sky backdrop, and tall reeds. Styling includes graphic tees, light-wash denim, printed shorts accessorized with sunglasses.",
    mood: "Dreamy, carefree, nostalgic",
    aesthetic: "Retro vacation editorial with crisp colors and soft natural light",
    productFocus: "Summer cotton essentials—shirts, light denim, and patterned leisurewear"
  }
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(portfolioData.map(item => item.category))]

  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title mb-6"
          >
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A curated selection of campaigns showcasing creative direction, 
            visual storytelling, and brand elevation across fashion and lifestyle
          </motion.p>
        </div>

        <!-- Filter Buttons -->
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <!-- Portfolio Grid -->
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="project-card cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="aspect-square relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-serif text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{project.category}</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.concept.substring(0, 100)}...</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio