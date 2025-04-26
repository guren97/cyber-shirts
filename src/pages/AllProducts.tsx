import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { 
  ShoppingBagIcon,
  StarIcon,
  FireIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const ITEMS_PER_PAGE = 9

const AllProducts = () => {
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRating, setSelectedRating] = useState('all')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 25000 })

  // Get filter from URL
  const filterFromUrl = searchParams.get('filter') || 'all'

  // Apply filter from URL
  useEffect(() => {
    switch (filterFromUrl) {
      case 'new':
        setSortBy('newest')
        break
      case 'bestsellers':
        setSortBy('rating')
        break
      default:
        setSortBy('featured')
    }
  }, [filterFromUrl])

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(product => product.category)))

  // Calculate statistics
  const totalProducts = products.length
  const averagePrice = products.reduce((acc, product) => acc + product.price, 0) / totalProducts
  const averageRating = products.reduce((acc, product) => acc + product.rating.stars, 0) / totalProducts
  const totalLikes = products.reduce((acc, product) => acc + product.likes, 0)

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      
      // Price range filter
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max
      
      // Rating filter
      const ratingMatch = selectedRating === 'all' || 
        (selectedRating === '5' && product.rating.stars >= 4.5) ||
        (selectedRating === '4' && product.rating.stars >= 4.0) ||
        (selectedRating === '3' && product.rating.stars >= 3.0) ||
        (selectedRating === '2' && product.rating.stars >= 2.0) ||
        (selectedRating === '1' && product.rating.stars >= 1.0)

      return categoryMatch && priceMatch && ratingMatch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating.stars - a.rating.stars
        case 'newest':
          return b.id.localeCompare(a.id)
        default:
          return 0
      }
    })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
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

      <div className="container mx-auto px-2 py-8 mt-16 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-orbitron mb-3 tracking-tighter leading-none">
            <span className="text-cyber-light">ALL</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink"> PRODUCTS</span>
          </h1>
          <p className="text-cyber-light/60 max-w-2xl mx-auto font-tech">
            Discover our complete collection of premium cyberpunk streetwear.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 text-center"
          >
            <ShoppingBagIcon className="w-8 h-8 text-cyber-blue mx-auto mb-2" />
            <h3 className="text-cyber-light font-orbitron text-2xl">{totalProducts}</h3>
            <p className="text-cyber-light/60 font-tech">Total Products</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 text-center"
          >
            <CurrencyDollarIcon className="w-8 h-8 text-cyber-yellow mx-auto mb-2" />
            <h3 className="text-cyber-light font-orbitron text-2xl">Rs {averagePrice.toFixed(0)}</h3>
            <p className="text-cyber-light/60 font-tech">Average Price</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 text-center"
          >
            <StarIcon className="w-8 h-8 text-cyber-yellow mx-auto mb-2" />
            <h3 className="text-cyber-light font-orbitron text-2xl">{averageRating.toFixed(1)}</h3>
            <p className="text-cyber-light/60 font-tech">Average Rating</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 text-center"
          >
            <FireIcon className="w-8 h-8 text-cyber-pink mx-auto mb-2" />
            <h3 className="text-cyber-light font-orbitron text-2xl">{totalLikes}</h3>
            <p className="text-cyber-light/60 font-tech">Total Likes</p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="flex gap-4">
          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex flex-col items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 text-cyber-light focus:border-cyber-pink focus:outline-none focus:ring-1 focus:ring-cyber-pink font-tech"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              <p className="text-cyber-light/60 text-center font-tech">
                Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg font-tech ${
                      currentPage === index + 1
                        ? 'bg-cyber-pink text-cyber-black'
                        : 'bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 text-cyber-light/60 hover:text-cyber-light hover:border-cyber-pink'
                    } transition-colors`}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Filters Sidebar */}
          <div className="hidden lg:block w-72 space-y-6">
            {/* Category Filter */}
            <div className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-4">
              <h3 className="text-cyber-light font-orbitron mb-4">Category</h3>
              <div className="space-y-2">
                {['all', ...categories].map((category) => (
                  <label key={category} className="flex items-center gap-2 text-cyber-light/60 hover:text-cyber-light cursor-pointer font-tech">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-cyber-pink focus:ring-cyber-pink"
                    />
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-4">
              <h3 className="text-cyber-light font-orbitron mb-4">Rating</h3>
              <div className="space-y-2">
                {['all', '5', '4', '3', '2', '1'].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 text-cyber-light/60 hover:text-cyber-light cursor-pointer font-tech">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={selectedRating === rating}
                      onChange={(e) => setSelectedRating(e.target.value)}
                      className="text-cyber-pink focus:ring-cyber-pink"
                    />
                    {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                  </label>
                ))}
              </div>
              <div className="mt-4 text-sm text-cyber-light/40 font-tech">
                {filteredProducts.length} products found
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-4 sticky top-20">
              <h3 className="text-cyber-light font-orbitron mb-6">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-cyber-light/60 font-tech">Min: Rs {priceRange.min}</span>
                  <span className="text-cyber-light/60 font-tech">Max: Rs {priceRange.max}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25000"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                  className="w-full h-2 bg-cyber-blue/20 rounded-lg appearance-none cursor-pointer accent-cyber-pink"
                />
                <input
                  type="range"
                  min="0"
                  max="25000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                  className="w-full h-2 bg-cyber-blue/20 rounded-lg appearance-none cursor-pointer accent-cyber-pink"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    onClick={() => setPriceRange({ min: 0, max: 5000 })}
                    className="px-4 py-2 rounded-lg bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light/60 hover:text-cyber-light hover:border-cyber-pink transition-colors font-tech"
                  >
                    Under Rs. 5000
                  </button>
                  <button
                    onClick={() => setPriceRange({ min: 5000, max: 10000 })}
                    className="px-4 py-2 rounded-lg bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light/60 hover:text-cyber-light hover:border-cyber-pink transition-colors font-tech"
                  >
                    Rs. 5000 - 10000
                  </button>
                  <button
                    onClick={() => setPriceRange({ min: 10000, max: 15000 })}
                    className="px-4 py-2 rounded-lg bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light/60 hover:text-cyber-light hover:border-cyber-pink transition-colors font-tech"
                  >
                    Rs. 10000 - 15000
                  </button>
                  <button
                    onClick={() => setPriceRange({ min: 15000, max: 25000 })}
                    className="px-4 py-2 rounded-lg bg-cyber-black/50 border border-cyber-blue/20 text-cyber-light/60 hover:text-cyber-light hover:border-cyber-pink transition-colors font-tech"
                  >
                    Over Rs. 15000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts 