import { useState } from "react";
import "./assets/global.css";
import Content from "./components/Content";
import ImageSlider from "./components/ImageSlider";
import Nav from "./components/Nav";

function App() {
  const [productThumb,setProductThumb] = useState(null);

  return (
    <div className="App">
     <Nav 
     cartImg = {productThumb}
     itemCount = {3}
     />
     <ImageSlider
     productThumb = {productThumb}
     setProductThumb = {setProductThumb}
     />
     <Content />
    </div>
  );
}

export default App;
