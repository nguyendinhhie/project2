import React from 'react'
import Search from '../search/Search'
import "./Navbar.css"
import Cart from '../cart/Cart'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const navigate=useNavigate()
  const img ="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-shopee-inkythuatso-2-01-24-14-52-10.jpg";
  return (
 <div className='Nabar'>
   <div className='container-nav'>

<div className='logo'>

<img src={img} alt='sdsd' onClick={()=>navigate("/")} style={{cursor:'pointer'}} ></img>

</div>
<div>
  <Search/>
</div>
<div>
  <Cart/>
</div>
</div>

<div className='list'>
<ul>
  <li >
    <Link to="/search" state={{searchproduct:"Huawei"}}>Huawei</Link>
  </li>
  <li >
    <Link to="/search" state={{searchproduct:"Apple"}}>Apple</Link>
  </li>
  <li >
    <Link to="/search" state={{searchproduct:"Itel"}}>Itel</Link>
  </li>
  <li >
    <Link to="/search" state={{searchproduct:"Nokia"}}>Nokia </Link>
  </li>
  <li >
    <Link to="/search" state={{searchproduct:"SamSung"}}>SamSung</Link>
  </li>
  <li >
    <Link to="/search" state={{searchproduct:"Xiaomi"}}>Xiaomi</Link>
  </li>
  <li >
    <Link to="/search" state={{searchproduct:"Oppo"}}>Oppo</Link>
  </li>
</ul>
</div>

 </div>
    
  )
}
