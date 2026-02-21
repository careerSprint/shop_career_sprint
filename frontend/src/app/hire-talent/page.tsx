"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiteNavbar } from "@/components/sections/SiteNavbar"
import SiteFooter from "@/components/site-footer"
import {
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

/* ─────────────────────────────── Data ─────────────────────────────── */

const developers = [
  {
    id: "dev-1",
    name: "Arjun Sharma",
    title: "Full-Stack Engineer",
    avatar: "A",
    avatarColor: "bg-blue-500",
    experience: 7,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    previousCompany: "Google",
    location: "Bangalore",
    rating: 4.9,
    reviews: 38,
    hourlyRate: "₹3,500/hr",
    available: true,
  },
  {
    id: "dev-2",
    name: "Priya Mehta",
    title: "React / Next.js Specialist",
    avatar: "P",
    avatarColor: "bg-violet-500",
    experience: 5,
    skills: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
    previousCompany: "Flipkart",
    location: "Mumbai",
    rating: 5.0,
    reviews: 52,
    hourlyRate: "₹2,800/hr",
    available: true,
  },
  {
    id: "dev-3",
    name: "Rohit Verma",
    title: "Backend / DevOps Engineer",
    avatar: "R",
    avatarColor: "bg-emerald-500",
    experience: 9,
    skills: ["Python", "Django", "AWS", "Docker"],
    previousCompany: "Amazon",
    location: "Hyderabad",
    rating: 4.8,
    reviews: 67,
    hourlyRate: "₹4,200/hr",
    available: false,
  },
  {
    id: "dev-4",
    name: "Sneha Kapoor",
    title: "Mobile App Developer",
    avatar: "S",
    avatarColor: "bg-rose-500",
    experience: 4,
    skills: ["React Native", "Flutter", "iOS", "Android"],
    previousCompany: "Swiggy",
    location: "Pune",
    rating: 4.9,
    reviews: 29,
    hourlyRate: "₹2,500/hr",
    available: true,
  },
  {
    id: "dev-5",
    name: "Karan Bhatia",
    title: "AI / ML Engineer",
    avatar: "K",
    avatarColor: "bg-amber-500",
    experience: 6,
    skills: ["Python", "TensorFlow", "AI / ML", "OpenAI"],
    previousCompany: "Microsoft",
    location: "Delhi",
    rating: 4.7,
    reviews: 44,
    hourlyRate: "₹5,000/hr",
    available: true,
  },
  {
    id: "dev-6",
    name: "Divya Nair",
    title: "UI/UX & Frontend Developer",
    avatar: "D",
    avatarColor: "bg-cyan-500",
    experience: 3,
    skills: ["Figma", "React", "Framer", "Tailwind CSS"],
    previousCompany: "Zomato",
    location: "Chennai",
    rating: 5.0,
    reviews: 21,
    hourlyRate: "₹2,200/hr",
    available: true,
  },
  {
    id: "dev-7",
    name: "Vikram Joshi",
    title: "Cloud & Infrastructure Engineer",
    avatar: "V",
    avatarColor: "bg-indigo-500",
    experience: 8,
    skills: ["AWS", "Docker", "Kubernetes", "Node.js"],
    previousCompany: "Infosys",
    location: "Bangalore",
    rating: 4.8,
    reviews: 33,
    hourlyRate: "₹3,800/hr",
    available: true,
  },
  {
    id: "dev-8",
    name: "Ananya Reddy",
    title: "Angular & Enterprise Developer",
    avatar: "An",
    avatarColor: "bg-orange-500",
    experience: 6,
    skills: ["Angular", "TypeScript", "PostgreSQL", "Node.js"],
    previousCompany: "TCS",
    location: "Hyderabad",
    rating: 4.9,
    reviews: 18,
    hourlyRate: "₹2,900/hr",
    available: false,
  },
  {
    id: "dev-9",
    name: "Mehul Shah",
    title: "Flutter / Mobile Specialist",
    avatar: "M",
    avatarColor: "bg-teal-500",
    experience: 4,
    skills: ["Flutter", "Firebase", "iOS", "Android"],
    previousCompany: "Paytm",
    location: "Ahmedabad",
    rating: 4.8,
    reviews: 25,
    hourlyRate: "₹2,600/hr",
    available: true,
  },
]

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Flutter",
  "React Native",
  "Angular",
  "Django",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Tailwind CSS",
  "AI / ML",
  "Figma",
  "iOS",
  "Android",
  "Firebase",
]

const steps = [
  {
    num: "01",
    icon: Clock,
    title: "Tell us what you need",
    desc: "Share your project requirements, tech stack preferences, and timeline. Our team reviews your needs within 24 hours.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Get matched with experts",
    desc: "We hand-pick developers from our vetted talent pool who are the best fit for your project — no scrolling through hundreds of profiles.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Start building immediately",
    desc: "Begin working with your developer right away. Not satisfied in the first week? We'll find you a replacement at no cost.",
  },
]

const faqs = [
  {
    q: "How quickly can I hire a developer?",
    a: "Most clients are matched with a developer within 24–48 hours. Once you approve the match, your developer can start the same day.",
  },
  {
    q: "What if I'm not happy with the developer?",
    a: "We offer a 7-day trial period. If you're not satisfied for any reason, we'll rematch you with another developer at no additional cost.",
  },
  {
    q: "How are developers vetted?",
    a: "Every developer passes a rigorous screening: technical assessments, live coding challenges, communication evaluations, and background checks. Less than 5% of applicants make it through.",
  },
  {
    q: "What engagement models are available?",
    a: "We support full-time (160 hrs/month), part-time (80 hrs/month), and hourly engagements. You choose what fits your project.",
  },
  {
    q: "How much does it cost?",
    a: "Rates start from ₹2,000/hr depending on expertise and engagement type. You only pay for time worked — no hidden fees, no recruitment charges.",
  },
  {
    q: "Can I hire a full team instead of one developer?",
    a: "Yes! We can assemble full teams including developers, designers, QA engineers, and project managers — all sourced from our vetted network.",
  },
]

/* ─────────────────────────────── Sub-components ─────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b border-neutral-200 dark:border-neutral-800 py-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium text-neutral-900 dark:text-white text-sm sm:text-base">{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-neutral-400" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-neutral-400" />
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function DeveloperCard({ dev }: { dev: typeof developers[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-neutral-100 dark:hover:shadow-neutral-900/50 transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className={`h-12 w-12 rounded-full ${dev.avatarColor} flex items-center justify-center text-white font-bold text-base shrink-0`}
        >
          {dev.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">{dev.name}</h3>
            {dev.available ? (
              <span className="text-[10px] font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                Available
              </span>
            ) : (
              <span className="text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500 px-2 py-0.5 rounded-full">
                Engaged
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{dev.title}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1">
          <Briefcase className="h-3.5 w-3.5" />
          {dev.experience} yrs exp
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {dev.location}
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {dev.rating} ({dev.reviews})
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {dev.skills.map((s) => (
          <span
            key={s}
            className="text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-0.5 rounded-md"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
        <div>
          <span className="font-bold text-neutral-900 dark:text-white text-sm">{dev.hourlyRate}</span>
          <p className="text-[10px] text-neutral-400 mt-0.5">prev. {dev.previousCompany}</p>
        </div>
        <Link
          href="/contact"
          className="rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold px-4 py-2 hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-colors"
        >
          Hire
        </Link>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────── Page ─────────────────────────────── */

export default function HireTalentPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const filtered = activeSkill
    ? developers.filter((d) => d.skills.includes(activeSkill))
    : developers

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <SiteNavbar />

      <main>
        {/* ── Hero ── */}
        <section className="bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900">
          <div className="container mx-auto px-6 py-24 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-600 mb-4">
                Top 5% Vetted Developers
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-[1.05] tracking-tight">
                Hire expert developers,{" "}
                <span className="text-sky-600">ready to ship</span>
              </h1>
              <p className="mt-6 text-base text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                Skip months of recruiting. Get matched with a vetted developer in 24 hours — with a no-risk trial period.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 font-semibold text-sm hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-colors flex items-center gap-2"
                >
                  Get matched now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 font-semibold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  See how it works
                </a>
              </div>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="mt-12 flex items-center justify-center gap-8 flex-wrap text-sm text-neutral-400 dark:text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { icon: CheckCircle, label: "No-risk 7-day trial" },
                { icon: CheckCircle, label: "Matched in 24 hrs" },
                { icon: CheckCircle, label: "Pay only if satisfied" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-emerald-500" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Developer avatar strip */}
          <div className="container mx-auto px-6 pb-16">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {developers.slice(0, 7).map((dev, i) => (
                <motion.div
                  key={dev.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`h-14 w-14 rounded-full ${dev.avatarColor} flex items-center justify-center text-white font-bold text-lg border-2 border-white dark:border-neutral-950 shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    {dev.avatar}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                      {dev.name.split(" ")[0]}
                    </p>
                    <p className="text-[10px] text-neutral-400 leading-tight">{dev.experience}y exp</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
                How it works
              </h2>
              <p className="mt-3 text-neutral-500 dark:text-neutral-400 text-sm max-w-md mx-auto">
                From requirement to first commit in 48 hours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7"
                >
                  <span className="text-5xl font-bold text-neutral-100 dark:text-neutral-800 select-none absolute top-5 right-6">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 w-fit mb-4">
                    <step.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Browse by skill ── */}
        <section className="bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
                Browse by expertise
              </h2>
              <p className="mt-3 text-neutral-500 dark:text-neutral-400 text-sm">
                Filter developers by the skills that matter most to your project.
              </p>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              <button
                onClick={() => setActiveSkill(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeSkill === null
                    ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                    : "border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                }`}
              >
                All
              </button>
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    activeSkill === skill
                      ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                      : "border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* Developer grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? (
                  filtered.map((dev) => <DeveloperCard key={dev.id} dev={dev} />)
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-3 text-center py-16 text-neutral-400 text-sm"
                  >
                    No developers found for this skill right now. Check back soon!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-neutral-900 dark:bg-neutral-950 border-y border-neutral-800">
          <div className="container mx-auto px-6 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to hire your developer?
              </h2>
              <p className="mt-4 text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                Tell us what you're building and we'll match you with the right expert — usually within 24 hours.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-8 py-3 font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                Get matched now <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-6 py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
