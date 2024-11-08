
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { STATUS } from '../status/status'


const initialState = {  // sửa lỗi tên biến
  products: [],
  productStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
}


const BASE_URL = "http://localhost:8080/api/";

// Thunk function phải được khai báo trước khi sử dụng trong slice
export const fetchAsyncProduct = createAsyncThunk("products/fetch", async () => {
  const response = await fetch(`${BASE_URL}product`);
  console.log(response);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  
  return data
});


export const fetchAsyncProductSingle = createAsyncThunk("productSingle/fetch", async (id) => {
  const response = await fetch(`${BASE_URL}product/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch productSingle');
  }
  const data = await response.json();
  return data;
});

const productslice = createSlice({
  name: "reducerhieu",
  initialState, // sửa lỗi tên biến
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProduct.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProduct.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchAsyncProduct.rejected, (state) => {
        state.productStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductSingle.pending, (state) => {
        state.productSingleStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
        state.productSingleStatus = STATUS.SUCCEEDED;
        state.productSingle = action.payload;
      })
      .addCase(fetchAsyncProductSingle.rejected, (state) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  }
});

// selector
export const GetAllProduct = (state) => state.reducerhieu.products;
export const GetAllProductStatus = (state) => state.reducerhieu.productStatus;
export const GetAllProductSingle = (state) => state.reducerhieu.productSingle;
export const GetAllProductSingleStatus = (state) => state.reducerhieu.productSingleStatus;

export default productslice.reducer;
