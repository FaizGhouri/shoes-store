import React from 'react';
import MainBar from '../SubComponent/Navbar/Navbar';
import Slider from '../SubComponent/Carsoule/carsoule';
import Middle from '../SubComponent/Middle/Middle';
import Footer from '../SubComponent/Footer/Footer';
import '../Home/Home.css'

const Home = () => {

    return (

        <div className="main" >


            <MainBar />

            <Slider />

            <Middle />
            
            <Footer />

        </div>

    );
}

export default Home;