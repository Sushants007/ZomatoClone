import React from 'react';
import './exploreCard.css';
import StarIcon from '@mui/icons-material/Star';

const ExploreCard = ({restaurant,i}) => {
    const name= restaurant?.info?.name ?? '';
    const coverImg = restaurant?.info?.o2FeaturedImage?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating= restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers??[];
    const cuisine = restaurant?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomContainers= restaurant?.bottomContainers;
    const goldOff= restaurant?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount =offers.length > 1 ? offers[1].text  : offers.length === 1  ? offers[0].text  : null;

  return (
    <div className={`explore-card cur-po ${i < 3 ? "explore-card-first" : ""}`}>
        <div className='explore-card-cover'>
            <img src={coverImg} alt= {restaurant.info.name} className = 'explore-card-image'/>
            <div className='delivery-time'>{deliveryTime}</div>
            {proOff && 
            <div className='pro-off'>{proOff}</div>}
            {goldOff && <div className='golf-off absolute-center'>{goldOff}</div>}
             {discount && <div className='discount absolute-center'>{discount}</div>}       

        </div>
        <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} 
            <StarIcon className=" absolute-center"/>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisine.length && (
          <div className="res-cuisine">
            {cuisine.map((item, i) => (
              <span className="res-cuisine-tag">
                {item}
                {i !== cuisine.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExploreCard