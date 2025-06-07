import {
    ArrowRight,
    CheckCircle,
    Coins,
    Copy,
    DollarSign,
    Eye,
    EyeOff,
    Lock,
    Mail,
    Shield,
    Sparkles,
    TrendingUp,
    User,
} from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router";
// Mock API function - replace this import with your actual API
const signupUser = async (userData) => {
    // This simulates your actual API call structure
    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            let errorData = {};
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                try {
                    errorData = await response.json();
                } catch (parseError) {
                    errorData = {
                        message: `HTTP ${response.status}: ${response.statusText}`,
                    };
                }
            } else {
                errorData = {
                    message: `HTTP ${response.status}: ${response.statusText}`,
                };
            }

            throw {
                response: {
                    data: errorData,
                },
            };
        }

        // Check if response has content before parsing as JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const text = await response.text();
            if (text) {
                return JSON.parse(text);
            } else {
                return { success: true }; // Return success for empty responses
            }
        } else {
            return { success: true }; // Return success for non-JSON responses
        }
    } catch (error) {
        // If it's already our custom error, re-throw it
        if (error.response) {
            throw error;
        }

        // Handle network errors or other fetch errors
        throw {
            response: {
                data: { message: error.message || "Network error occurred" },
            },
        };
    }
};

// Validation function (replacing Zod for compatibility)
const validateForm = (name, email, password, confirmPassword) => {
    const errors = {};

    if (name.length < 2) {
        errors.name = "Name must be at least 2 characters long";
    } else if (name.length > 50) {
        errors.name = "Name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
    }

    if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        errors.password =
            "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
};

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");

    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);
        setTimeout(() => {
            setToastMessage("");
            setToastType("");
        }, 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        setError("");

        // Basic validation first
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            setIsLoading(false);
            showToast("Please fill in all fields", "error");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            showToast("Passwords do not match", "error");
            return;
        }

        // Validate form using custom validation
        const formErrors = validateForm(name, email, password, confirmPassword);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsLoading(false);
            showToast("Please fix the errors below", "error");
            return;
        }

        try {
            const result = await signupUser({ name, email, password });
            setError("");
            setSubmitted(true);

            // Success toast
            showToast("Account created successfully! 🎉", "success");

            // Clear form
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            // Navigate after delay (you can implement actual navigation here)
            setTimeout(() => {
                // window.location.href = '/login'; // or use your router
                console.log("Redirecting to login...");
            }, 2000);
        } catch (err) {
            console.error("Signup error:", err);
            let errorMessage = "Signup failed. Please try again.";

            // Handle different error scenarios
            if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            } else if (err.message) {
                errorMessage = err.message;
            }

            setError(errorMessage);
            showToast(errorMessage, "error");
            setSubmitted(false);
        }

        setIsLoading(false);
    };

    const getPasswordStrength = (password) => {
        if (password.length === 0) return { strength: 0, text: "", color: "" };
        if (password.length < 6)
            return { strength: 1, text: "Weak", color: "text-red-400" };
        if (password.length < 8)
            return { strength: 2, text: "Fair", color: "text-yellow-400" };
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password))
            return { strength: 2, text: "Fair", color: "text-yellow-400" };
        return { strength: 3, text: "Strong", color: "text-emerald-400" };
    };

    const passwordStrength = getPasswordStrength(password);

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex">
            {/* Custom Toast Notification */}
            {toastMessage && (
                <div
                    className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl border transition-all duration-300 ${
                        toastType === "success"
                            ? "bg-emerald-900/90 border-emerald-500/50 text-emerald-100"
                            : "bg-red-900/90 border-red-500/50 text-red-100"
                    }`}
                >
                    <div className="flex items-center space-x-2">
                        {toastType === "success" ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                        ) : (
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">!</span>
                            </div>
                        )}
                        <span className="font-medium">{toastMessage}</span>
                    </div>
                </div>
            )}

            {/* Left Side - Features */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-900/20 via-zinc-900 to-emerald-900/20 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative max-w-lg">
                    <h3 className="text-4xl font-bold mb-8 text-center">
                        Start Your
                        <span className="block text-blue-400">
                            Financial Journey
                        </span>
                    </h3>

                    <p className="text-lg text-zinc-400 text-center mb-12 leading-relaxed">
                        Join thousands of users who are taking control of their
                        financial future with PennyPact.
                    </p>

                    {/* Features List */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                                <TrendingUp className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">
                                    Smart Analytics
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    Get insights into your spending patterns
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">
                                    Bank-Level Security
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    Your data is protected with 256-bit
                                    encryption
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                                <Sparkles className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">
                                    AI-Powered Recommendations
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    Personalized tips to improve your finances
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Logo */}
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                    <Coins className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                    <DollarSign className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <div>
                                <span className="text-2xl font-black tracking-tight text-white">
                                    PENNY
                                </span>
                                <span className="text-2xl font-black tracking-tight text-emerald-400">
                                    PACT
                                </span>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-2">
                            Create Your Account
                        </h2>
                        <p className="text-zinc-400">
                            Join the financial revolution and take control of
                            your money
                        </p>
                    </div>

                    {/* Signup Form */}
                    <div className="mt-8 space-y-6">
                        <div className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-zinc-300 mb-2"
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-zinc-500" />
                                    </div>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                            errors.name
                                                ? "border-red-500 focus:ring-red-500/20"
                                                : "border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-zinc-300 mb-2"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-zinc-500" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                            errors.email
                                                ? "border-red-500 focus:ring-red-500/20"
                                                : "border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-zinc-300 mb-2"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-zinc-500" />
                                    </div>
                                    <input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className={`block w-full pl-10 pr-12 py-3 border rounded-xl bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                            errors.password
                                                ? "border-red-500 focus:ring-red-500/20"
                                                : "border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        placeholder="Create a strong password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-zinc-500 hover:text-zinc-400" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-zinc-500 hover:text-zinc-400" />
                                        )}
                                    </button>
                                </div>

                                {/* Password Strength Indicator */}
                                {password && (
                                    <div className="mt-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1 bg-zinc-800 h-1 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-300 ${
                                                        passwordStrength.strength ===
                                                        1
                                                            ? "w-1/3 bg-red-500"
                                                            : passwordStrength.strength ===
                                                                2
                                                              ? "w-2/3 bg-yellow-500"
                                                              : passwordStrength.strength ===
                                                                  3
                                                                ? "w-full bg-emerald-500"
                                                                : "w-0"
                                                    }`}
                                                />
                                            </div>
                                            <span
                                                className={`text-xs font-medium ${passwordStrength.color}`}
                                            >
                                                {passwordStrength.text}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-zinc-300 mb-2"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-zinc-500" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        className={`block w-full pl-10 pr-12 py-3 border rounded-xl bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                            errors.confirmPassword
                                                ? "border-red-500 focus:ring-red-500/20"
                                                : "border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        placeholder="Confirm your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-zinc-500 hover:text-zinc-400" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-zinc-500 hover:text-zinc-400" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-zinc-600 rounded bg-zinc-900 mt-1"
                                />
                                <label
                                    htmlFor="terms"
                                    className="ml-3 block text-sm text-zinc-400"
                                >
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={handleSubmit}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Creating your account...
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            Create Account
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    )}
                                </button>
                            </div>

                            {/* Sign In Link */}
                            <div className="text-center">
                                <p className="text-sm text-zinc-400">
                                    Already have an account?{" "}
                                    <Link to="/login">
                                        <span className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                                            Sign in here
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
