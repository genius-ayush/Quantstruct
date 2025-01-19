'use client'

import { Button } from "@/components/ui/button"
import { ButtonHTMLAttributes } from 'react'
import { motion } from "framer-motion"
import { MessageSquare, Sparkles, Users } from 'lucide-react'
declare module 'framer-motion' {
  export interface MotionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    whileHover?: any
    whileTap?: any
    initial?: any
    animate?: any
    transition?: any
  }
}

export default function Endnote() {
  return (
    <section id="contact" className="relative min-h-[60vh] py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F3F1F1] to-white">
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
              background: '#A88866',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              filter: 'blur(100px)',
            }}
          />
        ))}
      </div>

      
      <div className="relative max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2 
            className="text-[#A88866] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Be human when reviewing docs, not writing them
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join thousands of teams who have already transformed their documentation process
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Users, text: "10k+ Active Users" },
            { icon: Sparkles, text: "AI-Powered Reviews" },
            { icon: MessageSquare, text: "24/7 Support" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <feature.icon className="w-8 h-8 text-[#A88866] mb-2" />
              <p className="text-gray-700 font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button 
            className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-md relative overflow-hidden group"
            //@ts-ignore
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#A88866] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative flex items-center gap-2">
              Talk to a Human
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                👋
              </motion.span>
            </span>
          </Button>
        </motion.div>

        
      </div>
    </section>
  )
}

