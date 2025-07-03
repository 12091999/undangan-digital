"use client";

import { useState } from "react";
import Link from "next/link";


const fakeLogin = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<{ success: boolean; message: string }>((resolve) => {
        setTimeout(() => {
            if (email === "" && password === "") {
                resolve({ success: true, message: "Login successful!" });
            } else {
                resolve({ success: false, message: "Invalid credentials." });
            }
        }, 1200);
    });
};

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);
        const res = await fakeLogin(email, password);
        setLoading(false);
        if (res.success) {
            setSuccess(res.message);
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
                    Login to Your Account
                </h2>
                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>
                )}
                {success && (
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded">{success}</div>
                )}
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-500"
                            onClick={() => setShowPassword((prev) => !prev)}
                            tabIndex={-1}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                <p className="text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-indigo-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}