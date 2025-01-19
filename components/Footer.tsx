"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: "https://x.com",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@quantstruct.com",
    },
  ]

  return (
    <footer className="relative bg-[#A88866] text-white">
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-200">
                Quantstruct delivers innovative solutions for modern businesses.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "About", "Contact", "Privacy Policy"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href="#" 
                    className="text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-200">
              Get in touch with us for any inquiries or support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
            <p>© Quantstruct, Inc. {currentYear}</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

