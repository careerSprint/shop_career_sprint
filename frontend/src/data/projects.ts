import { ShoppingCart, Users, Video, Radio } from "lucide-react"
import { Project } from "@/components/projects/ProjectCard"

const defaultPreviewUrl = "https://www.sharwings.in/"

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "Complete online shopping solution with payment integration, inventory management, and admin dashboard.",
    icon: ShoppingCart,
    price: "$299",
    previewUrl: defaultPreviewUrl,
    badge: "Popular",
    rating: 4.9,
    features: ["React & Node.js", "Stripe Integration", "Admin Panel", "Mobile Responsive"]
  },
  {
    id: "crm",
    title: "CRM System",
    description: "Customer relationship management system with lead tracking, analytics, and communication tools.",
    icon: Users,
    price: "$399",
    previewUrl: defaultPreviewUrl,
    badge: "Enterprise",
    rating: 4.9,
    features: ["Lead Management", "Analytics Dashboard", "Email Integration", "Custom Reports"]
  },
  {
    id: "video-call",
    title: "Video Call Platform",
    description: "Real-time video conferencing solution with screen sharing, chat, and recording capabilities.",
    icon: Video,
    price: "$499",
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
    price: "$599",
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
