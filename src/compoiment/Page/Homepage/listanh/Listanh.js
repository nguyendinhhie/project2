import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./listanh.css"
import { useState } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
const Listanh = ({productsingle}) => {
  const images=[
    "https://cdn.tgdd.vn/Products/Images/42/157031/samsung-galaxy-a6-2018-2-600x600.jpg",
     "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-black-400x460.png",
     "https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-red-600x600.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg",
     "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-black-400x460.png",
     "https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-red-600x600.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg"
  ]
console.log(productsingle);
console.log(productsingle.img);
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  const[hien,sethien]=useState("none")
  const hieu=()=>{
    console.log("dfdfdf");
    sethien("block")
  }
  
  const [anh,setanh]=useState(productsingle.img)
  console.log(anh);
  return (
    
    <div>
      <div>
      <div className='tren-anh'>
   <img src={anh} 
   className='anhtren' alt='sds' 
   onClick={()=>hieu()} >

   </img>
      <div className='anh-an' style={{display:`${hien}`}}>
      <div className='trai-oneanh'>
      <img src={anh} ></img>
      
      </div>
      <div className='phai-listanh'>
      {images.map((img,index)=>(
        <div key={index} className=' listanh' onMouseOver={()=>setanh(img)} >
          <img src={img}></img>
        </div>
      ))}
      </div>
      <div className='close'onClick={()=>sethien("none")} >
        X
      </div>
      </div>
    </div>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}` } onMouseOver={()=>setanh(image)
              
          } style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Listanh;