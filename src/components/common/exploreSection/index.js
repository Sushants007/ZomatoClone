import React from 'react'
import { restaurant } from '../../../data/restaurants'
import ExploreCard from './exploreCard'
import './exploreSection.css'

const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title '>
            {collectionName}
        </div>
        <div className='explore-grid'>
            {list.map((restaurant,i)=>{
                return <ExploreCard restaurant ={restaurant} i={i}/>
            })}
        </div>
    </div>
  )
}

export default ExploreSection;