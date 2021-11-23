import React from 'react';
import '../Puma/Puma.css';
import puma from '../../../Image/PuLogo2.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import { rubberBand } from '@wellyshen/use-web-animations';
import PumaShoes from '../ShoesData/PumaShoes.json';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Puma = () => {

    const history = useHistory();

    const { ref } = useWebAnimations(rubberBand)

    console.log(PumaShoes)

    return (

        <div className='mainContain' >

            <div className="NavBar2">

                <div className="jor1">

                    <button className="Button-Arrow" onClick={() => history.goBack()}>

                        <ArrowBackIos className="Back-Arrow" />

                    </button>

                    <img src={puma} alt="img" ref={ref} className="Pu-Logo" />

                </div>

                <div className="shopping">

                    <p>Help</p>

                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>

                    <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>

                    <p>Pakistan</p>


                </div>

            </div>

            <div className="MainCard">
                {Object.keys(PumaShoes).map(KeyName => {

                    const Shoes = PumaShoes[KeyName];

                    return (

                        <Link className="Link" key={KeyName} to={`/Puma/${KeyName}`} >

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

export default Puma;