import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon, 
  ClockIcon,
  XMarkIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'support@cyber-shirts.shop',
      link: 'mailto:support@cyber-shirts.shop'
    }, 
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Cyberpunk Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
        {/* Cyberpunk Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00b8ff 1px, transparent 1px),
            linear-gradient(to bottom, #00b8ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 mt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#00b8ff] opacity-10 blur-3xl" />
            <div className="absolute -top-10 right-1/4 w-32 h-32 bg-[#b026ff] opacity-10 blur-3xl" />
            
            <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-none relative">
              <span className="text-white">GET IN</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]"> TOUCH</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Contact Information - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="cyber-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]">
                  Contact Information
                </h2>
                <p className="text-white/60 mb-6">
                  We're here to help! Whether you have questions about our products, need assistance with an order, or just want to share your style preferences, we're ready to assist you.
                </p>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-black/30 hover:bg-black/40 transition-colors"
                    >
                      <div className="p-2 bg-[#00b8ff]/10">
                        <info.icon className="w-6 h-6 text-[#00b8ff]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-white/60">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="cyber-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]">
                  Quick Links
                </h2>
                <div className="space-y-2">
                  <a href="/faq" className="block text-white/60 hover:text-white transition-colors">
                    Frequently Asked Questions
                  </a>
                  <a href="/shipping" className="block text-white/60 hover:text-white transition-colors">
                    Shipping Information
                  </a>
                  <a href="/returns" className="block text-white/60 hover:text-white transition-colors">
                    Returns & Exchanges
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="cyber-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#00b8ff]" />
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b8ff] to-[#b026ff]">
                    Send us a Message
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <UserCircleIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00b8ff] opacity-50" />
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-cyber-black/50 border-2 border-cyber-blue text-cyber-light placeholder-cyber-light/40 focus:border-cyber-pink focus:ring-1 focus:ring-cyber-pink transition-colors font-tech"
                          required
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00b8ff] opacity-50" />
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-cyber-black/50 border-2 border-cyber-blue text-cyber-light placeholder-cyber-light/40 focus:border-cyber-pink focus:ring-1 focus:ring-cyber-pink transition-colors font-tech bg-cyber-black/50"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/60 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-black/50 border-2 border-cyber-blue text-cyber-light placeholder-cyber-light/40 focus:border-cyber-pink focus:ring-1 focus:ring-cyber-pink transition-colors font-tech"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-cyber-black/50 border-2 border-cyber-blue text-cyber-light placeholder-cyber-light/40 focus:border-cyber-pink focus:ring-1 focus:ring-cyber-pink transition-colors font-tech"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full bg-[#00b8ff] text-black py-3 px-6 font-semibold hover:bg-[#b026ff] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
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
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cyber-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="cyber-card p-6 rounded-lg max-w-md w-full relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-cyber-light/60 hover:text-cyber-blue transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyber-light mb-4 font-orbitron">Message Sent Successfully!</h3>
                <p className="text-cyber-light/60 mb-6 font-tech">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccess(false)}
                  className="bg-cyber-blue text-cyber-black font-bold px-6 py-2 text-sm hover:bg-cyber-pink transition-colors font-tech"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default Contact 