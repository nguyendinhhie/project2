import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./cartitem.css";
import { useEffect } from 'react';
import { removeFromCart, toggleCartQty, getCartTotal, clearCart } from '../../store/cartslice';

export default function Cartitem() {
    const dispatch = useDispatch();
    const { data: cartProducts, totalItems, totalAmount, deliveryCharge } = useSelector(state => state.cart);
    console.log(cartProducts);
    useEffect(()=>{
        dispatch(getCartTotal())
    },)

    return (
        <div>
            {cartProducts?.map((product, index) => (
                <div key={index} className='item-detail'>
                    <div className='items'>
                        <img src={product.img} alt={product.name} />
                        <div>{product.name}</div>
                        <div>{product.company}</div>
                    </div>
                    <div className='gia'>
                        <div>
                            <button className='pre' onClick={() => dispatch(toggleCartQty({ id: product.id, type: "DEC" }),getCartTotal())}  >-</button>
                            <div>{product.quantity}</div>
                            <button className='next' onClick={() => dispatch(toggleCartQty({ id: product.id, type: "INC" }),getCartTotal())}>+</button>
                        </div>
                        <div className='gia2'>
                            Price: {product?.totalPrice}
                        </div>
                        <div ><i class="fa-solid fa-xmark" onClick={()=>{dispatch(removeFromCart(product.id))}}></i></div>

                    </div>
                    
                </div>
            ))}
                    <div>
                        Total:{totalAmount}
                    </div>
        </div>
    );
}

