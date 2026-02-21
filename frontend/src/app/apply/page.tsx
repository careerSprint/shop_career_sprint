"use client"

import { useState } from "react"
import Link from "next/link"
import { Linkedin, Eye, EyeOff } from "lucide-react"

const roles = [
  "Developer",
  "Designer",
  "Marketing Expert",
  "Management Consultant",
  "Project Manager",
  "Product Manager",
  "Finance Expert",
]

const trustedCompanies = [
  { name: "Google", style: "font-bold text-2xl tracking-tight text-neutral-600" },
  { name: "Amazon", style: "font-black text-2xl tracking-tighter text-neutral-700" },
  { name: "Microsoft", style: "font-semibold text-xl text-neutral-500" },
  { name: "Bridgestone", style: "font-bold text-lg tracking-widest uppercase text-neutral-500" },
  { name: "Shopify", style: "font-bold text-xl text-neutral-600" },
  { name: "T-Systems", style: "font-semibold text-lg text-neutral-500" },
]

export default function ApplyPage() {
  const [role, setRole] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-2">Application received!</h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Thanks, {name.split(" ")[0] || "there"}! We&apos;ll review your application and get back to you within 48 hours.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm text-blue-600 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal logo header */}
      <header className="py-4 sm:py-5 px-4 sm:px-8 border-b border-neutral-100 flex justify-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900">
          CareerSprint
        </Link>
      </header>

      <main className="flex-1 flex">
        {/* ── Form column ── */}
        <div className="flex-1 flex justify-center py-8 sm:py-12 px-4 sm:px-6">
          <div className="w-full max-w-[320px]">
            {/* Heading */}
            <div className="text-center mb-7">
              <h1 className="text-[22px] font-light text-neutral-700 leading-snug">
                Apply to Join<br />
                <span className="text-neutral-500">the World&apos;s Top Talent Network</span>
              </h1>
              <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                CareerSprint is an exclusive network of the world&apos;s top talent in
                business, design, and technology. We provide access to top companies,
                a community of experts, and resources that can help accelerate your career.
              </p>
            </div>

            {/* LinkedIn */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#006396] text-white py-2.5 px-4 text-sm font-medium transition-colors"
            >
              <Linkedin className="h-4 w-4 fill-white" />
              Sign Up with LinkedIn
            </button>
            <p className="text-center text-[11px] text-neutral-400 mt-1.5 leading-tight">
              By clicking Sign up with LinkedIn, you agree to let CareerSprint store your LinkedIn profile.
            </p>

            {/* OR divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-xs text-neutral-400 border border-neutral-200 rounded-full w-6 h-6 flex items-center justify-center">or</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Role dropdown */}
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-500 appearance-none bg-white focus:outline-none focus:border-neutral-500"
                >
                  <option value="" disabled>I&apos;m applying as...</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Full name */}
              <input
                type="text"
                placeholder="Full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Confirm password */}
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600"
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Terms */}
              <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
                By submitting, you acknowledge and agree to CareerSprint&apos;s{" "}
                <Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-sm font-semibold transition-colors mt-1"
              >
                Apply to Join CareerSprint
              </button>
            </form>

            {/* Switch to client */}
            <p className="text-center text-xs text-neutral-400 mt-5">
              Looking to hire?{" "}
              <Link href="/hire/new" className="text-blue-600 hover:underline">
                Join as a client
              </Link>
            </p>
          </div>
        </div>

        {/* ── Right sidebar: company logos ── */}
        <aside className="hidden lg:flex w-72 border-l border-neutral-100 flex-col items-center pt-16 px-8 gap-10">
          <p className="text-sm text-neutral-500 font-light">Work with top companies</p>
          {trustedCompanies.map((c) => (
            <span key={c.name} className={c.style}>
              {c.name}
            </span>
          ))}
        </aside>
      </main>
    </div>
  )
}
