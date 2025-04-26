import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  CheckCircleIcon, 
  HomeIcon,  
  ArrowPathIcon,
  TruckIcon,
  EnvelopeIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const OrderSuccess = () => {
  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center relative z-20"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-4xl mx-auto bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 overflow-hidden"
          > 
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 via-cyber-pink/20 to-cyber-blue/20 opacity-50" />
            
            <div className="p-8 md:p-12 relative">
              {/* Success Icon and Main Message */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.2
                  }}
                  className="relative flex justify-center mb-8"
                >
                  <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-2xl" />
                  <div className="relative bg-cyber-blue rounded-full p-4 shadow-lg shadow-cyber-blue/20">
                    <CheckCircleIcon className="h-16 w-16 text-cyber-black" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h1 className="text-5xl font-black text-cyber-light mb-4 font-orbitron">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink">Order Complete!</span>
                  </h1>
                  
                  <p className="text-lg text-cyber-light/80 mb-2 font-tech">
                    Your cyberpunk gear is on its way!
                  </p>
                  <p className="text-cyber-light/60 mb-8 text-sm font-tech">
                    Watch your email for shipping updates and tracking information.
                  </p>
                </motion.div>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Shipping Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-cyber-black/50 p-6 rounded-lg border border-cyber-blue/20"
                >
                  <h3 className="text-xl font-bold text-cyber-light mb-4 font-orbitron">Shipping Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TruckIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-cyber-light/80 font-tech">Estimated Delivery: 3-5 business days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-cyber-light/80 font-tech">Tracking number will be sent to your email</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-cyber-light/80 font-tech">Processing time: 1-2 business days</span>
                    </div>
                  </div>
                </motion.div>

                {/* Order Protection */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-cyber-black/50 p-6 rounded-lg border border-cyber-blue/20"
                >
                  <h3 className="text-xl font-bold text-cyber-light mb-4 font-orbitron">Order Protection</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-cyber-light/80 font-tech">Secure payment processed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-cyber-light/80 font-tech">Order confirmed and verified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowPathIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-cyber-light/80 font-tech">Easy returns within 30 days</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              > 
                
                <Link to="/">
                  <motion.button
                    className="w-full sm:w-auto bg-cyber-black/50 text-cyber-light border-2 border-cyber-blue/20 px-8 py-3 rounded-lg hover:bg-cyber-blue/10 transition-colors flex items-center justify-center gap-2 font-tech"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HomeIcon className="w-5 h-5" />
                    Back to Base
                  </motion.button>
                </Link>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-12 pt-8 border-t border-cyber-blue/20 text-sm text-center"
              >
                <p className="text-cyber-light/60 font-tech">
                  Need help? Contact us at{' '}
                  <a href="mailto:support@cyber-shirts.shop" className="text-cyber-blue hover:text-cyber-pink transition-colors">
                    support@cyber-shirts.shop
                  </a>
                </p>
                <p className="text-cyber-light/40 mt-2 font-tech">
                  Order ID: CYBER-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default OrderSuccess