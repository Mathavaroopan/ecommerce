import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull from '../Assets/star_dull_icon.png'
import star from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className="left">
        <div className="img-list">
            <img src={product.image} alt="ok" />
            <img src={product.image} alt="ok" />
            <img src={product.image} alt="ok" />
            <img src={product.image} alt="ok" />
        </div>
        <div className='img-main'>
            <img src={product.image} alt="img-main" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="stars">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_dull} alt="" />
        </div>
        <div className="prices">
            <div className="new-price">${product.new_price}</div>
            <div className="old-price">${product.old_price}</div>
        </div>
        <div className="sizes">
            <div>
                <h1 className='heading'>Select Size</h1>
            </div>
            <div className='sizes-box'>
               <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
                <div className="size">XXL</div> 
            </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
