import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";

import DigitalCountdown from '../components/digitalCountdown'
import Scheduling from '../components/scheduling'


const timeline = () => {
  return (
    <div className="bg-black w-screen overflow-y-auto flex flex-col  relative text-base font-bold font-space-grotesk text-white ">
    
    <div>
     <Header />
      <DigitalCountdown/>
      <Scheduling/>

      <div className="w-full">
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default timeline
