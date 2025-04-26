
import FeaturedProducts from '../components/FeaturedProducts'
import Newsletter from '../components/Newsletter'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
const Home = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <FeaturedProducts />
 
    <CategorySection />
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default Home 