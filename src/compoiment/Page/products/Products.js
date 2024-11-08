import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetAllProduct,GetAllProductStatus} from '../../../store/productslice'
import { fetchAsyncProduct } from '../../../store/productslice';
import { Link } from 'react-router-dom';
function Products() {
  const dispatch=useDispatch();
    const products=useSelector(GetAllProduct)
    const status =useSelector(GetAllProductStatus)
    console.log(products);
    console.log(status);
    useEffect(() => {
      console.log("Fetching products..."); // Thêm log để chắc chắn rằng useEffect đang chạy
      dispatch(fetchAsyncProduct());
    }, [dispatch]);
  return (
    <div className='container-products'>
      <div className='products-detail'>
       
        <div className='product-detail-trai'>
          <div>
            <div className='product-tren'>
              <div></div>
              <div>Tất Cả Danh Mục</div>
            </div>
            <div className='product-duoi'>
              <div className='duoi-1'>
                <ul>
                <li>
                  <div></div>
                  <div>Samsung</div>
                </li>
                <li>
                  <div></div>
                  <div>Xiaomi</div>
                </li>
                <li>
                  <div></div>
                  <div></div>
                </li>
                <li>
                  <div></div>
                  <div>Oppo</div>
                </li>
                <li>
                  <div></div>
                  <div>Nokia</div>
                </li>
                <li>
                  <div></div>
                  <div>Apple</div>
                </li>
                <li>
                  <div></div>
                  <div>Mobiistar</div>
                </li>
                <li>
                  <div></div>
                  <div>Huawei</div>
                </li>
                <li>
                  <div></div>
                  <div>Realme</div>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='product-detail-phai'>
          {products.map((product,index)=>(
            <Link key={index}>
              <ul>
                <li>
                  {product.name}
                </li>
                <li>
                  {product.company}
                </li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
      <b>dddddd</b>
    </div>
  )
}

export default Products