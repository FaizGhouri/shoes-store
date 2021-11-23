import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../Carsoule/carsoule.css';


const Slider = () => {

    return (

        <Carousel className="carousel">

            <Carousel.Item className="Car-item">

                <div>
                    <p className ="saveUp">Save Up to 50%</p> 
                    <a className="A" href="#">Shop All Our New Markdown</a>
                </div>
            </Carousel.Item>

        

            <Carousel.Item>
                <div>
                    <p className="saveUp">Free Shipping & 60 Days Free Retrun</p>
                    <a className="A" href="#">Join Now</a>
                </div>
            </Carousel.Item>

          
            
        </Carousel>
    )

}

export default Slider;