
"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play, Headphones, Users, Star } from 'lucide-react'
import { AnimatedBackground } from '../components/AnimatedBackground'


export default function CyberpunkMusicStream() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  const tracks = [
    { id: 1, title: "Neon Nights", artist: "Cyber Samurai", votes: 1337 },
    { id: 2, title: "Digital Dreams", artist: "Pixel Punk", votes: 982 },
    { id: 3, title: "Glitch in the System", artist: "Binary Bandit", votes: 765 },
  ]
return (
    <div className="min-h-screen bg-black text-white font-cyberpunk">
      <AnimatedBackground />
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          NeonBeats
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Discover</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Create</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Connect</a></li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50"></div>
            <div className="absolute inset-0 bg-[url('/glitch-overlay.png')] opacity-20 mix-blend-screen"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center"
          >
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Unleash Your Sound
            </h2>
            <p className="text-xl mb-8">Where creators and listeners collide in a neon-soaked digital realm</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Creating
            </motion.button>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-white opacity-75" />
          </motion.div>
        </section>

        <section className="py-20 px-6">
          <h3 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Top Tracks
          </h3>
          <div className="max-w-4xl mx-auto grid gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg shadow-lg flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredTrack(index)}
                onHoverEnd={() => setHoveredTrack(null)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Play size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{track.title}</h4>
                    <p className="text-sm text-gray-400">{track.artist}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span>{track.votes}</span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: hoveredTrack === index ? 1 : 0, scale: hoveredTrack === index ? 1 : 0.8 }}
                    className="ml-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    Vote
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-black to-blue-900">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Why NeonBeats?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Headphones size={32} />}
                title="Immersive Audio"
                description="Experience music like never before with our cutting-edge audio technology."
              />
              <FeatureCard 
                icon={<Users size={32} />}
                title="Community-Driven"
                description="Connect with fellow creators and fans in our vibrant digital ecosystem."
              />
              <FeatureCard 
                icon={<Star size={32} />}
                title="Fair Compensation"
                description="Our innovative voting system ensures creators are rewarded for their talent."
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Ready to Dive In?
            </h3>
            <p className="text-xl mb-8">Join the revolution and shape the future of music streaming</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 text-center text-gray-500">
        <p>&copy; 2024 NeonBeats. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-lg shadow-lg text-center"
      whileHover={{ y: -5 }}
    >
      <div className="inline-block p-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

