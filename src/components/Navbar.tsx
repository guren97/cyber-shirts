import { Link } from 'react-router-dom'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../store/useStore'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const cartItems = useStore((state) => state.cart)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/all-products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className="relative z-50">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-cyber-black/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-cyber-pink/10 to-cyber-blue/10" />
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
            </div>

            {/* Glowing Border */}
            <div className="absolute inset-0 border-b border-cyber-blue/20 shadow-[0_0_15px_rgba(0,184,255,0.1)]" />

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="relative z-10 flex items-center group">
                        <motion.span 
                            className="text-2xl font-black font-orbitron"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-cyber-blue group-hover:text-cyber-pink transition-colors">CYBER</span>
                            <span className="text-cyber-pink group-hover:text-cyber-blue transition-colors">SHIRTS</span>
                        </motion.span>
                        <motion.div
                            className="absolute -inset-1 bg-cyber-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="relative group text-cyber-light/80 hover:text-cyber-blue transition-colors font-tech"
                            >
                                {link.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform"
                                    initial={false}
                                />
                            </Link>
                        ))}
                        <Link to="/cart" className="relative group">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ShoppingCartIcon className="w-6 h-6 text-cyber-light/80 group-hover:text-cyber-blue transition-colors" />
                                {cartItems.length > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2 bg-cyber-pink text-cyber-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-tech"
                                    >
                                        {cartItems.length}
                                    </motion.span>
                                )}
                            </motion.div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden relative z-10 text-cyber-light/80 hover:text-cyber-blue transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden absolute top-20 left-0 right-0 bg-cyber-black/80 backdrop-blur-sm border-t border-cyber-blue/20"
                        >
                            <div className="py-6 space-y-6">
                                {/* Main Navigation */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-cyber-light/40 uppercase tracking-wider px-4 font-tech">Menu</h3>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="flex items-center text-cyber-light/80 hover:text-cyber-blue transition-colors font-tech px-4 py-2 hover:bg-cyber-blue/5"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Cart */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-cyber-light/40 uppercase tracking-wider px-4 font-tech">Cart</h3>
                                    <Link
                                        to="/cart"
                                        className="flex items-center text-cyber-light/80 hover:text-cyber-blue transition-colors font-tech px-4 py-2 hover:bg-cyber-blue/5"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <ShoppingCartIcon className="w-5 h-5" />
                                        <span className="ml-3">Shopping Cart</span>
                                        {cartItems.length > 0 && (
                                            <span className="ml-auto bg-cyber-pink text-cyber-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-tech">
                                                {cartItems.length}
                                            </span>
                                        )}
                                    </Link>
                                </div>

                                {/* Contact Info */}
                                <div className="px-4 py-4 border-t border-cyber-blue/20">
                                    <p className="text-sm text-cyber-light/60 font-tech">Need help?</p>
                                    <a href="mailto:support@cybershirts.com" className="text-sm text-cyber-blue hover:text-cyber-pink font-tech">
                                        support@cybershirts.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar 