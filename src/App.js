import { useState } from "react";
import "./assets/global.css";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import Nav from "./components/Nav";

function App() {
  const [productThumb,setProductThumb] = useState(null);
  const [cartItems,setCartItems] = useState(null);
  const [itemCounter, setItemCounter] = useState(0);

  return (
    <div className="App">
     <Nav 
     cartImg = {productThumb}
     itemCounter = {itemCounter}
     cartItems = {cartItems}
     />
     <ImageSlider
     productThumb = {productThumb}
     setProductThumb = {setProductThumb}
     />
     <Content
     itemCounter = {itemCounter}
     setItemCounter = {setItemCounter}
     setCartItems = {setCartItems}
     />
    </div>
  );
}

export default App;
