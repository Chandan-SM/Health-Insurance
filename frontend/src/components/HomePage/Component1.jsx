import React from 'react'
import pic6 from '../media/6.png'

function Component1() {
  return (
    <div className='comp-1'>
        <div className='comp1-left'>
            <h1 className='comp-heading'>Premium Bliss</h1>
            <p className='comp-p'>Discover the most amazing insurance premiums and benefits that’ll have you dancing in the streets! Our super magical comparison tool fetches unicorn-level deals just tailored for you.</p>
        </div>
        <div className='comp1-right'>
          <img className='img' src={pic6} alt="" />
        </div>
    </div>
  )
}

export default Component1