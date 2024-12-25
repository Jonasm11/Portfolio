'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  const [text, setText] = useState('Fullstack Web Developer')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullTexts = ['Fullstack Web Developer', 'Software Developer']
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, isDeleting ? 50 : 150)

    return () => clearInterval(ticker)
  }, [text, isDeleting])

  const tick = () => {
    let i = loopNum % fullTexts.length
    let fullText = fullTexts[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  return (
    <section id="intro" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jonas</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 dark:text-white">
              a <span className="text-blue-600 dark:text-blue-400">{text}</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 dark:text-gray-300 leading-relaxed">
              Welcome to my portfolio! I'm passionate about creating web applications
              and constantly learning new technologies. Here you'll find some of my projects 
              and skills as I journey through the world of development.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              onClick={() => window.open('/jonas_maerzhaeuser_cv.pdf', '_blank')}
            >
              Download Resume
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl">
              <Image
                src="/intro.png?height=400&width=400"
                alt="Jonas"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

