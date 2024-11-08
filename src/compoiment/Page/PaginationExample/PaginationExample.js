import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { GetAllProduct,GetAllProductStatus,fetchAsyncProduct} from '../../../store/productslice';
import { Link } from 'react-router-dom';
import "./page..css"
const PaginationExample = () => {
  // Dữ liệu mẫu - một danh sách các item
  const dispatch=useDispatch();
  useEffect(() => {
    console.log("Fetching products..."); // Thêm log để chắc chắn rằng useEffect đang chạy
    dispatch(fetchAsyncProduct());
  }, [dispatch]);
  const products=useSelector(GetAllProduct)
  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
  
  // Số item trên mỗi trang
  const itemsPerPage = 24;

  // State quản lý trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán số trang dựa trên số lượng item và số item trên mỗi trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Tính toán các item của trang hiện tại
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  

  // Xử lý khi người dùng chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=' trencung'>
      <h1>Pagination Example</h1>
      <div className='vien'></div>

      {/* Hiển thị các item của trang hiện tại */}
      <ul className='items'>
        {currentItems.map((item, index) => (
          <Link key={index} to={`/product/${item.id}`}>
            <div className='item-page'>
               <li>
                <img src={item.img}>

                </img>
               </li> 
               <li>{item.name}</li> 
               <li>{item.price}</li> 
               <li>{item.company}</li> 
            </div>
          </Link>
        ))}
      </ul>

      {/* Phân trang */}
      <div className="pagination">
        {/* Nút Previous */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Các số trang */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Nút Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
