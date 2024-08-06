import React from 'react'
import Header from '../Components/MainPage/Header'
import Navbar from '../Components/MainPage/Navbar'
import AboutSection from '../Components/MainPage/AboutSection'
import PestSection from '../Components/MainPage/PestSection'
import Scores from '../Components/MainPage/Scores'
import WhoSection from '../Components/MainPage/WhoSection'
import TestimonialsSection from '../Components/MainPage/TestimonialsSection'
import ClientsSection from '../Components/MainPage/ClientsSection'
import FooterSection from '../Components/MainPage/FooterSection'

function Home() {
  return (
    <div>
       <Navbar />
       <Header /> 
       <AboutSection />
       <PestSection />
       <Scores />
       <WhoSection />
       <TestimonialsSection />
       <ClientsSection />
       <FooterSection />
    </div>
  )
}

export default Home
