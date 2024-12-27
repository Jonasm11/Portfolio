"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  image: string
  skills: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "A full-stack responsive portfolio solution with animation and contact possibilities",
    image: "/1.png?height=300&width=400",
    skills: ["React", "Next.js", "FramerMotion", "TailwindCSS"],
    link: "homepage"
  }

]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-black/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-100%]">
                  {project.title}
                </h3>
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 p-4 bg-black/50 backdrop-blur-sm transform transition-transform duration-300 ${
                  hoveredProject === project.id ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <p className="text-sm mb-2 text-white">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-blue-600 px-2 py-1 rounded-full text-white">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

