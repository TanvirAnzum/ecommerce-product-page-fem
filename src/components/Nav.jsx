import React from 'react';
import "../assets/global.css";
import iconCart from '../images/icon-cart.svg';
import iconDelete from '../images/icon-delete.svg';
import profileImage from '../images/image-avatar.png';


function Nav(props) {


  return (
    <div className='Nav'>
      <h1>
        sneakers
      </h1>
      <ul className="navlist">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="cart">
        <div className="cart-img">
          <img src={iconCart} alt="icon cart" />

          <div className="cart-area">
            <h1>Cart</h1>
            <hr className="cart-line"/>
            <div className="cart-product">
              <img className="cart-p-img" src={props.cartImg} alt="product img" />
              <div className="cart-product-info">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00×{props.itemCount}  <span className='total'>${125.00 * Number(props.itemCount)}</span></p>
              </div>
              <img className="deleteIcon" src={iconDelete} alt="delete icon" />
            </div>
            <button className='checkout-btn'>
              Checkout
            </button>
          </div>

          
        </div>

        <div className="profile-img">
          <img src={profileImage} alt="avatar img" />
        </div>
      </div>
      
      <hr  className="line"/>
      
    </div>
  )
}

export default Nav