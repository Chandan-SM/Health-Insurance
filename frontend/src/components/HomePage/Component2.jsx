import React from 'react'
import pic5 from '../media/5.png'

function Component2() {
  return (
    <div className='comp-2'>
        <div className='comp2-left'>
          <img className='img' src={pic5} alt="" />
        </div>
        <div className='comp2-right'>
            <h1 className='comp-heading'>Steps</h1>
            <p className='comp-p'>Enter your details, choose your tailored plan, hit that add-to-cart button, and jump straight to our seamless checkout experience. Ahh! Your premium awaits.</p>
        </div>
    </div>
  )
}

export default Component2