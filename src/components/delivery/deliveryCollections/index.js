//import Slider from 'react-slick';
import React from 'react'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliveryCollection.css'
import Slider from "react-slick";
import DeliveryItems from './deliveryItems';
//import Carousel from "react-grid-carousel";



const DeliveryItemsarray=[
    {
        id:1,
        title:'Pizza',
        cover:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
    },
    {
        id:2,
        title:'Thali',
        cover:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png'
    },
    {
        id:3,
        title:'Rolls',
        cover:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png'
    },
    {
        id:4,
        title:'Burger',
        cover:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
    },
    {
        id:5,
        title:'Biryani',
        cover:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
    },
    {
        id:6,
        title:'Ice Cream',
        cover:'https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png'
    },
    {
        id:7,
        title:'Paratha',
        cover:'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png'
    },
    {
        id:8,
        title:'Noodles',
        cover:'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png'
    },
    
    {
        id:9,
        title:'Chicken',
        cover:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
    },
    {
        id:10,
        title:'Shake',
        cover:'https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png'
    },
    {
        id:11,
        title:'Sandwich',
        cover:'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png'
    },
    {
        id:12,
        title:'Dal',
        cover:'https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png'
    },
];

const settings = {    
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const DeliveryCOllections = () => {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>
            Inspiration for your first order
            </div>
            <Slider {...settings}>
                {DeliveryItemsarray.map((item,i)=>{
                    return <DeliveryItems key={i} cover={item.cover} title={item.title}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCOllections