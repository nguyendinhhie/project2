import React, { useEffect } from 'react';
import { GetAllProductSingleStatus, GetAllProductSingle, fetchAsyncProductSingle,GetAllProduct,GetAllProductStatus,fetchAsyncProduct } from '../../../store/productslice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { STATUS } from '../../../status/status';
import Loading from '../Loading/Loading';
import Productdetail from '../Homepage/productdetail/Productdetail';

export default function Productdetailslice() {
  const { id } = useParams();
  const dispatch = useDispatch();
 

  useEffect(() => {
    // Gọi API để fetch sản phẩm dựa trên id
    dispatch(fetchAsyncProductSingle(id));
    dispatch(fetchAsyncProduct())
  }, [dispatch, id]);
  const productid = useSelector(GetAllProductSingle);
  const productidstatus = useSelector(GetAllProductSingleStatus);
  const listproduct=useSelector(GetAllProduct)
  const listproductstatus=useSelector(GetAllProductStatus)
  return (
    <div>
      {productidstatus === STATUS.LOADING ? (
        <Loading />
      ) : productid ? (
        <Productdetail productsingle={productid} listproduct={listproduct}/>
      ) : (
        <div>Không tìm thấy sản phẩm</div>
      )}
      

      
    </div>
  );
}
