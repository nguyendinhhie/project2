
import { configureStore } from "@reduxjs/toolkit";
import productslice from "./productslice";
import cartslice from "./cartslice"

 const Store=configureStore({
  reducer :{
        reducerhieu:productslice,
        cart:cartslice,


    }
}
    

)
export default Store