import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cyber-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
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
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="flex flex-col items-center min-h-screen justify-center">
          {/* Hero Header */}
          <motion.div
            className="w-full text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-cyber-blue text-cyber-black text-sm font-bold uppercase tracking-widest font-tech">
                Limited Edition
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none font-orbitron"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-cyber-light">ENTER</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink"> THE MATRIX</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-cyber-light/80 max-w-2xl mx-auto font-tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Cyberpunk-themed T-shirts that blend futuristic aesthetics with streetwear.
              Embrace the digital revolution with our cutting-edge designs.
            </motion.p>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            className="w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/all-products">
              <motion.button
                className="bg-transparent border-2 border-cyber-blue text-cyber-blue font-bold px-12 py-5 text-xl hover:bg-cyber-blue hover:text-cyber-black transition-colors flex items-center gap-2 mx-auto font-tech"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
                <ArrowRightIcon className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Features Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-cyber-black/80 backdrop-blur-md z-30 border-t border-cyber-blue/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-cyber-blue/20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center flex items-center gap-2"
              >
                <TruckIcon className="w-6 h-6 text-cyber-blue" />
                <div>
                  <p className="text-cyber-light font-bold text-lg font-orbitron">Free Shipping</p>
                  <p className="text-cyber-light/60 text-sm font-tech">On all orders over $100</p>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-cyber-blue/20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center flex items-center gap-2"
              >
                <ShieldCheckIcon className="w-6 h-6 text-cyber-pink" />
                <div>
                  <p className="text-cyber-light font-bold text-lg font-orbitron">30-Day Returns</p>
                  <p className="text-cyber-light/60 text-sm font-tech">No questions asked</p>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center p-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center flex items-center gap-2"
              >
                <ShieldCheckIcon className="w-6 h-6 text-cyber-blue" />
                <div>
                  <p className="text-cyber-light font-bold text-lg font-orbitron">Secure Payment</p>
                  <p className="text-cyber-light/60 text-sm font-tech">Encrypted transactions</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero