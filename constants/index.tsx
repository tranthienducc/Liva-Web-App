import IconsHeadphone from "@/components/icons/IconsHeadphone";
import IconsLight from "@/components/icons/IconsLight";
import IconsLightning from "@/components/icons/IconsLightning";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Bell,
  Book,
  CreditCard,
  GalleryHorizontal,
  Home,
  Settings,
} from "lucide-react";
import React from "react";

export const enterprises = [
  {
    icon: <IconsLightning />,
    title: "Real-time data processing",
    desc: "Handle and analyze data instantly, providing actionable insights without delays.",
  },
  {
    icon: <IconsLight />,
    title: "Smart automation",
    desc: "Automate repetitive tasks, freeing up time and boosting productivity across your team.",
  },
  {
    icon: <IconsHeadphone />,
    title: "Natural language understanding",
    desc: "Understands and responds to human language, making interactions intuitive.",
  },
  {
    icon: <IconsLightning />,
    title: "Predictive analytics",
    desc: "Anticipate trends with AI models, helping you make informed decisions.",
  },
  {
    icon: <IconsLight />,
    title: "Multi-platform integration",
    desc: "Connect with existing tools, ensuring smooth workflows and collaboration.",
  },
  {
    icon: <IconsHeadphone />,
    title: "Continuous learning",
    desc: "Our AI evolves with every interaction, becoming smarter over time.",
  },
];

export const pricingData = [
  {
    icon: <IconsLightning />,
    kind: "Starter",
    title: "Membership",
    desc1: "Landing page or Templates free all a month",
    price: "$100",
    desc2: "Converting Copy, Design, Development",
    interest: [
      "Unique subpages: $500/page",
      "Strive development",
      "48 hour delivery",
      "Direct access slack channel",
      "Onboarding strategy call",
      "High converting copy, design included",
      "UX research and user journey",
      "Satisfaction guaranteed",
    ],
  },
  {
    icon: <IconsLightning />,
    kind: "Most Popular",
    title: "Pro/Year",
    desc1: "1 Active Request",
    price: "$500",
    desc2: "Pause or cancel anytime",
    interest: [
      "No contract or commitment",
      "Unlimited requests",
      "48 hour delivery",
      "Direct access slack channel",
      "Multiple brands, one subscription",
      "Unlimited revisions",
      "Includes copy, design, & development",
      "Pause anytime",
    ],
  },
];

export const footerData = {
  products: [
    { path: "/ai", title: "AI" },
    { path: "/enterprise", title: "Enterprise" },
    { path: "/nextjs", title: "Next.js" },
    { path: "/observability", title: "Observability" },
    { path: "/previews", title: "Previews" },
    { path: "/rendering", title: "Rendering" },
    { path: "/security", title: "Security" },
    { path: "/turbo", title: "Turbo" },
    { path: "/v0", title: "v0" },
  ],
  resources: [
    { path: "/community", title: "Community" },
    { path: "/docs", title: "Docs" },
    { path: "/experts", title: "Experts" },
    { path: "/guides", title: "Guides" },
    { path: "/help", title: "Help" },
    { path: "/integrations", title: "Integrations" },
    { path: "/pricing", title: "Pricing" },
    { path: "/resources", title: "Resources" },
    { path: "/templates", title: "Templates" },
  ],
  company: [
    { path: "/about", title: "About" },
    { path: "/blog", title: "Blog" },
    { path: "/careers", title: "Careers" },
    { path: "/changelog", title: "Changelog" },
    { path: "/contact", title: "Contact Us" },
    { path: "/customers", title: "Customers" },
    { path: "/partners", title: "Partners" },
    { path: "/privacy", title: "Privacy Policy" },
    { path: "/legal", title: "Legal" },
  ],
  social: [
    {
      path: "https://github.com",
      title: "GitHub",
      icon: <GitHubLogoIcon className="size-3" />,
    },
    {
      path: "https://linkedin.com",
      title: "LinkedIn",
      icon: <LinkedInLogoIcon className="size-3" />,
    },
    {
      path: "https://twitter.com",
      title: "Twitter",
      icon: <TwitterLogoIcon className="size-3" />,
    },
    {
      path: "https://youtube.com",
      title: "YouTube",
      icon: <GalleryHorizontal className="size-3" />,
    },
  ],
};

export const MENU_ITEMS = (
  workspaceId: string
): { title: string; href: string; icon: React.ReactNode }[] => [
  {
    title: "Home",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Home size={20} className="text-[#9d9d9d]" />,
  },
  {
    title: "Library",
    href: `/dashboard/${workspaceId}`,
    icon: <Book size={20} className="text-[#9d9d9d]" />,
  },
  {
    title: "Notifications",
    href: `/dashboard/${workspaceId}/notifications`,
    icon: <Bell size={20} className="text-[#9d9d9d]" />,
  },
  {
    title: "Billing",
    href: `/dashboard/${workspaceId}/billing`,
    icon: <CreditCard size={20} className="text-[#9d9d9d]" />,
  },
  {
    title: "Settings",
    href: `/dashboard/${workspaceId}/settings`,
    icon: <Settings size={20} className="text-[#9d9d9d]" />,
  },
];
