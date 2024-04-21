import { ReactNode } from 'react'
import { motion, useScroll } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll()

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      <Header />
      <main className="mt-spaceHeader mx-auto min-h-screen max-w-screen-wide px-8 py-3 md:px-12 md:py-4 lg:px-16 lg:py-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
