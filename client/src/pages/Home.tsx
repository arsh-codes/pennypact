import {
    ArrowRight,
    BarChart3,
    CheckCircle,
    Coins,
    DollarSign,
    Play,
    Shield,
    Smartphone,
    Star,
    TrendingUp,
    Wallet,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import DashboardPreview from "@/components/DashboardPreview";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const features = [
        {
            icon: <Wallet className="w-8 h-8 text-emerald-400" />,
            title: "Smart Budgeting",
            description:
                "AI-powered insights to optimize your spending and reach financial goals faster.",
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
            title: "Real-time Analytics",
            description:
                "Beautiful visualizations that make understanding your finances effortless.",
        },
        {
            icon: <Shield className="w-8 h-8 text-purple-400" />,
            title: "Bank-level Security",
            description:
                "Your financial data is protected with enterprise-grade encryption.",
        },
        {
            icon: <Smartphone className="w-8 h-8 text-pink-400" />,
            title: "Cross-platform Sync",
            description:
                "Access your finances anywhere, anytime with seamless synchronization.",
        },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            content:
                "PennyPact transformed how I manage my finances. The insights are incredible!",
            rating: 5,
        },
        {
            name: "Mike Chen",
            role: "Entrepreneur",
            content:
                "Finally, an expense tracker that's both powerful and beautiful to use.",
            rating: 5,
        },
        {
            name: "Emily Davis",
            role: "Designer",
            content:
                "The user experience is flawless. I've recommended it to all my friends.",
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-blue-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="text-center">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700/50 mb-8"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`,
                            }}
                        >
                            <TrendingUp className="w-4 h-4 text-emerald-400 mr-2" />
                            <span className="text-sm text-zinc-300">
                                Track. Analyze. Optimize.
                            </span>
                        </div>

                        <h1
                            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{
                                transform: `translateY(${scrollY * 0.2}px)`,
                            }}
                        >
                            Master Your
                            <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Financial Future
                            </span>
                        </h1>

                        <p
                            className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                            style={{
                                transform: `translateY(${scrollY * 0.15}px)`,
                            }}
                        >
                            PennyPact combines intelligent expense tracking with
                            beautiful design to give you complete control over
                            your finances. Make every penny count.
                        </p>

                        <div
                            className="flex flex-col items-center justify-center space-y-6"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`,
                            }}
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <a
                                    href="/signup"
                                    className="group bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center hover:-translate-y-1"
                                >
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#features"
                                    className="group px-8 py-4 rounded-xl font-semibold text-lg border-2 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 flex items-center hover:-translate-y-1"
                                >
                                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    View Features
                                </a>
                            </div>

                            <div className="flex items-center justify-center space-x-2 text-zinc-400">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm">
                                    30-day free trial • No credit card required
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Why Choose
                            <span className="text-emerald-400"> PennyPact</span>
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Powerful features designed to simplify your
                            financial life and accelerate your goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="mb-6 p-3 bg-zinc-800/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Preview - Now using the component */}
            <DashboardPreview />

            {/* Testimonials */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Loved by Users
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Join thousands of satisfied users who've transformed
                            their financial lives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="text-zinc-300 mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-semibold">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-zinc-400 text-sm">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-blue-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Ready to Take
                        <span className="block text-blue-400">Control?</span>
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Start your journey to financial freedom today. No credit
                        card required.
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        <a
                            href="/signup"
                            className="group bg-blue-500 hover:bg-blue-600 px-10 py-5 rounded-xl font-semibold text-lg text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center hover:-translate-y-1"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center space-x-2 text-zinc-400">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span>
                                30-day free trial • No credit card required
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className="border-t border-zinc-800/50 py-8 text-center text-zinc-500">
                <p>&copy; 2025 PennyPact. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
