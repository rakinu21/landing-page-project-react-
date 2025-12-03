import React from 'react'
import { Hero } from './Hero'
import { About } from './About'
import '../styles/home.css'

export const Home = () => {
  return (
    <section className='home'>
        <Hero/>
        <About/>
    </section>
  )
}
