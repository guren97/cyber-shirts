import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {  
  ShieldCheckIcon,
  CreditCardIcon,
  TruckIcon
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Products', path: '/all-products' }, 
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping Info', path: '/shipping' }, 
    ], 
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms' }, 
    ],
  }

 

  const features = [
    { icon: ShieldCheckIcon, text: 'Secure Payments' },
    { icon: CreditCardIcon, text: 'Multiple Payment Options' },
    { icon: TruckIcon, text: 'Fast Shipping' },
  ]

  return (
    <footer className="relative bg-cyber-black/50 backdrop-blur-sm border-t border-cyber-blue/20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-blue/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black font-orbitron">
                <span className="text-cyber-blue">CYBER</span>
                <span className="text-cyber-pink">SHIRTS</span>
              </span>
            </Link>
            <p className="text-cyber-light/60 text-sm font-tech">
              Enter the matrix. Embrace the future. Join the revolution.
            </p>
            
            {/* Features */}
            <div className="space-y-2 mt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-cyber-light/60 text-sm font-tech"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="w-4 h-4 text-cyber-blue" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-cyber-light font-bold capitalize font-orbitron">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-cyber-light/60 hover:text-cyber-blue transition-colors text-sm font-tech"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          
        </div>

     

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyber-blue/20">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-cyber-light/40 text-sm text-center font-tech">
              {/* Copyright ©️ 2025 | Powered by NAFEES ALI TRADERS (SMC-PRIVATE) LIMITED */}
              Copyright ©️ 2025 | Gwen Bautista
            </p>
            <p className="text-cyber-light/40 text-xs text-center font-tech">
              All rights reserved. Unauthorized reproduction is prohibited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 