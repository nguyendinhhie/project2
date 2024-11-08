import React from 'react'
import { GetAllProduct,GetAllProductStatus} from '../../../store/productslice'
import { fetchAsyncProduct } from '../../../store/productslice';
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { STATUS } from '../../../status/status';
import ProductPage from '../productpage/ProductPage';
import Loading from '../Loading/Loading';
import Productistpage from '../productlistpage/Productistpage';
export default function Homepage() {
    const dispatch=useDispatch();
    const products=useSelector(GetAllProduct)
    const status =useSelector(GetAllProductStatus)
    //console.log(products);
    //console.log(status);
    useEffect(() => {
      console.log("Fetching products..."); // Thêm log để chắc chắn rằng useEffect đang chạy
      dispatch(fetchAsyncProduct());
    }, [dispatch]);
    

    const category1=products.slice(0,10)
    const category2 =products.filter((p)=>p.company==="Samsung")
    const category4 =products.filter((p)=>p.company==="Xiaomi")
   // console.log(category2);
   // console.log(category1);
    //console.log(category4);
    const pp=[]
   if(products.length>0){
    for(let i in products){
      const mm=Math.floor(Math.random()*products.length)
      pp[i]=products[mm]
    }
   }
   for(let x of products){
   // console.log(x);
   }

   const giareonline=products.filter((product)=>product.promo.name==="giareonline")
  const giareonlineproduct=giareonline.slice(0,5)
   //console.log(giareonline);

   const tragop=products.filter((product)=>product.promo.name==="tragop")
   const tragopproduct=tragop.slice(0,5)

   const giamgia=products.filter((product)=>product.promo.name==="giamgia")
   const giamgiaproduct=giamgia.slice(0,8)

  return (
    <div>
   <div>
   {status===STATUS.LOADING?<Loading/>:<ProductPage category={category1}/>}
   </div>
   <div>
   {status===STATUS.LOADING?<Loading/>:<Productistpage category={giareonlineproduct}/>}
   </div>
   <div>
   {status===STATUS.LOADING?<Loading/>:<Productistpage category={tragopproduct}/>}
   </div>
   
    </div>
  )
}
