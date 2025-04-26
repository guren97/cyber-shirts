import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import useStore from '../store/useStore'
import { 
  ShoppingCartIcon, 
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon,
  TagIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'

const renderStars = (rating: number) => {
  return [...Array(5)].map((_, index) => (
    <span key={index}>
      {index < Math.floor(rating) ? (
        <StarIconSolid className="w-4 h-4 text-cyber-yellow" />
      ) : (
        <StarIcon className="w-4 h-4 text-cyber-light/20" />
      )}
    </span>
  ))
}

const ProductDetails = () => {
  const { id } = useParams()
  const addToCart = useStore((state) => state.addToCart)
  const cart = useStore((state) => state.cart)
  const [showSuccess, setShowSuccess] = useState(false)
  const product = products.find((p) => p.id === id)

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    }
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl font-orbitron text-cyber-light mb-4">Product Not Found</h1>
        <p className="text-cyber-light/60 font-tech">The product you're looking for doesn't exist.</p>
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50 bg-cyber-pink/20 backdrop-blur-sm text-cyber-light px-6 py-3 rounded-lg border border-cyber-pink/20 flex items-center gap-2 font-tech"
          >
            <CheckCircleIcon className="w-5 h-5 text-cyber-pink" />
            <span>Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

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
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 mt-20 relative z-20"
      >
        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="relative flex p-4 bg-white items-center justify-center rounded-2xl overflow-hidden bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-35%  h-[340px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-cyber-black/50 backdrop-blur-sm rounded-full text-sm font-tech text-cyber-light border border-cyber-blue/20">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
            </div>
            
            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                <ShieldCheckIcon className="w-6 h-6 text-cyber-blue mb-2" />
                <h4 className="font-orbitron text-cyber-light">Premium Quality</h4>
                <p className="text-sm text-cyber-light/60 font-tech">High-end materials</p>
              </div>
              <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                <TagIcon className="w-6 h-6 text-cyber-blue mb-2" />
                <h4 className="font-orbitron text-cyber-light">Trendy Design</h4>
                <p className="text-sm text-cyber-light/60 font-tech">Latest streetwear style</p>
              </div>
              <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                <TruckIcon className="w-6 h-6 text-cyber-blue mb-2" />
                <h4 className="font-orbitron text-cyber-light">Free Shipping</h4>
                <p className="text-sm text-cyber-light/60 font-tech">On all orders</p>
              </div>
              <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                <ArrowPathIcon className="w-6 h-6 text-cyber-blue mb-2" />
                <h4 className="font-orbitron text-cyber-light">Easy Returns</h4>
                <p className="text-sm text-cyber-light/60 font-tech">30-day guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-orbitron text-cyber-light mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">{renderStars(product.rating.stars)}</div>
                  <span className="text-sm text-cyber-light/40 font-tech">({product.rating.count} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-orbitron text-cyber-light">Rs {product.price.toFixed(2)}</p>
                {product.discount && (
                  <span className="px-3 py-1 bg-cyber-pink/20 text-cyber-pink rounded-full text-sm font-tech">
                    {product.discount.percentage}% OFF
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-cyber-black/50 backdrop-blur-sm text-cyber-light rounded-full text-sm font-tech border border-cyber-blue/20">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <span className="px-4 py-2 bg-cyber-black/50 backdrop-blur-sm text-cyber-light rounded-full text-sm font-tech border border-cyber-blue/20">
                  Premium Streetwear
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-orbitron text-cyber-light">Description</h2>
              <p className="text-cyber-light/60 leading-relaxed font-tech">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-orbitron text-cyber-light">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                  <h4 className="font-orbitron text-cyber-light">Material</h4>
                  <p className="text-sm text-cyber-light/60 font-tech">{product.material}</p>
                </div>
                <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                  <h4 className="font-orbitron text-cyber-light">Fit</h4>
                  <p className="text-sm text-cyber-light/60 font-tech">Relaxed, comfortable</p>
                </div>
                <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                  <h4 className="font-orbitron text-cyber-light">Care</h4>
                  <p className="text-sm text-cyber-light/60 font-tech">Machine washable</p>
                </div>
                <div className="bg-cyber-black/50 backdrop-blur-sm p-4 rounded-xl border border-cyber-blue/20">
                  <h4 className="font-orbitron text-cyber-light">Style</h4>
                  <p className="text-sm text-cyber-light/60 font-tech">Modern streetwear</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-cyber-pink text-cyber-black px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-cyber-pink/90 transition-colors font-orbitron"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              Add to Cart ({cart.filter(item => item.id === product.id).length || 0})
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductDetails 