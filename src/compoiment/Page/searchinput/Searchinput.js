import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAsyncProduct,GetAllProduct,GetAllProductStatus } from '../../../store/productslice'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Searchinput() {
  const products=useSelector(GetAllProduct)
  const status =useSelector(GetAllProductStatus)
  
  const dispath=useDispatch()
  useEffect(()=>{
    dispath(fetchAsyncProduct())
  },[dispath])
  return (
    <div>Searchinput</div>
  )
}

export default Searchinput