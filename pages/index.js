import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colin Maloney</title>
        <meta name="description" content="Personal Resume website for Colin Maloney" />
        <link rel="icon" href="/laptop.ico" />


      </Head>
      <Navbar />
      <AboutMe/>
      <Projects/>
    </div>
  )
}
