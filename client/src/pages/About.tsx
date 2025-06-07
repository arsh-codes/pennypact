import {
    ArrowRight,
    Award,
    CheckCircle,
    Coins,
    DollarSign,
    Globe,
    Heart,
    Lightbulb,
    Shield,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const values = [
        {
            icon: <Shield className="w-8 h-8 text-blue-400" />,
            title: "Security First",
            description:
                "Your financial data deserves the highest level of protection. We use bank-grade encryption and never compromise on security.",
        },
        {
            icon: <Heart className="w-8 h-8 text-pink-400" />,
            title: "User-Centric",
            description:
                "Every feature is designed with you in mind. We listen to our community and build solutions that truly make a difference.",
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
            title: "Innovation",
            description:
                "We're constantly pushing boundaries to bring you the most advanced financial tools in the simplest, most intuitive way.",
        },
        {
            icon: <Globe className="w-8 h-8 text-green-400" />,
            title: "Accessibility",
            description:
                "Financial wellness should be available to everyone. We're committed to making PennyPact accessible to users worldwide.",
        },
    ];

    const stats = [
        { number: "500K+", label: "Active Users" },
        { number: "$2B+", label: "Tracked Expenses" },
        { number: "150+", label: "Countries" },
        { number: "99.9%", label: "Uptime" },
    ];

    const team = [
        {
            name: "Sarah Chen",
            role: "CEO & Co-founder",
            bio: "Former Goldman Sachs analyst with a passion for democratizing financial tools.",
            avatar: "👩‍💼",
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO & Co-founder",
            bio: "Ex-Google engineer specializing in secure financial technology and AI.",
            avatar: "👨‍💻",
        },
        {
            name: "Dr. Emily Watson",
            role: "Head of Product",
            bio: "PhD in Behavioral Economics, focused on making finance intuitive and engaging.",
            avatar: "👩‍🔬",
        },
        {
            name: "James Park",
            role: "Head of Design",
            bio: "Award-winning designer who believes beautiful interfaces drive better financial habits.",
            avatar: "🎨",
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
          

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-zinc-950 to-emerald-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
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
                            <Target className="w-4 h-4 text-emerald-400 mr-2" />
                            <span className="text-sm text-zinc-300">
                                Our Mission
                            </span>
                        </div>

                        <h1
                            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{
                                transform: `translateY(${scrollY * 0.2}px)`,
                            }}
                        >
                            Empowering Your
                            <span className="block bg-gradient-to-r from-purple-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                                Financial Journey
                            </span>
                        </h1>

                        <p
                            className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                            style={{
                                transform: `translateY(${scrollY * 0.15}px)`,
                            }}
                        >
                            At PennyPact, we believe everyone deserves access to
                            powerful financial tools. Our mission is to
                            democratize personal finance through beautiful,
                            intelligent, and secure technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-zinc-400 text-lg">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                                <p>
                                    PennyPact was born from a simple
                                    frustration: existing financial tools were
                                    either too complex for everyday users or too
                                    basic for serious financial planning. We saw
                                    people struggling with spreadsheets,
                                    juggling multiple apps, and losing track of
                                    their financial goals.
                                </p>
                                <p>
                                    Founded in 2023 by a team of financial
                                    experts and technology veterans, we set out
                                    to create something different. A platform
                                    that combines the sophistication of
                                    professional financial tools with the
                                    simplicity and beauty of consumer apps.
                                </p>
                                <p>
                                    Today, we're proud to serve over 500,000
                                    users worldwide, helping them track billions
                                    in expenses and achieve their financial
                                    dreams. But we're just getting started.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-zinc-800/50">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-zinc-900/50 rounded-2xl p-6 text-center">
                                        <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                                        <div className="text-2xl font-bold text-white">
                                            2023
                                        </div>
                                        <div className="text-zinc-400">
                                            Founded
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/50 rounded-2xl p-6 text-center">
                                        <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                        <div className="text-2xl font-bold text-white">
                                            500K+
                                        </div>
                                        <div className="text-zinc-400">
                                            Users
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/50 rounded-2xl p-6 text-center">
                                        <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                                        <div className="text-2xl font-bold text-white">
                                            150+
                                        </div>
                                        <div className="text-zinc-400">
                                            Countries
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/50 rounded-2xl p-6 text-center">
                                        <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                                        <div className="text-2xl font-bold text-white">
                                            50+
                                        </div>
                                        <div className="text-zinc-400">
                                            Awards
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 lg:py-32 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Our Values
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            The principles that guide everything we do at
                            PennyPact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="mb-6 p-3 bg-zinc-800/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            The passionate people behind PennyPact, dedicated to
                            transforming how you manage your finances.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {member.avatar}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {member.name}
                                </h3>
                                <div className="text-emerald-400 font-medium mb-4">
                                    {member.role}
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-purple-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Ready to Join
                        <span className="block text-emerald-400">
                            Our Mission?
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Be part of the financial revolution. Start your journey
                        with PennyPact today.
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        <a
                            href="/signup"
                            className="group bg-emerald-500 hover:bg-emerald-600 px-10 py-5 rounded-xl font-semibold text-lg text-white shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center hover:-translate-y-1"
                        >
                            Start Your Journey
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

export default About;
