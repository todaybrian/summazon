import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { NextSeo } from 'next-seo'
import SearchBar from '@/components/SearchBar'


export default function Home() {
  return (
    <>
      <NextSeo title="Summazon: Rise Above the Canopy of Amazon Reviews" description="Summazon summarizes Amazon reviews, categorizing them into key metrics (pros/cons, price, performance, reliability, quality), helping buyers navigate through the sea of products and make informed purchases more easily." />
      <Navbar />
      <Hero />
      <div className="mx-60">
        <SearchBar />
      </div>
      <Footer />

    </>
  )
}
