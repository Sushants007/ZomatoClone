import React from 'react';
import './deliveryitem.css'

const DeliveryItems = ({cover,title}) => {
  return (
    <div>
        <div className='delivery-item-cover'>
            <img src={cover} className= 'delivery-item-image'
            alt={title}/>
        </div>
        <div className="delivery-item-title">{title}</div>
    </div>
  )
}

export default DeliveryItems;