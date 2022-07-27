import React, { useEffect, useState } from 'react'
import iconClose from '../images/icon-close.svg'
import iconNext from '../images/icon-next.svg'
import iconPrev from '../images/icon-previous.svg'
import product1 from '../images/image-product-1-thumbnail.jpg'
import img1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2-thumbnail.jpg'
import img2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3-thumbnail.jpg'
import img3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4-thumbnail.jpg'
import img4 from '../images/image-product-4.jpg'


function ImageSlider(props) {

  const [productImage, setProductImage] = useState(img1);
  const [activeImg, setActiveImg] = useState(null);
  const [currentImg, setCurrentImg] = useState(1);

  useEffect(() => {
    props.setProductThumb(product1);
  }, [])

  const imgHandler = (val, target) => {
    switch (val) {
      case 1:
        setProductImage(img1);
        props.setProductThumb(product1);
        if (activeImg) {
          activeImg.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        break;
      case 2:
        setProductImage(img2);
        props.setProductThumb(product2);
        if (!activeImg) {
          const elem = document.querySelector(".first-img");
          elem.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        else {
          activeImg.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        break;
      case 3:
        setProductImage(img3);
        props.setProductThumb(product3);
        if (!activeImg) {
          const elem = document.querySelector(".first-img");
          elem.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        else {
          activeImg.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        break;
      case 4:
        setProductImage(img4);
        props.setProductThumb(product4);
        if (!activeImg) {
          const elem = document.querySelector(".first-img");
          elem.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        else {
          activeImg.classList.remove("active-img");
          target.classList.add('active-img');
          setActiveImg(target);
          setCurrentImg(val);
        }
        break;
      default:
        break;
    }
  }

  const gallaryHandler = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = 'flex';
  }

  const closeModal = ()=> {
    const modal = document.querySelector(".modal");
    modal.style.display = 'none';
  }

  const nextImg = ()=> {
    
  }



  return (
    <div className="ImageSlider">
      <div className="display-img">
        <img onClick={gallaryHandler} src={productImage} alt="product img" />
      </div>
      <div className="select-img">
        <img onClick={(e) => imgHandler(1, e.target)} src={product1} alt="product img thumb" className='active-img first-img' />
        <img onClick={(e) => imgHandler(2, e.target)} src={product2} alt="product img thumb" />
        <img onClick={(e) => imgHandler(3, e.target)} src={product3} alt="product img thumb" />
        <img onClick={(e) => imgHandler(4, e.target)} src={product4} alt="product img thumb" />
      </div>
      <div className="modal">
        <div onClick={closeModal} className="close-btn">
          <img src={iconClose} alt="" />
        </div>
        <div className="display-img">
          <img src={productImage} alt="product img" />
          <button className='prev'>
            <img src={iconPrev} alt="" />
          </button>
          <button className='next' onClick={nextImg}>
            <img src={iconNext} alt="" />
          </button>

        </div>
        <div className="select-img">
          <img onClick={(e) => imgHandler(1, e.target)} src={product1} alt="product img thumb" className='active-img first-img' />
          <img onClick={(e) => imgHandler(2, e.target)} src={product2} alt="product img thumb" />
          <img onClick={(e) => imgHandler(3, e.target)} src={product3} alt="product img thumb" />
          <img onClick={(e) => imgHandler(4, e.target)} src={product4} alt="product img thumb" />
        </div>
      </div>
    </div>
  )
}

export default ImageSlider