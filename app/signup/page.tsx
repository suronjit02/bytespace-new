"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import FormField from "@/components/ui/FormField";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 8) {
      setSuccess(false);
      setError("Password must be at least 8 characters.");
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-base text-primary">Create an Account</p>
      <h1 className="mt-2 font-heading text-5xl font-semibold leading-tight">
        Welcome to ByteSpace
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <FormField
          id="name"
          name="name"
          label="Full Name"
          placeholder="Jamie Davis"
          value={form.name}
          onChange={handleChange}
          required
        />
        <FormField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <FormField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && (
          <p className="text-sm text-green-600">
            Account created successfully!
          </p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-11 rounded-full bg-lime px-8 text-sm font-medium transition hover:brightness-95"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-24 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
