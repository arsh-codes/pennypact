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
} from "lucide-react";
import { Link, useNavigate } from "react-router"; // Fixed: Combined imports from same module
import React, { useState } from "react";

import { login } from "../redux/slices/authSlice";
import { loginUser } from "@/api/auth";
import { useDispatch } from "react-redux";

/**
 * Login Component - Handles user authentication with a modern, responsive design
 * Features:
 * - Form validation with error handling
 * - Toast notifications for user feedback
 * - Password visibility toggle
 * - Demo credentials display
 * - Loading states and accessibility
 */
const Login = () => {
    // Form state management
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Toast notification state
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");

    // Redux and navigation hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /**
     * Display toast notification with auto-hide functionality
     * @param {string} message - Message to display
     * @param {string} type - Type of toast (success/error)
     */
    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);
        // Auto-hide toast after 4 seconds
        setTimeout(() => {
            setToastMessage("");
            setToastType("");
        }, 4000);
    };

    /**
     * Copy text to clipboard with user feedback
     * @param {string} text - Text to copy
     * @param {string} type - Type of content being copied (for user feedback)
     */
    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            showToast(`${type} copied to clipboard!`, "success");
        } catch (err) {
            showToast("Failed to copy to clipboard", "error");
        }
    };

    /**
     * Validate form inputs
     * @returns {Object} Object containing validation errors
     */
    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        return newErrors;
    };

    /**
     * Handle form submission with validation and API call
     * @param {Event} e - Form submit event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        // Validate form inputs
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsLoading(false);
            showToast("Please fix the errors below", "error");
            return;
        }

        try {
            // Attempt login
            const data = await loginUser({ email, password });
            console.log("Login Success:", data);

            // Update Redux state
            dispatch(login());

            // Show success message
            showToast("Successfully signed in! 🎉", "success");

            // Navigate to dashboard after brief delay for UX
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        } catch (err) {
            console.error("Login error:", err);
            const errorMessage =
                err.response?.data?.message ||
                "Login failed. Please try again.";

            showToast(errorMessage, "error");
        } finally {
            setIsLoading(false); // Fixed: Moved to finally block for better error handling
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex">
            {/* Toast Notification Component */}
            {toastMessage && (
                <div
                    className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl border transition-all duration-300 ${
                        toastType === "success"
                            ? "bg-emerald-900/90 border-emerald-500/50 text-emerald-100"
                            : "bg-red-900/90 border-red-500/50 text-red-100"
                    }`}
                    role="alert" // Added for accessibility
                    aria-live="polite" // Added for screen readers
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

            {/* Left Side - Login Form */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Brand Logo and Title */}
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="relative">
                                {/* Main logo icon */}
                                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                    <Coins className="w-7 h-7 text-white" />
                                </div>
                                {/* Dollar sign overlay */}
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                    <DollarSign className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            {/* Brand name */}
                            <div>
                                <span className="text-2xl font-black tracking-tight text-white">
                                    PENNY
                                </span>
                                <span className="text-2xl font-black tracking-tight text-emerald-400">
                                    PACT
                                </span>
                            </div>
                        </div>

                        {/* Welcome message */}
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-zinc-400">
                            Sign in to your account to continue your financial
                            journey
                        </p>
                    </div>

                    {/* Main Login Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        {" "}
                        {/* Fixed: Added proper form element */}
                        <div className="space-y-4">
                            {/* Email Input Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-zinc-300 mb-2"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    {/* Email icon */}
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
                                        required // Added for form validation
                                    />
                                </div>
                                {/* Email error message */}
                                {errors.email && (
                                    <p
                                        className="mt-1 text-sm text-red-400"
                                        role="alert"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Input Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-zinc-300 mb-2"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    {/* Lock icon */}
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
                                        placeholder="Enter your password"
                                        required // Added for form validation
                                    />
                                    {/* Password visibility toggle button */}
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        } // Added for accessibility
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-zinc-500 hover:text-zinc-400" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-zinc-500 hover:text-zinc-400" />
                                        )}
                                    </button>
                                </div>
                                {/* Password error message */}
                                {errors.password && (
                                    <p
                                        className="mt-1 text-sm text-red-400"
                                        role="alert"
                                    >
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* Remember Me & Forgot Password Section */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-zinc-600 rounded bg-zinc-900"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-zinc-400"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link
                                    to="/forgot-password" // Fixed: Use proper Link component
                                    className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        {/* Loading spinner */}
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        Sign in
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                )}
                            </button>
                        </div>
                        {/* Sign Up Link */}
                        <div className="text-center">
                            <p className="text-sm text-zinc-400">
                                Don't have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    Sign up for free
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Features and Demo Credentials */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-900/20 via-zinc-900 to-blue-900/20 items-center justify-center p-12 relative overflow-hidden">
                {/* Background animation elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative max-w-lg">
                    {/* Feature headline */}
                    <h3 className="text-4xl font-bold mb-8 text-center">
                        Your Financial
                        <span className="block text-emerald-400">
                            Command Center
                        </span>
                    </h3>

                    <p className="text-lg text-zinc-400 text-center mb-12 leading-relaxed">
                        Take control of your finances with intelligent tracking
                        and actionable insights.
                    </p>

                    {/* Demo Credentials Card */}
                    <div className="mb-8 relative group">
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative p-6 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 backdrop-blur-sm">
                            {/* Card header */}
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <Shield className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        Try Demo Account
                                    </h4>
                                    <p className="text-xs text-zinc-500">
                                        Test the full experience
                                    </p>
                                </div>
                            </div>

                            {/* Demo credentials */}
                            <div className="space-y-3">
                                {/* Demo email */}
                                <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-zinc-400">
                                            Email:
                                        </span>
                                        <code className="text-sm text-emerald-400 font-mono">
                                            test@example.com
                                        </code>
                                    </div>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                "test@example.com",
                                                "Email"
                                            )
                                        }
                                        className="p-2 hover:bg-zinc-700/50 rounded-lg transition-colors group/copy"
                                        title="Copy email"
                                        aria-label="Copy demo email to clipboard" // Added for accessibility
                                    >
                                        <Copy className="w-4 h-4 text-zinc-500 group-hover/copy:text-emerald-400 transition-colors" />
                                    </button>
                                </div>

                                {/* Demo password */}
                                <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-zinc-400">
                                            Password:
                                        </span>
                                        <code className="text-sm text-emerald-400 font-mono">
                                            Pass4test
                                        </code>
                                    </div>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                "Pass4test",
                                                "Password"
                                            )
                                        }
                                        className="p-2 hover:bg-zinc-700/50 rounded-lg transition-colors group/copy"
                                        title="Copy password"
                                        aria-label="Copy demo password to clipboard" // Added for accessibility
                                    >
                                        <Copy className="w-4 h-4 text-zinc-500 group-hover/copy:text-emerald-400 transition-colors" />
                                    </button>
                                </div>
                            </div>

                            {/* Features note */}
                            <div className="mt-4 flex items-center text-xs text-zinc-500">
                                <CheckCircle className="w-3 h-3 mr-1 text-emerald-500" />
                                Full access to all features
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
