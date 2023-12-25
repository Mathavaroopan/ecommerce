import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import './CSS/shopCategory.css'
const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    return (
      <div className='shop-category'>
        <img className="shop-banners" src={props.banner} alt="banner" />
        <div className="shop-category-index-sort">
          <p>
            <span>Showing 1-12 </span>
            Out of 36 products
          </p>
          <div className="shop-category-sort">
            Sort by <img src={dropdown} alt="dropdown" />
          </div>
        </div>
        <div className="shop-category-products">
            {all_products.map((item, i) => {
              if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
              }else{
                return null;
              }
            })}
        </div>
      </div>
    )
}

export default ShopCategory
