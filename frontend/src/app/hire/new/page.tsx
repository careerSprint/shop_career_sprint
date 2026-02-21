"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

/* ── Step data ── */

const companySizes = [
  "Less than 10",
  "11 – 50",
  "51 – 200",
  "201 – 1,000",
  "1,001 – 5,000",
  "More than 5,000",
]

const talentTypes = [
  "Developers",
  "Designers",
  "Finance Experts",
  "Project Managers",
  "Product Managers",
  "Marketing Experts",
]

const engagementTypes = [
  { label: "Full-Time", desc: "160 hrs / month" },
  { label: "Part-Time", desc: "80 hrs / month" },
  { label: "Hourly", desc: "As needed" },
  { label: "Full Team", desc: "Dev + Design + QA" },
]

const trustedLogos = ["DoorDash", "Kohler", "Kraft Heinz", "Shiseido", "Bridgestone", "Priceline", "Okta", "Deckers"]

/* ── Page ── */

export default function HireNewPage() {
  const [step, setStep] = useState(1)
  const [companySize, setCompanySize] = useState("")
  const [talentType, setTalentType] = useState("")
  const [engagement, setEngagement] = useState("")
  const [form, setForm] = useState({ name: "", email: "", company: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <ClientHeader />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-2">We&apos;ll be in touch!</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Thanks, {form.name.split(" ")[0] || "there"}! Our team will reach out within 24 hours to match you with the right talent.
            </p>
            <Link href="/" className="mt-6 inline-block text-sm text-blue-600 hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ClientHeader />

      <main className="flex-1 flex items-start justify-center py-10 sm:py-16 px-4 sm:px-6">
        <div className="w-full max-w-lg">

          {/* ── Step 1: Company size ── */}
          {step === 1 && (
            <div>
              <p className="text-xs font-semibold text-neutral-400 tracking-widest uppercase mb-5">
                STEP 1
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-800 mb-8 leading-snug">
                How many people are employed at your company?
              </h1>

              <div className="divide-y divide-neutral-200">
                {companySizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setCompanySize(size); setStep(2) }}
                    className="w-full flex items-center justify-between px-1 py-4 text-left text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors group"
                  >
                    <span>{size}</span>
                    <ArrowRight className="h-4 w-4 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                  </button>
                ))}
              </div>

              <div className="mt-10 border-t border-neutral-100 pt-6">
                <Link href="/apply" className="text-sm text-blue-600 hover:underline">
                  Are you a freelancer?
                </Link>
              </div>
            </div>
          )}

          {/* ── Step 2: Talent type ── */}
          {step === 2 && (
            <div>
              <p className="text-xs font-semibold text-neutral-400 tracking-widest uppercase mb-5">
                STEP 2
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-800 mb-2 leading-snug">
                What kind of talent are you looking for?
              </h1>
              <p className="text-sm text-neutral-400 mb-8">
                Company size: <span className="text-neutral-600 font-medium">{companySize}</span>
              </p>

              <div className="divide-y divide-neutral-200">
                {talentTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => { setTalentType(type); setStep(3) }}
                    className="w-full flex items-center justify-between px-1 py-4 text-left text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors group"
                  >
                    <span>{type}</span>
                    <ArrowRight className="h-4 w-4 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="mt-8 flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            </div>
          )}

          {/* ── Step 3: Engagement type ── */}
          {step === 3 && (
            <div>
              <p className="text-xs font-semibold text-neutral-400 tracking-widest uppercase mb-5">
                STEP 3
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-800 mb-2 leading-snug">
                How would you like to engage?
              </h1>
              <p className="text-sm text-neutral-400 mb-8">
                {companySize} · {talentType}
              </p>

              <div className="divide-y divide-neutral-200">
                {engagementTypes.map((eng) => (
                  <button
                    key={eng.label}
                    onClick={() => { setEngagement(eng.label); setStep(4) }}
                    className="w-full flex items-center justify-between px-1 py-4 text-left hover:bg-neutral-50 transition-colors group"
                  >
                    <div>
                      <p className="text-sm text-neutral-700 group-hover:text-neutral-900">{eng.label}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{eng.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-8 flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            </div>
          )}

          {/* ── Step 4: Contact details ── */}
          {step === 4 && (
            <div>
              <p className="text-xs font-semibold text-neutral-400 tracking-widest uppercase mb-5">
                STEP 4
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-800 mb-2 leading-snug">
                Tell us about yourself
              </h1>
              <p className="text-sm text-neutral-400 mb-8">
                {companySize} · {talentType} · {engagement}
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-neutral-300 px-3 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                />
                <input
                  type="email"
                  placeholder="Work e-mail"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-neutral-300 px-3 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-neutral-300 px-3 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                />

                <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
                  By submitting, you acknowledge and agree to CareerSprint&apos;s{" "}
                  <Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>{" "}
                  and{" "}
                  <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </p>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-sm font-semibold transition-colors"
                >
                  Get matched with talent
                </button>
              </form>

              <button
                onClick={() => setStep(3)}
                className="mt-5 flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            </div>
          )}

          {/* Progress dots */}
          <div className="flex items-center gap-2 mt-10">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all ${
                  s <= step ? "w-6 bg-green-500" : "w-3 bg-neutral-200"
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

/* ── Shared header component ── */
function ClientHeader() {
  return (
    <header className="bg-[#1c3c78] flex items-center overflow-hidden shrink-0">
      {/* Logo block */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 shrink-0 border-r border-white/10">
        <Link href="/" className="text-white font-bold text-base sm:text-lg tracking-tight">
          CareerSprint
        </Link>
      </div>

      {/* Scrolling logo strip */}
      <div className="flex items-center overflow-hidden flex-1 min-w-0">
        <span className="hidden sm:block text-[11px] text-blue-300 font-semibold uppercase tracking-wider px-4 shrink-0">
          Trusted by
        </span>
        <div className="flex items-center gap-6 sm:gap-10 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] py-3 sm:py-4">
          {trustedLogos.map((logo) => (
            <span
              key={logo}
              className="text-white/60 font-bold text-xs sm:text-sm tracking-wide shrink-0 hover:text-white/90 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
