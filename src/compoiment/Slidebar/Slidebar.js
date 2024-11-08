import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import { Link } from 'react-router-dom';

export default function Slidebar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Bật autoplay
    autoplaySpeed: 4000, // Thay đổi thời gian chuyển slide (2 giây trong trường hợp này)
  };
 
  return (
   <div className='top'>
       <div className="slider-container">
      <div className='phai-slide'>
      <Slider {...settings} className='slide'>
        <div>
          <img src="https://cf.shopee.vn/file/vn-11134258-7ras8-m0tuxz8vz1xrb3_xxhdpi"></img>
        </div>
        <div>
          <img src="https://cf.shopee.vn/file/sg-11134258-7rdyl-m0tvwx655jwkb8_xxhdpi"></img>
        </div>
        <div>
          <img src="https://cf.shopee.vn/file/sg-11134258-7rdxx-m0wjwej4ohutf5_xxhdpi"></img>
        </div>
        <div>
          <img src="https://cf.shopee.vn/file/sg-11134258-7rdxq-m0tw4sz7u3j9c2_xxhdpi"></img>
        </div>
        <div>
          <img src="https://cf.shopee.vn/file/sg-11134258-7rdyx-m0tw9qic1he6e4_xxhdpi"></img>
        </div>
        <div>
          <img src="https://cf.shopee.vn/file/sg-11134258-7rdwb-m0u0dggdvddm15_xxhdpi"></img>
        </div>
        
      </Slider>
      </div>
      <div className='trai-slide'>
      <div>
        <img src='https://cf.shopee.vn/file/sg-11134258-7rdw0-m0u3eqo4mghw1c_xhdpi' alt='sd'></img>
      </div>
      <div>
        <img src='https://cf.shopee.vn/file/sg-11134258-7rdx8-m0u3xx0mdudg6b_xhdpi' alt='sd'></img>
      </div>
      </div>
      
    </div>
    <div className='slide-cuoi'>
    <div className='item'>
      <Link to={"/product"}>
      <ul>
        <li>
          <img src='https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi'></img>
        </li>
        <li>Voucher Giảm Đến 1 Triệu</li>
      </ul>
      </Link>
      <Link>
      <ul>
        <li>
        <img src='https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi'></img>
        </li>
        <li>Miễn Phí Ship
        - Có Shopee</li>
      </ul>
      </Link>
     <Link>
     <ul>
        <li>
        <img src='https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi'></img>
        </li>
        <li>Khung Giờ 
        Săn Sale</li>
      </ul>
     </Link>
      <Link>
      <ul>
        <li>
        <img src='https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi'></img>
        </li>
        <li>Mã Giảm Giá</li>
      </ul>
      </Link>
      <Link>
      <ul>
        <li>
        <img src='https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi'></img>
        </li>
        <li>Shopee
        Siêu Rẻ</li>
      </ul>
      </Link>
      <Link>
      <ul>
        <li>
        <img src='https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi'></img>
        </li>
        <li>Shopee Style
        Voucher 30%</li>
      </ul>
      </Link>
      <Link>
      <ul>
        <li>
        <img src='https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi'></img>
        </li>
        <li>Hàng Quốc Tế</li>
      </ul>
      </Link>
      <Link>
      <ul>
        <li>
        <img src='https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi'></img>
        </li>
        <li>Shopee Style
        Voucher 30%</li>
      </ul>
     
      </Link>
      
    </div>
     </div>
    
   </div>
  );
}




