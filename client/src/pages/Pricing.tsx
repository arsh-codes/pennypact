import {
    ArrowRight,
    BarChart3,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Coins,
    Crown,
    DollarSign,
    Download,
    Mail,
    Phone,
    Rocket,
    Shield,
    Star,
    Users,
    X,
    Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Pricing = () => {
    const [scrollY, setScrollY] = useState(0);
    const [billingCycle, setBillingCycle] = useState("annual");
    const [expandedFaq, setExpandedFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pricingPlans = [
        {
            name: "Free",
            icon: <Star className="w-6 h-6 text-yellow-400" />,
            monthlyPrice: "0",
            annualPrice: "0",
            description:
                "Perfect for getting started with basic expense tracking",
            features: [
                "Track up to 100 transactions/month",
                "3 spending categories",
                "Basic expense reports",
                "Mobile app access",
                "Email support",
            ],
            limitations: [
                "Limited transaction history (3 months)",
                "No advanced analytics",
                "No budget forecasting",
            ],
            ctaText: "Get Started Free",
            popular: false,
            color: "yellow",
        },
        {
            name: "Pro",
            icon: <Zap className="w-6 h-6 text-blue-400" />,
            monthlyPrice: "12",
            annualPrice: "120",
            description:
                "Ideal for individuals serious about financial planning",
            features: [
                "Unlimited transactions",
                "Unlimited categories",
                "Advanced analytics & insights",
                "Budget forecasting",
                "Goal tracking",
                "Export to Excel/PDF",
                "Priority email support",
                "Bank-level encryption",
            ],
            limitations: [],
            ctaText: "Start Pro Trial",
            popular: true,
            color: "blue",
        },
        {
            name: "Business",
            icon: <Crown className="w-6 h-6 text-purple-400" />,
            monthlyPrice: "29",
            annualPrice: "290",
            description: "For small businesses and teams managing finances",
            features: [
                "Everything in Pro",
                "Multi-user access (up to 5 users)",
                "Team collaboration tools",
                "Business expense categories",
                "Advanced reporting dashboard",
                "API access",
                "Dedicated account manager",
                "Phone & email support",
                "Custom integrations",
            ],
            limitations: [],
            ctaText: "Start Business Trial",
            popular: false,
            color: "purple",
        },
    ];

    const faqs = [
        {
            question: "Can I change my plan at any time?",
            answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
        },
        {
            question: "Is there a free trial available?",
            answer: "All paid plans come with a 30-day free trial. No credit card required to start your trial.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
        },
        {
            question: "Is my financial data secure?",
            answer: "Absolutely. We use bank-level encryption and security measures. Your data is never shared with third parties.",
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
        },
        {
            question: "Do you offer student discounts?",
            answer: "Yes! Students get 50% off Pro plans with a valid student email address. Contact support to apply your discount.",
        },
    ];

    const getPrice = (plan) => {
        return billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
    };

    const getSavings = (plan) => {
        const monthlyTotal = parseInt(plan.monthlyPrice) * 12;
        const annualPrice = parseInt(plan.annualPrice);
        return monthlyTotal - annualPrice;
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-zinc-950 to-emerald-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700/50 mb-8"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`,
                            }}
                        >
                            <DollarSign className="w-4 h-4 text-emerald-400 mr-2" />
                            <span className="text-sm text-zinc-300">
                                Simple, Transparent Pricing
                            </span>
                        </div>

                        <h1
                            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{
                                transform: `translateY(${scrollY * 0.2}px)`,
                            }}
                        >
                            Choose Your
                            <span className="block bg-gradient-to-r from-blue-400 via-emerald-500 to-purple-500 bg-clip-text text-transparent">
                                Perfect Plan
                            </span>
                        </h1>

                        <p
                            className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                            style={{
                                transform: `translateY(${scrollY * 0.15}px)`,
                            }}
                        >
                            Start free and scale as you grow. All plans include
                            our core features with no hidden fees or surprises.
                        </p>

                        <div
                            className="flex items-center justify-center mb-12"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`,
                            }}
                        >
                            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-1 border border-zinc-700/50">
                                <button
                                    onClick={() => setBillingCycle("monthly")}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                        billingCycle === "monthly"
                                            ? "bg-emerald-600 text-white shadow-lg"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setBillingCycle("annual")}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                                        billingCycle === "annual"
                                            ? "bg-emerald-600 text-white shadow-lg"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    Annual
                                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                        Save 17%
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                                    plan.popular
                                        ? "border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-105"
                                        : "border-zinc-800/50 hover:border-zinc-700/50"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-800/50 rounded-2xl mb-4">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-zinc-400 mb-6">
                                        {plan.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl lg:text-5xl font-bold">
                                                ${getPrice(plan)}
                                            </span>
                                            <span className="text-zinc-400 ml-2">
                                                /
                                                {billingCycle === "annual"
                                                    ? "year"
                                                    : "month"}
                                            </span>
                                        </div>
                                        {billingCycle === "annual" &&
                                            plan.monthlyPrice !== "0" && (
                                                <div className="text-sm text-emerald-400 mt-2">
                                                    Save ${getSavings(plan)} per
                                                    year
                                                </div>
                                            )}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-start"
                                            >
                                                <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-zinc-300">
                                                    {feature}
                                                </span>
                                            </div>
                                        )
                                    )}
                                    {plan.limitations.map(
                                        (limitation, limitIndex) => (
                                            <div
                                                key={limitIndex}
                                                className="flex items-start"
                                            >
                                                <X className="w-5 h-5 text-zinc-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-zinc-500">
                                                    {limitation}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>

                                <button
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
                                        plan.popular
                                            ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                            : plan.name === "Free"
                                              ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                                              : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25"
                                    }`}
                                >
                                    {plan.ctaText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Section */}
            <section className="py-20 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Need Something Custom?
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            For large organizations with specific requirements,
                            we offer enterprise solutions.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl p-8 lg:p-12 border border-purple-500/20">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                                        <Rocket className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        Enterprise
                                    </h3>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                                        <span>
                                            Unlimited users and transactions
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                                        <span>
                                            Custom integrations and APIs
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                                        <span>White-label solutions</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                                        <span>24/7 dedicated support</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                                        <span>
                                            On-premise deployment options
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                <div className="text-4xl font-bold mb-4">
                                    Custom Pricing
                                </div>
                                <p className="text-zinc-400 mb-6">
                                    Tailored solutions for your organization's
                                    needs
                                </p>
                                <div className="space-y-4">
                                    <button className="w-full lg:w-auto bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-purple-600/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Contact Sales
                                    </button>
                                    <div className="flex items-center justify-center lg:justify-start text-zinc-400">
                                        <Phone className="w-4 h-4 mr-2" />
                                        <span>Or call: +1 (555) 123-4567</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-zinc-400">
                            Everything you need to know about our pricing and
                            plans
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                                >
                                    <h3 className="text-lg font-semibold text-white">
                                        {faq.question}
                                    </h3>
                                    <div className="ml-4 flex-shrink-0">
                                        {expandedFaq === index ? (
                                            <ChevronUp className="w-5 h-5 text-emerald-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-zinc-400" />
                                        )}
                                    </div>
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-8 pb-6">
                                        <p className="text-zinc-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
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

export default Pricing;
