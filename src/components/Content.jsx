import React from 'react'
import iconCart from '../images/icon-cart.svg'
import iconMinus from '../images/icon-minus.svg'
import iconPlus from '../images/icon-plus.svg'



function Content() {
  return (
    <div className="Content">
      <h3>sneaker company</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <h2>$125.00</h2>
      <h4>$250.00</h4>

      <div className="content-buttons">
        <div className='content-counter'>
          <img src={iconMinus} alt="" />
          <p>value</p>
          <img src={iconPlus} alt="" />
        </div>
        <button>
          <img src={iconCart} alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Content