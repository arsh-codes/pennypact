import { Coins, DollarSign, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { to: "/features", label: "Features" },
        { to: "/pricing", label: "Pricing" },
        { to: "/about", label: "About" }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="flex items-center space-x-3 hover:opacity-90 transition-opacity group"
                        onClick={closeMenu}
                    >
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/40 transition-all duration-300">
                                <Coins className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                <DollarSign className="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                        <div>
                            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                                PENNY
                            </span>
                            <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-400">
                                PACT
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`relative font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                                    isActive(link.to)
                                        ? 'text-emerald-400'
                                        : 'text-zinc-300 hover:text-white'
                                }`}
                            >
                                {link.label}
                                {isActive(link.to) && (
                                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                        
                        <Link
                            to="/login"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-2.5 rounded-xl font-semibold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-colors text-zinc-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/50">
                    <div className="px-4 py-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive(link.to)
                                        ? 'text-emerald-400 bg-emerald-500/10 border-l-4 border-emerald-400'
                                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
                                }`}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <div className="pt-4">
                            <Link
                                to="/login"
                                className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-3 rounded-xl font-semibold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 text-center"
                                onClick={closeMenu}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;