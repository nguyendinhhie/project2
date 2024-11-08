import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Footer from './compoiment/footer/Footer.js';
import Homepage from './compoiment/Page/Homepage/Homepage.js';
import Header from "./compoiment/Header/Header.js"
import Slidebar from "./compoiment/Slidebar/Slidebar.js"
import { Provider } from 'react-redux';
import Store from './store/Store.js';
import Productdetailslice from './compoiment/Page/productdetailslice/Productdetailslice.js';
import Searchproduct from './compoiment/Page/searchproduct/Searchproduct.js';
import Searchinput from './compoiment/Page/searchinput/Searchinput.js';
import Products from './compoiment/Page/products/Products.js';
import PaginationExample from './compoiment/Page/PaginationExample/PaginationExample.js';
import Cartitem from './compoiment/cartitem/Cartitem.js';
function App() {
  return (
    <div className="App">
    

   <Provider store={Store}>
   <BrowserRouter>
    <Header/>
    <Slidebar/>

      <Routes>
        <Route path='/' element={<Homepage/>}>

        </Route>
        <Route path='/product/:id' element={<Productdetailslice/>}>

        </Route>
        <Route path='/product/' element={<Products/>}>

        </Route>
        <Route path="/search/:values" element={<Searchproduct/>}>

        </Route>
        <Route path="/search" element={<Searchproduct/>}>

        </Route>
        <Route path="/cart" element={<Cartitem />} >

        </Route>
        <Route path="/page" element={<PaginationExample />} >

        </Route>
        <Route path='/category/:category' element={<Homepage/>}>

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
   </Provider>
   
     </div>
  )
}

export default App;
