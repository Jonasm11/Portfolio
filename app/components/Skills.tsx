"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Skill = {
  name: string
  category: 'frontend' | 'backend' | 'other'
}

const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Nextjs', category: 'frontend' },
  {name: 'Node.js', category: 'backend' },
  {name: 'Html', category:'frontend'},
  {name: 'CSS', category:'frontend'},
  {name:'Facebook Ads Manager', category: 'other'},
  {name:'Javascript', category:'backend'},



]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'other'>('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  )

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="mb-10 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['all', 'frontend', 'backend', 'other'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as typeof activeCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {skill.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

