import React from 'react'
import pic8 from '../media/8.png'
import pic7 from '../media/7.png'

function Hero() {
  return (
    <div className='start'>
      <img className='hero-img' src={pic8} alt="" />
      <div className='web-name'>Insure Me</div>
      <img className='hero-img' src={pic7} alt="" />
    </div>
  )
}

export default Hero