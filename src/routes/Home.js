import React from 'react';
import Navbar from '../components/header/Navbar';
import Main from '../components/Main';
import Footer from '../components/footer/Footer';
import DeliveryCollections from '../components/Delivery/DeliveryCollection/DeliveryCollections';
import Profile from './Profile';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Main 
        MainImg= "https://res.cloudinary.com/dirdtvxdq/image/upload/v1714045295/samples/imagecon-group.jpg"
        title="BOBS TACOS!!"
        text="Dear BOBS TACOS is a online web app where you can find your tasty food easily!"
        buttonText="Order Online"
        url="/item"
        btnclass="show"
      />   
      <DeliveryCollections />
      <Footer />
    </>
  )
};

export default Home;
