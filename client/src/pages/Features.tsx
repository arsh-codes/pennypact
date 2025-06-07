import {
    ArrowRight,
    BarChart3,
    Bell,
    Brain,
    CheckCircle,
    ChevronRight,
    CreditCard,
    DollarSign,
    Eye,
    Globe,
    Lock,
    PieChart,
    Shield,
    Smartphone,
    Star,
    Target,
    TrendingUp,
    Users,
    Wallet,
    Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Features = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mainFeatures = [
        {
            icon: <Brain className="w-12 h-12 text-emerald-400" />,
            title: "AI-Powered Insights",
            subtitle: "Smart Financial Intelligence",
            description:
                "Our advanced AI analyzes your spending patterns, identifies trends, and provides personalized recommendations to optimize your financial health.",
            benefits: [
                "Predictive spending alerts",
                "Personalized saving opportunities",
                "Smart category suggestions",
                "Automated financial coaching",
            ],
        },
        {
            icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
            title: "Advanced Analytics",
            subtitle: "Beautiful Data Visualization",
            description:
                "Transform complex financial data into stunning, easy-to-understand charts and graphs that reveal insights at a glance.",
            benefits: [
                "Interactive spending charts",
                "Monthly trend analysis",
                "Category breakdown views",
                "Custom reporting tools",
            ],
        },
        {
            icon: <Target className="w-12 h-12 text-purple-400" />,
            title: "Goal Tracking",
            subtitle: "Achieve Your Dreams",
            description:
                "Set ambitious financial goals and watch as PennyPact helps you achieve them with smart planning and progress tracking.",
            benefits: [
                "Visual progress indicators",
                "Milestone celebrations",
                "Smart savings automation",
                "Goal adjustment recommendations",
            ],
        },
        {
            icon: <Shield className="w-12 h-12 text-red-400" />,
            title: "Bank-Level Security",
            subtitle: "Fort Knox Protection",
            description:
                "Your financial data is protected with military-grade encryption and security protocols trusted by major financial institutions.",
            benefits: [
                "256-bit SSL encryption",
                "Two-factor authentication",
                "Biometric login support",
                "SOC 2 Type II compliant",
            ],
        },
    ];

    const detailedFeatures = [
        {
            category: "Smart Budgeting",
            icon: <Wallet className="w-8 h-8 text-emerald-400" />,
            features: [
                {
                    name: "Intelligent Budget Creation",
                    description:
                        "AI analyzes your income and spending to create optimal budgets automatically.",
                },
                {
                    name: "Dynamic Budget Adjustments",
                    description:
                        "Budgets that adapt to your lifestyle changes and spending patterns.",
                },
                {
                    name: "Envelope Budgeting",
                    description:
                        "Traditional envelope method with modern digital convenience.",
                },
                {
                    name: "Budget Variance Alerts",
                    description:
                        "Get notified when you're approaching or exceeding budget limits.",
                },
            ],
        },
        {
            category: "Expense Tracking",
            icon: <CreditCard className="w-8 h-8 text-blue-400" />,
            features: [
                {
                    name: "Automatic Transaction Import",
                    description:
                        "Connect your accounts for seamless expense tracking across all platforms.",
                },
                {
                    name: "Smart Categorization",
                    description:
                        "AI automatically categorizes transactions with 99% accuracy.",
                },
                {
                    name: "Receipt Scanning",
                    description:
                        "Snap photos of receipts for instant expense logging and storage.",
                },
                {
                    name: "Subscription Tracking",
                    description:
                        "Never miss a subscription renewal with automated tracking and alerts.",
                },
            ],
        },
        {
            category: "Analytics & Insights",
            icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
            features: [
                {
                    name: "Spending Trends Analysis",
                    description:
                        "Identify patterns and trends in your spending behavior over time.",
                },
                {
                    name: "Cash Flow Forecasting",
                    description:
                        "Predict future cash flow based on historical data and trends.",
                },
                {
                    name: "Custom Reports",
                    description:
                        "Generate detailed reports tailored to your specific needs.",
                },
                {
                    name: "Comparative Analysis",
                    description:
                        "Compare your spending across different time periods and categories.",
                },
            ],
        },
        {
            category: "Security & Privacy",
            icon: <Lock className="w-8 h-8 text-red-400" />,
            features: [
                {
                    name: "End-to-End Encryption",
                    description:
                        "All data is encrypted both in transit and at rest using AES-256.",
                },
                {
                    name: "Biometric Authentication",
                    description:
                        "Secure access with fingerprint and facial recognition technology.",
                },
                {
                    name: "Privacy Controls",
                    description:
                        "Granular privacy settings to control what data is shared and when.",
                },
                {
                    name: "Audit Logs",
                    description:
                        "Complete audit trail of all account access and data modifications.",
                },
            ],
        },
    ];

    const integrations = [
        { name: "Chase Bank", logo: "🏦" },
        { name: "Bank of America", logo: "🏛️" },
        { name: "Wells Fargo", logo: "🏪" },
        { name: "American Express", logo: "💳" },
        { name: "PayPal", logo: "💰" },
        { name: "Venmo", logo: "📱" },
        { name: "Mint", logo: "🌿" },
        { name: "Quicken", logo: "📊" },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-blue-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700/50 mb-8"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`,
                            }}
                        >
                            <Zap className="w-4 h-4 text-emerald-400 mr-2" />
                            <span className="text-sm text-zinc-300">
                                Powerful Features
                            </span>
                        </div>

                        <h1
                            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{
                                transform: `translateY(${scrollY * 0.15}px)`,
                            }}
                        >
                            Everything You Need to
                            <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Master Your Money
                            </span>
                        </h1>

                        <p
                            className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`,
                            }}
                        >
                            Discover the comprehensive suite of tools and
                            features that make PennyPact the most powerful
                            personal finance platform available.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Features Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {mainFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={`relative group ${index % 2 === 1 ? "lg:mt-16" : ""}`}
                            >
                                <div className="relative p-8 lg:p-12 bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative">
                                        <div className="flex items-center mb-6">
                                            <div className="p-4 bg-zinc-800/50 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm text-zinc-400 mb-1">
                                                    {feature.subtitle}
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-bold">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                                            {feature.description}
                                        </p>

                                        <div className="space-y-3">
                                            {feature.benefits.map(
                                                (benefit, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center"
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                                                        <span className="text-zinc-300">
                                                            {benefit}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Features - Redesigned */}
            <section className="py-20 lg:py-32 bg-zinc-900/20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Complete Feature
                            <span className="block bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                                Arsenal
                            </span>
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                            Discover every powerful tool designed to transform
                            your financial journey from chaos to complete
                            control.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {detailedFeatures.map((category, index) => (
                            <div key={index} className="group">
                                {/* Category Header */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 p-8 bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800/50 group-hover:border-zinc-700/50 transition-all duration-300">
                                    <div className="flex items-center mb-4 sm:mb-0">
                                        <div className="p-4 bg-zinc-800/50 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                                                {category.category}
                                            </h3>
                                            <p className="text-zinc-400">
                                                Essential tools for this
                                                category
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-emerald-400 group-hover:translate-x-2 transition-transform duration-300">
                                        <span className="text-sm font-medium mr-2">
                                            {category.features.length} Features
                                        </span>
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Features Grid */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {category.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="group/item relative overflow-hidden"
                                        >
                                            <div className="p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1 h-full">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-500 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></div>

                                                <div className="flex items-start justify-between mb-4">
                                                    <h4 className="text-xl font-semibold text-white group-hover/item:text-emerald-400 transition-colors duration-300 pr-4">
                                                        {feature.name}
                                                    </h4>
                                                    <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 mt-2"></div>
                                                </div>

                                                <p className="text-zinc-400 leading-relaxed text-lg">
                                                    {feature.description}
                                                </p>

                                                <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0">
                                                    <span className="text-sm font-medium">
                                                        Learn more
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Count Summary */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-zinc-700/50">
                            <Star className="w-6 h-6 text-emerald-400 mr-3" />
                            <span className="text-lg font-semibold">
                                <span className="text-emerald-400">16+</span>{" "}
                                powerful features across 4 categories
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 lg:py-32 bg-zinc-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-emerald-700/50 transition-all duration-300 group-hover:-translate-y-2">
                                <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">
                                    99.9%
                                </div>
                                <div className="text-xl font-semibold mb-2">
                                    Uptime
                                </div>
                                <div className="text-zinc-400">
                                    Always available when you need it
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-blue-700/50 transition-all duration-300 group-hover:-translate-y-2">
                                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                                    &lt; 1s
                                </div>
                                <div className="text-xl font-semibold mb-2">
                                    Sync Time
                                </div>
                                <div className="text-zinc-400">
                                    Lightning-fast transaction updates
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-purple-700/50 transition-all duration-300 group-hover:-translate-y-2">
                                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                                    24/7
                                </div>
                                <div className="text-xl font-semibold mb-2">
                                    Support
                                </div>
                                <div className="text-zinc-400">
                                    Expert help whenever you need it
                                </div>
                            </div>
                        </div>
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
                        Experience All Features
                        <span className="block text-emerald-400">
                            Risk-Free
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Try every feature mentioned above with our 30-day free
                        trial. No commitments, no credit card required.
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        <a
                            href="/signup"
                            className="group bg-emerald-600 hover:bg-emerald-500 px-10 py-5 rounded-xl font-semibold text-lg text-white shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center hover:-translate-y-1"
                        >
                            Start Your Free Trial
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center space-x-2 text-zinc-400">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span>
                                30-day free trial • No credit card required •
                                Cancel anytime
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

export default Features;
