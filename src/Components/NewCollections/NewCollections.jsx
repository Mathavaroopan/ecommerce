import React from 'react'
import "./NewCollections.css";
import new_collections from '../Assets/new_collections.js';
import Item from '../Item/Item.jsx';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h2>New Collections</h2>
        <hr />
        <div className='collections'>
            {new_collections.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default NewCollections
