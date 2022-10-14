import React from 'react'
import './topBrand.css'
import Slider from 'react-slick';
import NextArrow from '../../../../common/carousel/nextArrow';
import PrevArrow from '../../../../common/carousel/prevArrow';

const topBrandsList = [
    {
        id:1,
        time: '33 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png'
    },
    
    {
        id:2,
        time: '29 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png'
    },
    {
        id:3,
        time: '26 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/30ebb0e7aac79d952b3cfbf77802fac9_1663653518.png'
    },
    {
        id:4,
        time: '29 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png'
    },
    {
        id:5,
        time: '33 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png'
    },
    {
        id:6,
        time: '28 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png'
    },
    {
        id:7,
        time: '26 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/30ebb0e7aac79d952b3cfbf77802fac9_1663653518.png'
    },
    {
        id:8,
        time: '19 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/d48a032833fc37de75ad6d0883da4331_1629441554.png'
    },
    {
        id:9,
        time: '23 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png'
    },
    {
        id:10,
        time: '28 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png'
    },
    
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrand = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand,i) => (
          <div>
            <div className="top-brands-cover">
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrand