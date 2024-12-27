'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

interface Technology {
  name: string
  icon: string
}

interface Step {
  title: string
  description: string
  code: string
}

const technologies: Technology[] = [
  { name: 'React', icon: '/placeholder.svg?height=24&width=24' },
  { name: 'Next.js', icon: '/placeholder.svg?height=24&width=24' },
  { name: 'TypeScript', icon: '/placeholder.svg?height=24&width=24' },
  { name: 'Tailwind CSS', icon: '/placeholder.svg?height=24&width=24' },
  { name: 'Framer Motion', icon: '/placeholder.svg?height=24&width=24' },
]

const steps: Step[] = [
  {
    title: 'Projektinitialisierung',
    description: 'Ich habe mein Projekt mit Next.js und TypeScript initialisiert, um von statischer Generierung und serverseitigem Rendering zu profitieren.',
    code: `npx create-next-app@latest my-portfolio --typescript`,
  },
  {
    title: 'Styling mit Tailwind CSS',
    description: 'Tailwind CSS wurde für schnelles und konsistentes Styling implementiert.',
    code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
  },
  {
    title: 'Animationen mit Framer Motion',
    description: 'Framer Motion wurde für flüssige und interaktive Animationen hinzugefügt.',
    code: `npm install framer-motion`,
  },
  {
    title: 'Komponenten-Entwicklung',
    description: 'Ich habe wiederverwendbare Komponenten wie Intro, Projects, Education und Skills erstellt.',
    code: `// Beispiel für die Intro-Komponente
export default function Intro() {
  return (
    <section className="min-h-screen flex items-center">
      <h1>Willkommen auf meiner Portfolio-Seite</h1>
      {/* ... */}
    </section>
  )
}`,
  },
  {
    title: 'Responsive Design',
    description: 'Mit Tailwind CSS habe ich ein vollständig responsives Design umgesetzt.',
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Responsive Grid-Layout */}
</div>`,
  },
]

const typescriptFeatures = [
  'Statische Typisierung',
  'Interfaces und Type Aliases',
  'Generics',
  'Enums',
  'Union und Intersection Types',
]

const nextjsAdvantages = [
  'Server-Side Rendering (SSR)',
  'Static Site Generation (SSG)',
  'Automatische Code-Splitting',
  'Optimierte Bildverarbeitung',
  'API-Routen',
]

const tailwindAdvantages = [
  'Schnelle Entwicklung durch vordefinierte Utility-Klassen',
  'Hochgradig anpassbar und konfigurierbar',
  'Geringere Dateigröße durch PurgeCSS-Integration',
  'Konsistentes Design durch ein vordefiniertes Designsystem',
  'Einfache Erstellung von responsiven Layouts',
  'Verbesserte Lesbarkeit des HTML durch semantische Klassen',
]

export default function ComprehensivePortfolio() {
  const [currentStep, setCurrentStep] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mein Webentwicklungs-Portfolio
        </motion.h1>

        {/* Technologies Section */}
        <motion.section 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Verwendete Technologien</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <Image src={tech.icon} alt={tech.name} width={48} height={48} className="mb-2" />
                <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Process Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Entwicklungsprozess</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{step.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TypeScript Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">TypeScript Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typescriptFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Next.js Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Warum Next.js?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nextjsAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                {advantage}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Framer Motion Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Framer Motion: Animationen leicht gemacht</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Framer Motion ist eine leistungsstarke Animations-Bibliothek für React, die es ermöglicht, komplexe Animationen mit einfachem, deklarativem Code zu erstellen.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Einfache API für grundlegende und fortgeschrittene Animationen</li>
                <li>Unterstützung für Gesten und Drag-and-Drop</li>
                <li>Animierte Layoutänderungen</li>
                <li>Performante Animationen dank der Verwendung der Web Animation API</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg flex items-center justify-center"
                variants={containerVariants}
              >
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-16 h-16 bg-white rounded-full mx-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-red-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        borderRadius: ["50%", "25%", "50%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Tailwind CSS Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Tailwind CSS: Effizientes und flexibles Styling</h2>
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tailwind CSS ist ein utility-first CSS-Framework, das die Entwicklung von benutzerdefinierten Designs beschleunigt und vereinfacht.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {tailwindAdvantages.map((advantage, index) => (
                  <motion.li key={index} variants={itemVariants}>{advantage}</motion.li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tailwind CSS Beispiel</h4>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                      Primär
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                      Sekundär
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                    <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Suche..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                      className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center justify-between transition duration-300 ease-in-out"
                    >
                      <span>Dropdown</span>
                      <svg
                        className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 py-2 w-full bg-white rounded-md shadow-lg"
                        >
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 1</a>
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 2</a>
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 3</a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Conclusion Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Fazit</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Diese Seite demonstriert die Verwendung von Next.js, TypeScript, Tailwind CSS und Framer Motion zur Erstellung einer modernen, performanten und interaktiven Webseite.
          </p>
          <a 
            href="https://github.com/yourusername/your-portfolio-repo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Zum GitHub-Repository
          </a>
        </motion.section>
      </main>
    </div>
  )
}

