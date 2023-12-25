import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'
const RelatedProducts = () => {
  return (
    <div className='related-products'>
      <h2>Related Products</h2>
        <hr />
        <div className='related-product'>
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
