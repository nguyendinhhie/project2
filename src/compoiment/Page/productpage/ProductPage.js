import React, { useState, useEffect } from 'react';
import "./ProductPage.css";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../../store/cartslice';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductPage({ category }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [next, setNext] = useState(0);
    const [loading, setLoading] = useState(true); // Loading state

    // Simulate loading delay with useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds
        }, 2000); // Set your desired loading time here (e.g., 2000ms = 2 seconds)

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const hieu = () => {
        navigate("/page");
    };

    return (
        <div className='container-product'>
            <div className='title'>* Danh mục sản phẩm *</div>
            <div>
                <ul className='ul-product'>
                    {loading ? (
                        <div className="skeleton-product">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className='product-skeleton'>
                                    
                                    <Skeleton height={400} width={350} style={{ marginBottom: 8 }} />
                                    <Skeleton height={20} width={70} style={{ marginBottom: 8 }} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        category.map((product, index) => (
                            <Link to={`/product/${product.id}`} key={product.id || index}>
                                <div className='product' style={{ transform: `translateX(${next * -340}px)` }}>
                                    <div className="hotnhat">Hot nhất</div>
                                    <li>
                                        <img src={product.img} alt={product.name}></img>
                                    </li>
                                    <li>{product.name}</li>
                                    <li>Company: {product.company}</li>
                                    <li>Price: {product.price} đ</li>
                                    <button className='giohang'>Thêm giỏ hàng</button>
                                    <button className='muangay fa-solid fa-cart-plus' onClick={() => dispatch(addToCart(product))}>mua ngay</button>
                                </div>
                            </Link>
                        ))
                    )}
                </ul>
            </div>
            <button className='title-cuoi' onClick={() => hieu()}>Xem tất cả</button>
            <div className='nut-them'>
                <div className='trai'>
                    <button onClick={() => { setNext(next - 1); console.log(next); }} disabled={next === 0}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                </div>
                <div className='phai'>
                    <button onClick={() => { setNext(next + 1); console.log(next); }} disabled={next >= category.length - 1}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                    
                </div>
            </div>
        </div>
    );
}
