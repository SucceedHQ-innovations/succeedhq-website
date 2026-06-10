import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { CaseStudies } from '@/components/CaseStudies'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>SucceedHQ innovations — Software Engineering Studio</title>
      </Head>
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
    </>
  )
}