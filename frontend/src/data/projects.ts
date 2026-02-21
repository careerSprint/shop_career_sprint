import { ShoppingCart, Users, Video, Radio, FileText, Home, BookOpen, Compass, QrCode, Plane, Code2, ShoppingBag, Globe, Palette } from "lucide-react"
import { Project } from "@/components/projects/ProjectCard"

const defaultPreviewUrl = "https://www.sharwings.in/"

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "Basic Ecommerce",
    description: "Complete online shopping solution with payment integration, inventory management, and admin dashboard.",
    icon: ShoppingCart,
    price: "₹25,000",
    previewUrl: "https://sharwings-kvqz.vercel.app/",
    badge: "Popular",
    rating: 4.9,
    features: ["React & Node.js", "Stripe Integration", "Admin Panel", "Mobile Responsive"]
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Complete online shopping solution with payment integration, inventory management, and admin dashboard.",
    icon: ShoppingCart,
    price: "₹35,000",
    previewUrl: "https://www.sharwings.in/",
    badge: "Popular",
    rating: 4.9,
    features: ["React & Node.js", "Stripe Integration", "Admin Panel", "Mobile Responsive"]
  },
  {
    id: "resume-ai",
    title: "ResumeAssist",
    description: "AI-powered resume builder that helps users create professional resumes in minutes with smart suggestions and automated formatting.",
    icon: FileText,
    price: "₹45,000",
    previewUrl: "https://resumeassist-ai.vercel.app/",
    badge: "AI",
    rating: 4.9,
    features: ["AI-Powered", "Resume Templates", "ATS Optimized", "Instant Download"]
  },
  {
    id: "home-asset",
    title: "HomeAsset",
    description: "Your dream home, designed and delivered — end to end. From floor plan to finished space — expert design, curated materials, and AI-powered 3D visualisation.",
    icon: Home,
    price: "₹22,000",
    previewUrl: "https://homeassest.vercel.app/",
    badge: "New",
    rating: 4.9,
    features: ["AI 3D Visualisation", "Floor Plan Design", "Curated Materials", "End-to-End Delivery"]
  },
  {
    id: "lms",
    title: "LMS Platform",
    description: "Full-featured learning management system with course creation, job listings, student tracking, and progress analytics.",
    icon: BookOpen,
    price: "₹3,00,000",
    previewUrl: "https://levelup-8csx.vercel.app/landing",
    badge: "Premium",
    rating: 4.9,
    features: ["Course Management", "Job Listings", "Student Dashboard", "Progress Analytics"]
  },
  {
    id: "crm",
    title: "CRM System",
    description: "Customer relationship management system with lead tracking, analytics, and communication tools.",
    icon: Users,
    price: "₹70,000",
    previewUrl: defaultPreviewUrl,
    badge: "Enterprise",
    rating: 4.9,
    features: ["Lead Management", "Analytics Dashboard", "Email Integration", "Custom Reports"]
  },
  {
    id: "umrah-companions",
    title: "Umrah Companions",
    description: "AI-powered platform that provides step-by-step guidance and essential tips to help users prepare for Hajj and Umrah pilgrimages.",
    icon: Compass,
    price: "₹65,000",
    previewUrl: "https://umrahcompanions-2b9p.vercel.app/",
    badge: "AI",
    rating: 4.9,
    features: ["AI Guidance", "Step-by-Step Tips", "Hajj & Umrah", "Mobile Responsive"]
  },
  {
    id: "site2qr",
    title: "Site2QR Studio",
    description: "Generate branded QR code posters in multiple style variants using your URL, colors, logo, and tagline — instantly.",
    icon: QrCode,
    price: "₹10,000",
    previewUrl: "https://site2-qr.vercel.app/",
    badge: "New",
    rating: 4.9,
    features: ["Branded QR Codes", "Custom Styles", "Logo Upload", "Instant Export"]
  },
  {
    id: "travel-bare",
    title: "TravelBare",
    description: "Customizable Umrah pilgrimage and Kashmir vacation packages with selectable hotels, transport, dates, and attractions.",
    icon: Plane,
    price: "₹55,000",
    previewUrl: "https://travel-bare.vercel.app/",
    badge: "Popular",
    rating: 4.9,
    features: ["Umrah Packages", "Kashmir Tours", "Custom Itinerary", "Hotel & Transport"]
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "A sleek fullstack engineer portfolio template showcasing experience, projects, tech stack, and reusable UI components.",
    icon: Code2,
    price: "₹23,000",
    previewUrl: "https://muteebmasoodi.vercel.app/",
    badge: "New",
    rating: 4.9,
    features: ["Modern Design", "Project Showcase", "Tech Stack", "Reusable Components"]
  },
  {
    id: "campus-market",
    title: "Campus Market",
    description: "A marketplace platform that enables students to buy items and list their own goods for sale within their campus community.",
    icon: ShoppingBag,
    price: "₹5,000",
    previewUrl: "https://campus-market.vercel.app/",
    badge: "Popular",
    rating: 4.9,
    features: ["Buy & Sell", "Student Listings", "Campus Community", "Mobile Friendly"]
  },
  {
    id: "trip-impression",
    title: "TripImpression",
    description: "A travel business platform that helps agents and partners grow by offering discounted flight prices and travel-related services.",
    icon: Globe,
    price: "₹95,000",
    previewUrl: "https://tripimpression.vercel.app/",
    badge: "Enterprise",
    rating: 4.9,
    features: ["Discounted Flights", "Agent Dashboard", "Partner Network", "Travel Services"]
  },
  {
    id: "color-palettes",
    title: "Colour Palette Picker",
    description: "Browse and select colors from a rich palette map with random color generation and instant preview.",
    icon: Palette,
    price: "₹2,000",
    previewUrl: "https://color-palettes-ten.vercel.app/",
    badge: "New",
    rating: 4.9,
    features: ["Palette Browser", "Random Generator", "Color Preview", "Easy Export"]
  },
  {
    id: "video-call",
    title: "Video Call Platform",
    description: "Real-time video conferencing solution with screen sharing, chat, and recording capabilities.",
    icon: Video,
    price: "₹80,000",
    previewUrl: defaultPreviewUrl,
    badge: "New",
    rating: 4.9,
    features: ["WebRTC", "Screen Sharing", "Recording", "Multi-participant"]
  },
  {
    id: "live-stream",
    title: "Live Streaming App",
    description: "Professional live streaming platform with monetization, chat, and analytics features.",
    icon: Radio,
    price: "₹1,20,000",
    previewUrl: defaultPreviewUrl,
    badge: "Premium",
    rating: 4.9,
    features: ["RTMP Support", "Live Chat", "Donations", "Analytics"]
  }
]

export const statistics = [
  {
    value: "500+",
    title: "Happy Customers",
    subtitle: "Trusted by developers worldwide"
  },
  {
    value: "24/7",
    title: "Support",
    subtitle: "Dedicated technical assistance"
  },
  {
    value: "100%",
    title: "Source Code",
    subtitle: "Full ownership and customization"
  }
]
