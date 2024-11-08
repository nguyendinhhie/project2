import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProduct, GetAllProduct, GetAllProductStatus } from '../../../store/productslice';
import ProductPage from '../productpage/ProductPage';
import "./searchproduct.css";
import Noproduct from '../noproduct/Noproduct';

function Searchproduct() {
    const location = useLocation();
    const { searchproduct } = location.state || {};
    console.log(searchproduct);

    const product = useSelector(GetAllProduct);
    const productstatus = useSelector(GetAllProductStatus);
    const { values } = useParams();
    console.log(values);

    // Lọc theo công ty và tên sản phẩm
    const productslice = product.filter((product) => product.company === `${searchproduct}`);
    const products = product.filter((product) => values ? product.company.includes(`${values}`) : true);

    const productsslice = products.slice(0, 4);
    console.log(products);
    console.log(productslice);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncProduct());
    }, [dispatch]);

    return (
        <div>
           {productslice.length > 0 ? <ProductPage category={productslice}/> : products.length > 0 ? <ProductPage category={products}/>: <Noproduct/>} 

        </div>
    );
}

export default Searchproduct;
