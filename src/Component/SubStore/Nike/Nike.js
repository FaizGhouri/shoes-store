import React from 'react';
import '../Nike/Nike.css';
import nike from '../../../Image/nklogo.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import { rubberBand } from '@wellyshen/use-web-animations'
import NikeData from '../ShoesData/NikeShoes.json';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const Nike = () => {

    const { ref } = useWebAnimations(rubberBand)

    console.log(Object.keys(NikeData))

    return (

        <div className='mainContain' >

            <div className="NavBar2">

                <div className="jor1">

                    <Link className="back" to="/Store">

                        <ArrowBackIosIcon />

                    </Link>

                    <img src={nike} alt="img" ref={ref} className="center jorImg" />

                </div>

                <div className="shopping">

                    <p>Help</p>

                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>

                    <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>

                    <p>Pakistan</p>


                </div>

            </div>

            <div className="MainCard">

                {Object.keys(NikeData).map(keyName => {

                    const shoe = NikeData[keyName];

                    return (
                        <Link className="Link" key={keyName} to={`/Nike/${keyName}`}>

                            <div className="Card" key={keyName}>

                                <div className="shoeBox">
                                    <img src={shoe.image} className="Shoe1" alt="img" />
                                </div>

                                <div className="NP">

                                    <p className="Np2">{shoe.name}</p>
                                    <p>{shoe.shoeType}</p>
                                    <p className="Np3">{shoe.price}</p>

                                    <button className="arrow" ><i class="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i> ADD TO CART</button>

                                </div>

                            </div>
                        </Link>

                    )
                })}



            </div>

        </div >
    )
}

export default Nike;