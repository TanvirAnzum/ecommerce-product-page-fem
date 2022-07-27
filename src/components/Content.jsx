import React from 'react'
import iconCart from '../images/icon-cart.svg'
import iconMinus from '../images/icon-minus.svg'
import iconPlus from '../images/icon-plus.svg'



function Content(props) {

  const decreaseCounter = () => {
    if(!props.itemCounter) return;
    else {
      props.setItemCounter(props.itemCounter - 1);
    }
  }

  const increaseCounter = () => {
    props.setItemCounter(props.itemCounter + 1);  
  }

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
          <img onClick={decreaseCounter} className='minus' src={iconMinus} alt="" />
          <p>{props.itemCounter}</p>
          <img onClick={increaseCounter}  src={iconPlus} alt="" />
        </div>
        <button>
          <img className='btn-img' src={iconCart} alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Content