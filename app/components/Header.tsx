import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const scrollToIntro = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow z-10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a href="#intro" onClick={scrollToIntro} className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-0 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-300">
            Jonas Märzhäuser
          </a>
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <li><a href="#education" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Education</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

