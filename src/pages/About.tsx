import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,  
  StarIcon,
  HeartIcon,
  SparklesIcon,
  BoltIcon,
  CpuChipIcon,
  CommandLineIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline' 
import CategorySection from '../components/CategorySection'

const About = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Premium Quality',
      description: 'Our shirts are crafted with advanced materials and cutting-edge printing technology.'
    },
    {
      icon: StarIcon,
      title: 'Cyberpunk Design',
      description: 'Each piece features bold cyberpunk aesthetics with neon accents and tech-inspired patterns.'
    },
    {
      icon: HeartIcon,
      title: 'Style First',
      description: 'We create pieces that blend streetwear with high-tech fashion for the modern rebel.'
    },
    {
      icon: SparklesIcon,
      title: 'Unique Collection',
      description: 'From classic tees to innovative designs, we offer shirts that stand out in the digital age.'
    }
  ]

  const stats = [
    {
      icon: BoltIcon,
      title: 'Fast Delivery',
      value: '24-48h',
      description: 'Lightning-fast shipping worldwide'
    },
    {
      icon: CpuChipIcon,
      title: 'Quality Control',
      value: '100%',
      description: 'Rigorous quality checks'
    },
    {
      icon: CommandLineIcon,
      title: 'Tech Support',
      value: '24/7',
      description: 'Always here to help'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Innovation',
      value: '∞',
      description: 'Pushing fashion boundaries'
    }
  ]

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-none">
                  <span className="text-white">ABOUT</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]"> CYBER SHIRTS</span>
                </h1>
                <p className="text-xl text-white/60">
                  Your premier destination for premium cyberpunk streetwear. We combine cutting-edge design with comfort in every piece.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-black/50 backdrop-blur-sm p-6 border border-white/10 hover:border-[#00b8ff] transition-colors group"
                  >
                    <stat.icon className="w-8 h-8 text-[#00b8ff] mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-white">{stat.title}</h3>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-white/60">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-1 items-center"
              >
                <div>
                  <h2 className="text-3xl font-black mb-6 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]">Our Story</span>
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg mb-4 text-white/80">
                      Founded by cyberpunk enthusiasts, Cyber Shirts emerged from a vision to create premium streetwear that embodies the future of fashion.
                    </p>
                    <p className="text-lg mb-4 text-white/80">
                      What started as a collection of tech-inspired t-shirts has evolved into a comprehensive catalog featuring bold cyberpunk designs and innovative streetwear.
                    </p>
                    <p className="text-lg text-white/80">
                      Today, we're proud to offer a wide range of shirts, from classic designs to cutting-edge patterns, all while maintaining our commitment to quality and style.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10 hover:border-[#00b8ff] transition-colors"
                  >
                    <div className="p-6">
                      <feature.icon className="w-12 h-12 text-[#00b8ff] mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-black/50 backdrop-blur-sm p-8 md:p-12 text-center border border-white/10 hover:border-[#00b8ff] transition-colors"
              >
                <h2 className="text-3xl font-black mb-6 text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]">Our Mission</span>
                </h2>
                <p className="text-lg text-white/60 max-w-3xl mx-auto">
                  At Cyber Shirts, our mission is to bring the future of fashion to your wardrobe through high-quality, tech-inspired streetwear. We believe that your clothing should not only provide comfort but also express your connection to the digital age.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Collection Section */}
          <CategorySection />
        </motion.div>
      </div>
    </div>
  )
}

export default About 