"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { Code, Server, Database, Globe, FileCode, Users, Car, Beer,Music, User} from 'lucide-react'

const images = [
  "/about_pic1.png?height=800&width=800",
  "/about_pic2.png?height=800&width=800",
  "/about_pic3.png?height=800&width=800",
  "/about_pic4.png?height=800&width=800",
  "/about_pic5.png?height=800&width=800",
]

const quotes = [
  {
    text: "Always in a good mood and it's fun to be around him.",
    author: "Friends"
  },
  {
    text: "a Day is just a Day we need to make the best out of it‚",
    author: "Myself"
  },
  {
    text: "Nothing makes me happier than working on something that truly makes a difference.",
    author: "Myself"
  },
  {
    text: "Always helpful and punctual, haha.",
    author: "Colleague from work"
  }
]

const skills = [
  { name: "Bar Work {Voluntary}", icon: Beer },
  { name: "Driving Motorcycle", icon: Car },
  { name: "Festivals", icon: Music },
  { name: "Meeting up with Friends", icon: User },
]

const About = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    const quoteTimer = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length)
    }, 10000)

    return () => {
      clearInterval(imageTimer)
      clearInterval(quoteTimer)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        className="container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-600 dark:text-blue-400"
                variants={itemVariants}
              >
                About Me Beyond Tech
              </motion.h2>
              <motion.p className="text-base md:text-lg mb-4 text-gray-700 dark:text-white" variants={itemVariants}>
                As a passionate full stack developer, I thrive on creating elegant solutions 
                to complex problems. With a strong foundation in both front-end and back-end 
                technologies, I build scalable and efficient web applications that make a 
                real-world impact.
              </motion.p>
              <motion.p className="text-base md:text-lg mb-6 text-gray-700 dark:text-white" variants={itemVariants}>
                My journey in web development began 5 years ago, and since then, I've had 
                the privilege of working on diverse projects - from e-commerce platforms 
                to data-intensive dashboards. I'm always eager to embrace new technologies 
                and continuously improve my skills.
              </motion.p>
              <motion.div className="mt-6 md:mt-8" variants={itemVariants}>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-blue-600 dark:text-blue-400">Hobbys</h3>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-2 bg-white dark:bg-gray-700 p-2 rounded-md shadow-sm"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm md:text-base text-gray-800 dark:text-white">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                className="mt-6 md:mt-8 bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600 dark:text-blue-400">Quotes</h3>
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-800 dark:text-white"
                  >
                    <motion.p 
                      className="text-base md:text-lg italic mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      &ldquo;{quotes[currentQuote].text}&rdquo;
                    </motion.p>
                    <motion.footer 
                      className="text-right text-sm md:text-base text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      — {quotes[currentQuote].author}
                    </motion.footer>
                  </motion.blockquote>
                </AnimatePresence>
              </motion.div>
            </div>
            <motion.div 
              className="w-full md:w-1/2 mt-8 md:mt-0" 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={images[currentImage]}
                      alt={`Project ${currentImage + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                        index === currentImage ? "bg-blue-600" : "bg-blue-300"
                      }`}
                      onClick={() => setCurrentImage(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

