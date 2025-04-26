import { motion } from 'framer-motion'
import { useState } from 'react'
import useStore from '../store/useStore'
import { useNavigate } from 'react-router-dom'
import {  
  ShieldCheckIcon,
  ArrowPathIcon,
  CheckCircleIcon, 
  MapPinIcon,
  CreditCardIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline'

import easePaisia from '../assets/images/paymentlogo/easypaisa.png'
import jasscashCard from '../assets/images/paymentlogo/jazzcashcard.png'
import jazzcashMobile from '../assets/images/paymentlogo/jazzcashmobile.png'

const Checkout = () => {
  const navigate = useNavigate()
  const { cart, getTotalPrice, clearCart } = useStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '', 
    country: 'Pakistan',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null) 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPayment) {
      alert('Please select a payment method')
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      clearCart()
      navigate('/order-success')
    }, 1500)
  }

  const paymentMethods = [
    { id: 'easypaisa', name: 'EasePaisa', logo: easePaisia, icon: BanknotesIcon },
    { id: 'jazzcashcard', name: 'JazzCash Card', logo: jasscashCard, icon: CreditCardIcon },
    { id: 'jazzcashmobile', name: 'JazzCash Mobile', logo: jazzcashMobile, icon: CurrencyDollarIcon }
  ]

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
        className="container mx-auto px-4 py-16 mt-20 relative z-20"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-cyber-light/60 hover:text-cyber-blue transition-colors mb-8 font-tech"
          whileHover={{ x: -5 }}
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Cart
        </motion.button>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-black text-cyber-light mb-4 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink">Checkout</span>
          </h1>
          <p className="text-cyber-light/60 font-tech">Complete your order and get ready to elevate your style!</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <MapPinIcon className="w-6 h-6 text-cyber-blue" />
                <h2 className="text-2xl font-bold text-cyber-light font-orbitron">Shipping Information</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyber-light/60 mb-1 font-tech">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors font-tech"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyber-light/60 mb-1 font-tech">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors font-tech"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-cyber-light/60 mb-1 font-tech">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors font-tech"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-cyber-light/60 mb-1 font-tech">City</label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors font-tech"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-cyber-light/60 mb-1 font-tech">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors font-tech"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-cyber-light/60 mb-1 font-tech">Country</label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors font-tech"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-cyber-light font-orbitron">Payment Method</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {paymentMethods.map((method) => (
                      <motion.div
                        key={method.id}
                        className={`relative bg-cyber-black/50 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedPayment === method.id
                            ? 'border-cyber-blue shadow-lg shadow-cyber-blue/20'
                            : 'border-cyber-blue/20 hover:border-cyber-blue/50'
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-cyber-blue/20 rounded-lg">
                            <method.icon className="w-6 h-6 text-cyber-blue" />
                          </div>
                          <img src={method.logo} alt={method.name} className="h-8" />
                          <span className="text-cyber-light font-medium font-tech">{method.name}</span>
                          {selectedPayment === method.id && (
                            <div className="ml-auto bg-cyber-blue text-cyber-black rounded-full p-1">
                              <CheckCircleIcon className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyber-blue text-cyber-black py-4   font-semibold hover:bg-cyber-pink transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-tech"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <ArrowPathIcon className="w-5 h-5" />
                      </motion.div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheckIcon className="w-5 h-5" />
                      <span>Place Order</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-cyber-light mb-8 font-orbitron">Order Summary</h2>
              <div className="space-y-6">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 p-4 bg-cyber-black/50 rounded-lg border border-cyber-blue/20"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-cyber-light font-tech">{item.name}</h3>
                      <p className="text-sm text-cyber-light/60 font-tech">Quantity: {item.quantity}</p>
                    </div>
                    <span className="text-cyber-light font-bold font-tech">Rs {item.price * item.quantity}</span>
                  </motion.div>
                ))}
                
                <div className="border-t border-cyber-blue/20 pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-cyber-light/60 font-tech">
                      <span>Subtotal</span>
                      <span>Rs {getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between text-cyber-light/60 font-tech">
                      <span>Shipping</span>
                      <span className="text-cyber-blue">Free</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-cyber-light font-orbitron">Total</span>
                      <div className="text-right">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink font-orbitron">
                          Rs {getTotalPrice()}
                        </span>
                        <p className="text-sm text-cyber-light/60 font-tech">Including all taxes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Checkout 