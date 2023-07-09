import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import { NextSeo } from 'next-seo'


export default function Home() {
  return (
    <>
    <NextSeo title="Summazon: A new way to " description="Summazon is a new way to ... " />
    <Navbar />
    <Hero />
    
    </>
  )
}
