import React from 'react'
import "./Search.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Search() {
  const navigator=useNavigate()
  const [values,setvalues]=useState("")
  const thaydoi=(event)=>{
    setvalues(event.target.value)
  }
  console.log(values);
  const click=()=>{
    navigator(`/search/${values}`)
  }
  return (
    <div className='container-search'>
    
    <div className='search'>
        <div>
        <input className='input' placeholder='Shoppe bao ship 0Đ - Đăng kí ngay!' onChange={thaydoi} value={values} 
        >
        
        </input>
        </div>
        <div className='icon'>
       
        <i class="fa-solid fa-magnifying-glass" onClick={click}></i>
       
        </div>
        
    </div>
    </div>
  )
}
