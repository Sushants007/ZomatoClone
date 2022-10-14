import React from 'react';
import Collection from '../common/collection';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import './diningOut.css';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dining } from "../../data/diningOut";


const diningList = dining;
const diningFilters = [
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

const collectionList=[
    {
        id:'1',
        title:'trending this week',
        cover:'https://b.zmtcdn.com/data/collections/a160564c07aa3014066acd8fe4b4a0a5_1617950136.jpg',
        places:'28 Places'
    },
    {
        id:'2',
        title:'Brilliant Biryanis',
        cover:'https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg',
        places:'28 Places'
    },
    {
        id:'3',
        title:'Darshini',
        cover:'https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg',
        places:'28 Places'
    },
    {
        id:'4',
        title:'Flavours of Punjab',
        cover:'https://b.zmtcdn.com/data/collections/81d955a89e9530661ed96b0373dcbe9f_1647258270.jpg?output-format=webp',
        places:'29 Places'
    },
    {
        id:'5',
        title:'Best pizza places',
        cover:'https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg?output-format=webp',
        places:'12 Places'
    },
    {
        id:'6',
        title:'Navratri Specials',
        cover:'https://b.zmtcdn.com/data/collections/a160564c07aa3014066acd8fe4b4a0a5_1617950136.jpg?output-format=webp',
        places:'12 Places'
    },
    {
        id:'7',
        title:'Best of Bengaluru',
        cover:'https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg?output-format=webp',
        places:'97 Places'
    },
    {
        id:'8',
        title:'Microbreweries',
        cover:'https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg?output-format=webp',
        places:'29 Places'
    },
    
];

const DiningOut = () => {
  return (
    <div> 
        <Collection list={collectionList}/>
        <div className="max-width">
        <Filters filterList={diningFilters}/> 
      </div>
      <ExploreSection
        restaurants={diningList}
        collectionName="Dine-Out Restaurants in Bangalore"
  />
    </div>
  )}


export default  DiningOut;