import React from 'react';

import {Link} from 'react-router-dom';
import "./Header.css";
import Navbar from '../Navbar/Navbar';


const Header = () => {
  return (
   <div className='top-header'>
     <div className='container'>
     <div className='header'>
     <div className=' trai'>
     <ul>
        <li>
       <Link to='/kenh'>
        <div className='link'>Kênh Người Bán</div>
       </Link>
       <div className='gach'>|</div>
        </li>
        <li>
       <Link to='/kenh'>
        <div className='link'>
        Trở thành Người bán Shopee
        </div>
        
       </Link>
       <div className='gach'>|</div>


        </li>
        <li>
       <Link to='/kenh'>
        <div className='link'>Tải ứng dụng</div>
       </Link>
       <div className='gach'>|</div>
        </li>
        <li>
       <Link to='/kenh'>
        <div className='link'>
        Kết nối
        </div>
       </Link>
       <div className='gach'>|</div>
        </li>
        <li>
        <i class="fa-brands fa-facebook"></i>
        </li>
        <li>
        <i class="fa-brands fa-instagram"></i>
        </li>
      </ul>
     </div>

     <div className=' phai'>
      <ul>
      <li>
        <i class="fa-sharp fa-solid fa-bell"></i>
        </li>
        <li>
          <Link>
          <div className='link'>
          <div className='thongbao'> Thông báo</div>
          
          <div className='thongbao-text'>fgdfgdfgfdgd</div>
          
          </div>
          </Link>
        </li>
        <li>
        <i class="fa-solid fa-wifi"></i>
        </li>
        <li>
        <Link>
          <div className='link'>
          
          <div className='thongbao'> Hỗ trợ</div>
          
          <div className='thongbao-text'></div>
          
          </div>
          </Link>
        
          
        </li>
        <li>
        <i class="fa-solid fa-globe"></i>
        </li>
        <li>
        <Link>
          <div className='link'>
          <div className='tiengviet'>
          Tiếng việt
          </div>
          <ul className='ngonngu'>
            <li>
            Tiếng việt
            </li>
            <li>
              English
            </li>
          </ul>
          </div>
          </Link>
       
          
        </li>
       
      </ul>
      
     </div>

     <div className=' cuoi'>
      <ul>
      <li>
      
      <Link>
        <div class="link">
        Đăng ký
        </div>
      </Link>
          
          
        </li>
        <li>
        <Link>
        <div class="link">
        Đăng nhập
        </div>
      </Link>
       
          
        </li>
      </ul>
     </div>

     </div>
    <div className='Navbar'>
      <Navbar/>
      
    </div>
    
    </div>
   </div>
    

    
  )
}

export default Header