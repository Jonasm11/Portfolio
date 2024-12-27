'use client'

import { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface EducationItem {
  date: string
  institution: string
  degree: string
}

const educationData: EducationItem[] = [
  {
    date: "März 2008 — Juli 2010",
    institution: "Deutsche Botschaftsschule Peking",
    degree: "Grundschule"
  },
  {
    date: "August 2010 — Juli 2013",
    institution: "Lindenhof-Grundschule, Stahnsdorf",
    degree: "Grundschule"
  },
  {
    date: "August 2013 — Oktober 2015",
    institution: "Peter - Joseph Lenné Gesamtschule",
    degree: "Realschule"
  },
  {
    date: "Dezember 2015 — März 2017",
    institution: "Internationale Deutsche Schule Brüssel",
    degree: "Realschule"
  },
  {
    date: "August 2018 — Juli 2021",
    institution: "IT Schule Stuttgart",
    degree: "Allgemeine Hochschulreife"
  }, {
    date: "September 2023 — November 2024",
    institution: "beratungswerk24 AG",
    degree: "Software Developer"
  },
]

const Education: FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          &lt;Education Journey / &gt;
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500"
            initial={{ height: 0 }}
            animate={isInView ? { height: 'calc(100% + 4rem)' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-8`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0`}>
                <motion.div 
                  className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.institution}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mt-2 font-medium">{item.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-3">{item.degree}</p>
                </motion.div>
              </div>
              <div className="w-2/12 flex justify-center my-4 md:my-0">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                ></motion.div>
              </div>
              <div className="w-full md:w-5/12"></div>
            </motion.div>
          ))}
          <div className="h-16"></div>
        </div>
      </div>
    </section>
  )
}

export default Education

