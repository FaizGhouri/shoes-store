import React from 'react';
import '../Adidas/Adidas.css';
import Adlogo3 from '../../../Image/adlogo3.png'
import useWebAnimations from "@wellyshen/use-web-animations";
import { rubberBand } from '@wellyshen/use-web-animations'
import AdidasShoes from '../ShoesData/AdidasShoes.json'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const Adidas = () => {

    const { ref } = useWebAnimations(rubberBand)

    console.log(AdidasShoes)

    return (

        <div className='mainContain' >

            <div className="NavBar2">

                <div className="jor1">

                    <Link className="back" to="/Store">

                        <ArrowBackIosIcon />

                    </Link>

                    <img className="Ad-Logo" src="https://img.icons8.com/ios-filled/50/000000/adidas-trefoil.png"/>

                </div>

                <div className="shopping">

                    <p>Help</p>

                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>

                    <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>

                    <p>Pakistan</p>


                </div>

            </div>

            <div className="MainCard">

                {Object.keys(AdidasShoes).map(keyName => {

                    const Shoes = AdidasShoes[keyName];

                    return (


                        <Link className="Link" key={keyName} to={`/Adidas/${keyName}`}>


                            <div className="Card">

                                <div className="shoeBox">
                                    <img src={Shoes.image} className="Shoe1" alt="img" />
                                </div>

                                <div className="NP">

                                    <p className="Np2">{Shoes.name}</p>
                                    <p className="Np3">{Shoes.shoeType}</p>
                                    <p className="Np3">{Shoes.price}</p>

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

export default Adidas;