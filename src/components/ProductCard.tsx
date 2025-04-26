import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '../store/useStore'
import useStore from '../store/useStore'
import { ShoppingBagIcon, StarIcon, HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useStore((state) => state.addToCart)
  const [imageError, setImageError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <StarIconSolid className="w-4 h-4 text-cyber-yellow" />
        ) : (
          <StarIcon className="w-4 h-4 text-cyber-gray" />
        )}
      </span>
    ))
  }

  return (
    <>
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-[100] bg-cyber-blue text-cyber-black px-6 py-3 rounded-lg shadow-neon flex items-center gap-2 font-tech"
          >
            <CheckCircleIcon className="w-5 h-5" />
            <span>Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Link to={`/product/${product.id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="cyber-card group w-[300px] h-[460px] flex flex-col bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20   overflow-hidden hover:border-cyber-pink transition-colors"
        >
          {/* Image Container */}
          <div className="relative items-center flex justify-center   w-full overflow-hidden bg-white rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-36 h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
            />
            {imageError && (
              <div className="w-full h-full bg-cyber-black/30 flex items-center justify-center">
                <span className="text-cyber-light/60 font-tech">Image not available</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 to-transparent" />
            
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-4 right-4 bg-cyber-pink text-cyber-black px-3 py-1 text-sm font-bold font-tech">
                -{product.discount.percentage}%
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="flex-1 flex flex-col p-4">
            {/* Product Name */}
            <h3 className="text-cyber-light text-lg font-bold font-orbitron neon-text line-clamp-1">{product.name}</h3>

            {/* Category and Material */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-cyber-light/60 capitalize font-tech">{product.category}</span>
              <span className="text-sm text-cyber-light/40">•</span>
              <span className="text-sm text-cyber-light/60 font-tech">{product.material}</span>
            </div>
 

            {/* Rating and Likes */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(product.rating.stars)}</div>
                <span className="text-sm text-cyber-light/60 font-tech">({product.rating.count})</span>
              </div>
              <div className="flex items-center gap-1">
                <HeartIcon className="w-4 h-4 text-cyber-pink" />
                <span className="text-sm text-cyber-light/60 font-tech">{product.likes}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mt-2">
              {product.discount ? (
                <>
                  <span className="text-cyber-yellow text-xl font-bold font-orbitron">Rs {product.price.toFixed(2)}</span>
                  <span className="text-cyber-light/60 text-sm line-through font-tech">Rs {product.discount.originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-cyber-yellow text-xl font-bold font-orbitron">Rs {product.price.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-cyber-light/80 line-clamp-2 mt-2 font-tech">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mt-2">
              <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-cyber-blue' : 'bg-cyber-pink'}`} />
              <span className="text-sm text-cyber-light/60 font-tech">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="mt-auto w-full bg-cyber-blue text-cyber-black px-4 py-2 text-sm flex items-center justify-center gap-2 hover:bg-cyber-pink transition-colors font-tech  "
            >
              <ShoppingBagIcon className="w-4 h-4" />
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </Link>
    </>
  )
}

export default ProductCard 