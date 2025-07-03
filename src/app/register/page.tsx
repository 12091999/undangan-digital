"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    agree: boolean;
}

const initialFormData: FormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agree: false,
};

const RegisterPage: React.FC = () => {
    const [form, setForm] = useState<FormData>(initialFormData);
    interface FormErrors {
        name?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
        phone?: string;
        agree?: string;
    }
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
            newErrors.email = "Valid email is required";
        if (form.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!form.phone.match(/^\d{10,15}$/))
            newErrors.phone = "Valid phone number is required";
        if (!form.agree) newErrors.agree = "You must agree to terms";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            // Submit logic here (e.g., API call)
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6">Register</h1>
            {submitted ? (
                <div className="text-green-600 font-semibold">
                    Registration successful!
                </div>
            ) : (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm">{errors.name}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm">{errors.email}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.password && (
                            <div className="text-red-500 text-sm">{errors.password}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.confirmPassword && (
                            <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.phone && (
                            <div className="text-red-500 text-sm">{errors.phone}</div>
                        )}
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label>
                            I agree to the <a href="#" className="underline">terms and conditions</a>
                        </label>
                        {errors.agree && (
                            <div className="text-red-500 text-sm ml-2">{errors.agree}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
                    >
                        Register
                    </button>
                    <Link href="/admin" className="block mt-4 text-center text-blue-600 hover:underline">
                        Back to Home
                    </Link>
                </form>
            )}
        </div>
    );
};

export default RegisterPage;