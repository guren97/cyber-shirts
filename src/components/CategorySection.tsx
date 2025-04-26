import { motion } from 'framer-motion'

import japaneseHiTech from '../assets/images/products/Japanese_Hi_Tech_Vaporwave_Aesthetic_T_Shirt_1400.jpg'
import cyberpunkCity from '../assets/images/products/Cyberpunk_City_Sci_Fi_Night_Tokyo_Japan_Urban_Noir_Dystopia_1850.jpg'
import techwearGoth from '../assets/images/products/Techwear_Goth_Cyberpunk_Samurai_Warrior_T_Shirt_1700.jpg'

const CategorySection = () => {
  const categories = [
    {
      name: 'Cyberpunk',
      description: 'Tech-Inspired Designs',
      image: japaneseHiTech
    },
    {
      name: 'Neon',
      description: 'Glowing Street Style',
      image: cyberpunkCity
    },
    {
      name: 'Tech',
      description: 'Digital Age Fashion',
      image: techwearGoth
    }
  ]

  return (
    <section className="py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-cyber-blue text-cyber-black text-sm font-bold uppercase tracking-widest font-tech">
              Shop by Category
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none font-orbitron"
          >
            <span className="text-cyber-light">EXPLORE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink"> COLLECTIONS</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative h-[400px] overflow-hidden cyber-card"
            >
              {/* Diagonal Stripes */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,184,255,0.1)_10px,rgba(0,184,255,0.1)_20px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="absolute p-4 bg-white inset-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <h3 className="text-4xl font-black text-cyber-light mb-2 group-hover:text-cyber-blue transition-colors duration-300 font-orbitron">
                    {category.name}
                  </h3>
                  <p className="text-cyber-light/60 text-sm font-medium mb-4 group-hover:text-cyber-light/80 transition-colors duration-300 font-tech">
                    {category.description}
                  </p>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-blue transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection 