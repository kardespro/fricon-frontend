import Head from '../components/Header'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Emojis from '../components/Emojis'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="z-0">
    <html data-theme="light">
       <Head />
    <Navbar />
     <div className="-z-1">
      
      <Hero />
       <div className="blurple bg-gray-50 text-center shadow-4xl index-nego">
         <h1 className="pt-6 text-indigo-500 font-bold text-2xl">Emojis</h1>
         <p className="text-neutral-500 text-lg">Blurple emojis adore you </p>
        <Emojis />
     </div>
    </div>
   </html>
  </div>
      <br/>
  <Footer />
    </>
  )
}
