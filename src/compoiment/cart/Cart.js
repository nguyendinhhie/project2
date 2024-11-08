import React from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
export default function Cart() {
  const Navigate=useNavigate()
  return (
    <div>
    <div className='cart'>
      <i class="fa-solid fa-cart-shopping" onClick={()=>Navigate("/Cart")} style={{cursor:'pointer'}}></i>
    </div>
    </div>
  )
}
