import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center'>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className='text-5xl font-bold'>We Build Software That Ships</h1>
        <p className='text-xl mt-4'>Fintech · Mobile · Automation</p>
      </motion.div>
    </section>
  )
}