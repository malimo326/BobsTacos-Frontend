import React from 'react';
import '../DeliveryCollection/DeliveryCollectionsStyles.css';
import NextArrow from '../../Carousal/nextArrow';
import PrevArrow from '../../Carousal/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './DeliveryItem/deliveryItem';

const deliveryItem = [
    {
        id: 1,
        title: "Daily Specials",
        cover: "https://wallpaperaccess.com/thumb/7629209.jpg"
    },
    {
        id: 2,
        title: "Family Meal Deals",
        cover: "https://wallpaperaccess.com/thumb/165212.jpg"
    },
    {
        id: 3,
        title: "Drinks Menu",
        cover: "https://wallpaperaccess.com/thumb/235905.jpg"
    },
    {
        id: 4,
        title: "Kids Meal", 
        cover: "https://wallpaperaccess.com/full/112670.jpg"
    },
    {
        id: 5,
        title:  "Sushi Food",
        cover: "https://wallpaperaccess.com/full/286305.jpg"
    },
    {
        id: 6,
        title: "Breakfast Food",
        cover: "https://wallpaperaccess.com/thumb/2851613.jpg"
    },
    {
        id: 7,
        title: "Pizza",
        cover: "https://wallpaperaccess.com/thumb/424487.jpg"
    }
]

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
         <div className='max-width'>
            <div className='collection-title'>
                <h1>Menu & Spesials </h1>
                <Slider {...settings}>
                    {
                        deliveryItem.map((item)=>{
                            return <DeliveryItem  item={item} key={item.id}/>
                        })
                    }
                </Slider>
            </div>
         </div>
    </div>
  )
};

export default DeliveryCollections;