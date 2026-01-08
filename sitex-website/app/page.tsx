"use client";

import { SiteXLogo1 } from "./components/SiteXLogo1";
import {
  Globe,
  Zap,
  Shield,
  Code,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import TextType from "./components/TextType";
import React from "react";
import "./globals.css";

export default function App() {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <SiteXLogo1 animated={false} className="!bg-transparent !p-0" />
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
            >
              Contact
            </a>
          </nav>
          <button className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-lg hover:bg-[#2563eb] transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white"
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm">
                  🚀 Trusted by 10,000+ businesses
                </span>
              </div>
              <div className="relative mb-6">
                {/* <h1 className="text-5xl md:text-6xl font-extrabold opacity-0">
                  Build Your Dream Website in Minutes
                </h1> */}
                <div className="absolute inset-0">
                  <TextType
                    as="h1"
                    className="text-5xl md:text-6xl h-40"
                    style={{ fontWeight: "800" }}
                    text={["Build Your Dream Website in Minutes"]}
                    typingSpeed={120}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </div>
              </div>
              <p className="text-xl text-blue-100 mb-8 mt-40">
                Professional website solutions that scale with your business.
                Fast, secure, and beautifully designed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-white text-[#1e3a8a] cursor-pointer px-8 py-4 rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 group"
                  style={{ fontWeight: "600" }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
                  style={{ fontWeight: "600" }}
                >
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-blue-100">
                    4.9/5 from 2,000+ reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-lg p-6 shadow-2xl">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mt-6"></div>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="h-12 bg-gray-100 rounded"></div>
                      <div className="h-12 bg-gray-100 rounded"></div>
                      <div className="h-12 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ fontWeight: "800" }}>
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you create, launch, and grow
              your online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Deploy your website to a global CDN for lightning-fast performance worldwide.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized infrastructure ensures your site loads in milliseconds, not seconds.",
              },
              {
                icon: Shield,
                title: "Secure & Safe",
                description:
                  "Enterprise-grade security with SSL, DDoS protection, and automated backups.",
              },
              {
                icon: Code,
                title: "Clean Code",
                description:
                  "Built with modern web standards and best practices for maintainability.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: "700" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6" style={{ fontWeight: "800" }}>
                Professional Website Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From simple landing pages to complex web applications,
                we&apos;ve got you covered.
              </p>
              <div className="space-y-4">
                {[
                  "Custom Website Design",
                  "E-commerce Solutions",
                  "Mobile-Responsive Development",
                  "SEO Optimization",
                  "Content Management Systems",
                  "24/7 Support & Maintenance",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <div className="bg-green-100 rounded-full p-1">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span
                      className="text-gray-700"
                      style={{ fontWeight: "500" }}
                    >
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] p-8 rounded-2xl text-white space-y-3">
                <div className="text-5xl" style={{ fontWeight: "800" }}>
                  99.9%
                </div>
                <p className="text-blue-100">Uptime Guarantee</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl space-y-3 mt-8">
                <div
                  className="text-5xl text-[#1e3a8a]"
                  style={{ fontWeight: "800" }}
                >
                  24/7
                </div>
                <p className="text-gray-600">Customer Support</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl space-y-3">
                <div
                  className="text-5xl text-[#1e3a8a]"
                  style={{ fontWeight: "800" }}
                >
                  10K+
                </div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-[#2563eb] to-[#3b82f6] p-8 rounded-2xl text-white space-y-3 mt-8">
                <div className="text-5xl" style={{ fontWeight: "800" }}>
                  15min
                </div>
                <p className="text-blue-100">Average Setup</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ fontWeight: "800" }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees, cancel
              anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small projects",
                features: [
                  "5 Pages",
                  "Basic SEO",
                  "Mobile Responsive",
                  "SSL Certificate",
                  "Email Support",
                ],
              },
              {
                name: "Professional",
                price: "$79",
                description: "Best for growing businesses",
                features: [
                  "Unlimited Pages",
                  "Advanced SEO",
                  "Mobile Responsive",
                  "SSL Certificate",
                  "Priority Support",
                  "Custom Domain",
                  "Analytics Dashboard",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For large organizations",
                features: [
                  "Everything in Pro",
                  "Dedicated Account Manager",
                  "Custom Integrations",
                  "SLA Guarantee",
                  "White-Label Options",
                  "24/7 Phone Support",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? "ring-2 ring-[#1e3a8a] shadow-xl scale-105"
                    : "shadow-sm"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {plan.popular && (
                  <div
                    className="bg-[#1e3a8a] text-white text-sm px-4 py-1 rounded-full inline-block mb-4"
                    style={{ fontWeight: "600" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl mb-2" style={{ fontWeight: "700" }}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl" style={{ fontWeight: "800" }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <button
                  className={`w-full py-3 rounded-lg transition-all ${
                    plan.popular
                      ? "bg-[#1e3a8a] text-white hover:bg-[#2563eb]"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                  style={{ fontWeight: "600" }}
                >
                  Get Started
                </button>
                <div className="mt-8 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontWeight: "800" }}
          >
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses who trust SiteX for their web presence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all"
              style={{ fontWeight: "600" }}
            >
              Start Your Free Trial
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
              style={{ fontWeight: "600" }}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-gray-400 py-12 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <SiteXLogo1 animated={false} />
              </div>
              <p className="text-sm">
                Building the future of web development, one site at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4" style={{ fontWeight: "600" }}>
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4" style={{ fontWeight: "600" }}>
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4" style={{ fontWeight: "600" }}>
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 SiteX. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
