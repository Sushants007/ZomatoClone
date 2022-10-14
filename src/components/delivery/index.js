import React from 'react';
import Filters from '../common/filters';
import './delivery.css';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DeliveryCOllections from './deliveryCollections';
import TopBrand from './deliveryCollections/deliveryItems/topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurant } from '../../data/restaurants';

const deliveryFilter=[
    {
        id:1,
        icon: 
        <TuneRoundedIcon className='absolute-center'/>,
        title : 'Filters',
    },
    {
        id:2,
        title : 'Rating: 4.0+-',
    },
    {
        id:3,
        title : 'Safe and Hygenic',
    },
    {
        id:4,
        title : 'Pure Veg',
    },
    {
        id:5,
        title : 'Delivery Time',
        icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,

    },
    {
        id:6,
        title : 'Great Offers',
    },
];

const restaurantList=restaurant

const Delivery = () => {
  return (
    <div>
        <div className='max-width'>
            <Filters filterList={deliveryFilter}/>
        </div>  
        <DeliveryCOllections/>    
        <TopBrand/> 
        <ExploreSection list = {restaurantList}
        collectionName="DeliveryRestaurant in Banglore"/>
    </div>
  )
}

export default Delivery