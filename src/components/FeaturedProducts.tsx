import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import { ArrowRightIcon, CubeIcon, BoltIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  // Get 6 random products for featured section
  const featuredProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)

  return (
    <div className="relative py-24 bg-cyber-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-black via-cyber-black to-cyber-blue/10" />
        
        {/* Dynamic Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />

        {/* Animated Glow Effects */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0.2 }}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 60%), radial-gradient(circle at top right, rgba(255, 0, 255, 0.1) 0%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Scanning Line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent"
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.div
            className="text-left mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-cyber-blue text-cyber-black text-sm font-bold uppercase tracking-widest font-tech">
                Featured Collection
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-6xl font-black tracking-tighter leading-none font-orbitron"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-cyber-light">TRENDING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink"> NOW</span>
            </motion.h2>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="hidden md:flex space-x-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CubeIcon className="w-12 h-12 text-cyber-pink" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <BoltIcon className="w-12 h-12 text-cyber-blue" />
            </motion.div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <ProductCard product={product} />
               
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/all-products">
            <motion.button
              className="group bg-transparent border-2 border-cyber-blue text-cyber-blue font-bold px-12 py-5 text-xl hover:bg-cyber-blue hover:text-cyber-black transition-colors flex items-center gap-2 mx-auto font-tech"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturedProducts 