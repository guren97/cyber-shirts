import { motion } from 'framer-motion'
import { TruckIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const ShippingInfo = () => {
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

            <div className="container mx-auto px-4 py-12 mt-20 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl lg:text-5xl font-black mb-4 font-orbitron">
                        <span className="text-cyber-light">SHIPPING</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink"> INFORMATION</span>
                    </h1>
                    <p className="text-cyber-light/60 max-w-2xl mx-auto font-tech">
                        Everything you need to know about our shipping process, delivery times, and tracking your order.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Shipping Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-cyber-black/50 backdrop-blur-sm rounded-2xl border border-cyber-blue/20 p-6 hover:border-cyber-blue transition-colors"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyber-light font-orbitron">
                            <TruckIcon className="w-6 h-6 text-cyber-blue" />
                            Shipping Methods
                        </h2>
                        <div className="space-y-4">
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Standard Shipping</h3>
                                <p className="text-cyber-light/60 mb-2 font-tech">3-5 business days</p>
                                <p className="text-cyber-light/60 font-tech">Free on orders over Rs. 16259</p>
                            </div>
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Express Shipping</h3>
                                <p className="text-cyber-light/60 mb-2 font-tech">1-2 business days</p>
                                <p className="text-cyber-light/60 font-tech">Rs. 8300 flat rate</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Delivery Times */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-cyber-black/50 backdrop-blur-sm rounded-2xl border border-cyber-blue/20 p-6 hover:border-cyber-blue transition-colors"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyber-light font-orbitron">
                            <ClockIcon className="w-6 h-6 text-cyber-blue" />
                            Delivery Times
                        </h2>
                        <div className="space-y-4">
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Processing Time</h3>
                                <p className="text-cyber-light/60 font-tech">Orders are processed within 24 hours of placement</p>
                            </div>
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Delivery Windows</h3>
                                <p className="text-cyber-light/60 font-tech">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                <p className="text-cyber-light/60 font-tech">Sunday: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tracking Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-cyber-black/50 backdrop-blur-sm rounded-2xl border border-cyber-blue/20 p-6 hover:border-cyber-blue transition-colors"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyber-light font-orbitron">
                            <ArrowPathIcon className="w-6 h-6 text-cyber-blue" />
                            Track Your Order
                        </h2>
                        <div className="space-y-4">
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Tracking Number</h3>
                                <p className="text-cyber-light/60 mb-4 font-tech">You'll receive your tracking number via email once your order ships</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter tracking number"
                                        className="flex-1 px-4 py-2 rounded-lg bg-cyber-black/50 backdrop-blur-sm border border-cyber-blue/20 text-cyber-light placeholder-cyber-light/40 focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue font-tech"
                                    />
                                    <button className="bg-cyber-blue text-cyber-black px-6 py-2 rounded-lg hover:bg-cyber-pink transition-colors font-tech">
                                        Track
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Shipping Coverage */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-cyber-black/50 backdrop-blur-sm rounded-2xl border border-cyber-blue/20 p-6 hover:border-cyber-blue transition-colors"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyber-light font-orbitron">
                            <MapPinIcon className="w-6 h-6 text-cyber-blue" />
                            Shipping Coverage
                        </h2>
                        <div className="space-y-4">
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Domestic Shipping</h3>
                                <p className="text-cyber-light/60 font-tech">We ship to all major cities and towns across Pakistan</p>
                            </div>
                            <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                                <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">International Shipping</h3>
                                <p className="text-cyber-light/60 font-tech">Currently available to select countries. Contact us for details.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 bg-cyber-black/50 backdrop-blur-sm rounded-2xl border border-cyber-blue/20 p-6 hover:border-cyber-blue transition-colors"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyber-light font-orbitron">
                        <ShieldCheckIcon className="w-6 h-6 text-cyber-blue" />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                            <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">What happens if I'm not home during delivery?</h3>
                            <p className="text-cyber-light/60 font-tech">Our delivery partner will attempt to deliver your package up to 3 times. If unsuccessful, you can collect it from the nearest delivery center.</p>
                        </div>
                        <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                            <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">Can I change my delivery address?</h3>
                            <p className="text-cyber-light/60 font-tech">Yes, you can update your delivery address within 24 hours of placing your order by contacting our customer service.</p>
                        </div>
                        <div className="border border-cyber-blue/20 rounded-lg p-4 hover:border-cyber-blue transition-colors">
                            <h3 className="font-semibold text-lg mb-2 text-cyber-light font-orbitron">What's your return policy?</h3>
                            <p className="text-cyber-light/60 font-tech">We offer a 30-day return policy for all unused items in their original packaging. Return shipping is free for defective items.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Support */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 text-center"
                >
                    <h2 className="text-2xl font-bold mb-4 text-cyber-light font-orbitron">Need Help?</h2>
                    <p className="text-cyber-light/60 mb-6 font-tech">
                        Our customer service team is here to help with any shipping-related questions.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyber-blue text-cyber-black px-8 py-3 rounded-lg hover:bg-cyber-pink transition-colors font-tech"
                        >
                            Contact Support
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default ShippingInfo 