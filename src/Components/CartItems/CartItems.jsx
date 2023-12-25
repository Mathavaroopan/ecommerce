import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {

    const {all_products, getTotalAmount, cart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart'>
      <div className='main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((product) => {
        if(cart[product.id] > 0){
            return (
                <div className="format main">
                    <img src={product.image} alt="" className='icon'/>
                    <p>{product.name}</p>
                    <p>{product.new_price}</p>
                    <p>{cart[product.id]}</p>
                    <p>{cart[product.id]*product.new_price}</p>
                    <button className='remove-btn' onClick={() => removeFromCart(product.id)}>Decrease</button>
                </div>
            )
        }else{
            return null;
        }
      })}
      <div className="cart-down">
        <div className="cart-total">
            <h1>Cart Total</h1>
            <div>
                <div className="total-item">
                    <p>SubTotal</p>
                    <p>${0}</p>
                </div>
                <hr />
                <div className="total-item">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="total-item">
                    <p>Total</p>
                    <p>${0}</p>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems;
