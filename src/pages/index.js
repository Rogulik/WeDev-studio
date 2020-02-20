import React from "react"
import Header from '../components/header'
import AboutUs from '../components/aboutUs'
import Services from '../components/services'
import Summary from '../components/summary'
import Technologies from '../components/technologies'
import Footer from '../components/footer'
import '../styles/styles.scss'
import '../styles/index.scss'



const IndexPage = () =>{
 
  return (
    <div className='entire-page'>
      <div className='with-gradient'>
          <Header />
          <AboutUs />
          <Services />
      </div>
      <Summary />
      <Technologies />
      <Footer />
    </div>
  )
} 

export default IndexPage
