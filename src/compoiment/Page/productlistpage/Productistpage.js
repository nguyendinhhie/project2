import React, { useState, useEffect } from 'react';
import "./productlistpage.css";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductListPage({ category }) {
  const [next, setNext] = useState(0);
  const [loading, setLoading] = useState(true); // Trạng thái loading

  // Giả lập thời gian tải dữ liệu với useEffect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Tải trong 2 giây
    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, []);

  return (
    <div className='container-productlist'>
      {loading ? (
        <div className="skeleton-header">
          <Skeleton width={200} height={30} />
        </div>
      ) : (
        category.length > 0 && (
          <div className={category[0].promo.name}>*{category[0].promo.name}*</div>
        )
      )}
      
      <div>
        <ul className='ul-product'>
          {loading ? (
            // Hiển thị Skeleton khi đang tải
            [...Array(4)].map((_, index) => (
              <div key={index} className='productlist-skeleton'>
                
              <Skeleton height={400} width={350} style={{ marginBottom: 8 }} />
              <Skeleton height={20} width={70} style={{ marginBottom: 8 }} />
              </div>
            ))
          ) : (
            // Hiển thị danh sách sản phẩm khi tải xong
            category.map((product, index) => (
              <Link to={`/product/${product.id}`} key={product.id || index}>
                <div className='productlist' style={{ transform: `translateX(${next * -345}px)` }}>
                  <div className='tren'>{product.promo.name}</div>
                  <li>
                    <img src={product.img} alt={product.name} />
                  </li>
                  <li>{product.name}</li>
                  <li>Company: {product.company}</li>
                  <li className='giacu'>Price: {product.price} đ</li>
                  <li className='giamoi'>{product.promo.value} đ</li>
                  <button className='giohang'>Thêm giỏ hàng</button>
                  <button className='muangay fa-solid fa-cart-plus'>mua ngay</button>
                </div>
              </Link>
            ))
          )}
        </ul>
      </div>
      
      <button className='title-cuoi'>Xem tất cả</button>
      <div className='nut-them1'>
        <div className='trai'>
          <button onClick={() => setNext(next - 1)} disabled={next === 0}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </div>
        <div className='phai'>
          <button onClick={() => setNext(next + 1)} disabled={next === 1}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
