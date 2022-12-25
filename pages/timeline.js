import React from 'react'
import DigitalCountdown from '../components/digitalCountdown'
import Scheduling from '../components/scheduling'
import Header from "../components/header";
import Footer from "../components/footer";

const timeline = () => {
  return (
    <div>
      <Header/>
      <DigitalCountdown/>
      <Scheduling/>
      <Footer/>
    </div>
  )
}

export default timeline
