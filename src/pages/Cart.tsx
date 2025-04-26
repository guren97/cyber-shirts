import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/outline'
import useStore from '../store/useStore'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="relative min-h-screen py-16">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-cyber-blue text-cyber-black text-sm font-bold uppercase tracking-widest font-tech">
              Your Cart
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none font-orbitron"
          >
            <span className="text-cyber-light">SHOPPING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink"> CART</span>
          </motion.h1>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-cyber-light/60 text-lg mb-6 font-tech">Your cart is empty</p>
            <Link to="/all-products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyber-blue text-cyber-black font-bold px-8 py-3 text-sm flex items-center justify-center gap-2 hover:bg-cyber-pink transition-colors font-tech"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card p-6 flex gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyber-light mb-2 font-orbitron">{item.name}</h3>
                    <p className="text-cyber-light/60 text-sm mb-4 font-tech">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-cyber-blue/20">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 text-cyber-light/60 hover:text-cyber-light transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-cyber-light border-x border-cyber-blue/20">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-cyber-light/60 hover:text-cyber-light transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-cyber-light/60 hover:text-cyber-pink transition-colors"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <span className="text-cyber-pink text-xl font-bold font-tech">
                        Rs {item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="cyber-card p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-cyber-light mb-6 font-orbitron">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-cyber-light/60 font-tech">
                    <span>Subtotal</span>
                    <span>Rs {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-cyber-light/60 font-tech">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-cyber-blue/20 pt-4">
                    <div className="flex justify-between text-cyber-light font-bold font-tech">
                      <span>Total</span>
                      <span>Rs {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-cyber-blue text-cyber-black font-bold px-8 py-3 text-sm flex items-center justify-center gap-2 hover:bg-cyber-pink transition-colors font-tech"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart 