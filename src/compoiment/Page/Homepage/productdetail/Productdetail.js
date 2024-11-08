import React from 'react'
import "./productdetail.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../../../../store/cartslice';
import ProductPage from '../../productpage/ProductPage';
import Listanh from '../listanh/Listanh';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
function Productdetail({productsingle,listproduct}) {
  const dispatch = useDispatch(); // Khởi tạo dispatch
  console.log(productsingle);
  //console.log(listproduct);
  const[next,setnext]=useState(1)

  const [anh,setanh]=useState(productsingle.img)
  const listproductslice=listproduct.slice(0,4)
  const listproductfilter=listproduct.filter(products=>products.company===productsingle.company).slice(0,4)
  
  
  return (
  <div className='productdetail-list'>
      <div className='productdetail'>
   <div className='trai'>
   
    <div className='hh'>
    <Listanh productsingle={productsingle}/>
   </div>
    
   </div>
   <div className='giua'>
   <div className='sanpham'>Sản phẩm</div>
    <div> Name:   {productsingle.name}</div>
    <div>Company:   { productsingle.company}</div>
    <div className='pricesingle'> Price:   {productsingle.price}</div>
    
    <div className='tanggiam'>
      <div>
        <button onClick={()=>setnext(next-1)} disabled={next===1}>-</button>
      </div>
      <div>
        <input value={next} ></input>
      </div>
      <div>
        <button style={{margin:"5px"}} onClick={()=>setnext(next+1)}>+</button>
      </div>
    </div>
    <ul>
        <li>
          <div className='sizelist'>Size:
          <div className='size'>XL</div>
          <div className='size'>X</div>
          <div className='size'>S</div>
          <div className='size'>M</div>
          <div className='size'>M</div>
          <div className='size'>L</div>
          <div className='size'>XXL</div>
          </div>
        </li>
      </ul>
      <ul className='mau'>
        <li>
          
        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
      </ul>
     
    <div className='nutbam'> 
    <button className='nut'>Thêm  giỏ hàng</button>
    <button className='nut fa-solid fa-cart-plus' onClick={()=>{dispatch(addToCart(productsingle))}}>Mua ngay</button>
    </div>
   </div>
    <div className='phai'>
    <div className='tieude'>Thông số kỹ thuật </div>
    <div className='phai-thongso'>
      <ul>
        <li>Màn hình</li>
        <li className='ten'>{productsingle.detail?.screen}</li>
      </ul>
      <ul>
        <li>Hệ điều hành</li>
        <li className='ten'>{productsingle.detail?.os}</li>
      </ul>
      <ul>
        <li>Camara sau</li>
        <li className='ten'>{productsingle.detail?.camara}</li>
      </ul>
      <ul>
        <li>Camara trước</li>
        <li className='ten'>{productsingle.detail?.camaraFront}</li>
      </ul>
      <ul>
        <li>CPU</li>
        <li className='ten'> {productsingle.detail?.cpu}</li>
      </ul>
      <ul>
        <li>RAM</li>
        <li className='ten'>{productsingle.detail?.ram}</li>
      </ul>
      <ul>
        <li>Thẻ nhớ</li>
        <li className='ten'>{productsingle.detail?.rom}</li>
      </ul>
      <ul>
        <li>Dung lượng pin</li>
        <li className='ten'>{productsingle.detail?.battery}</li>
      </ul>
     
    </div>
    </div>
   </div>
   <div className='listproductslice'>
  
   <div>
   <ProductPage category={listproductfilter}/>
   </div>
   </div>
   
  </div>
  )
}

export default Productdetail