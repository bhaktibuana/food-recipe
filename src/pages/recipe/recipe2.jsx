import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe2() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Microgreen Smoothie']);

    const selected = crumb => {
        console.log(crumb);
    }

    return (
        <>

            <div className="breadcrumbs container">
                <Breadcrumbs crumbs={crumbs} selected={selected} />
            </div>

            <div className="recipe">

                <div className="ratings">
                    <Ratings />
                </div> <br />

                <div className="category">
                    <h4>Category: Beverage</h4>
                </div> <br />

                <div className="main-title">
                    <p>Sweet Pea Microgreen Smoothie</p>
                </div>  <br />

                <div className="description">
                    <h4>This tasty green smoothie is packed with an amazing amount
                        of nutrients courtesy of its star ingredient, sweet pea microgreens.</h4>
                </div>  <br />

                <div className="recipe2-image">
                    <p><img src={require("../../assests/microgreen_smoothie.jpg")} /></p>
                </div>  <br />  <hr />

                <div><br /> 
                    <h3 className="title"><b>Time</b></h3>
                    <h5 className="title" ><ul >
                        <li>Prep Time 03:00 </li>
                        <li>Blend Time 01:00 </li>
                        <li>Total Time 04:00 </li>
                    </ul></h5><br />  <hr /><br />
                </div>

                <div>
                    <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title"><ol>
                        <li>1/4 small avocado</li>
                        <li>1/2 cup coconut water</li>
                        <li>½ cup frozen pineapple</li>
                        <li>1/3 cup orange juice</li>
                        <li>½ cup pea shoots</li>
                        <li>1/3 cup chopped kale</li>
                        <li>1 tablespoon agave nectar</li>
                        <li>6 mint leaves</li>
                        <li>¼ cup ice</li>
                    </ol> </h5> <br />   <hr /><br /> 
                </div>

                <div>
                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"><ol>
                        <li>Cold press the oranges to make the orange juice ingredient.</li>
                        <li>Peel and deseed the avocado.</li>
                        <li>Add all of the ingredients to a high-speed blender and blend until smooth, about 1 minute.</li>
                    </ol>  </h5>
                </div>

            </div>

        </>
    );

}


export default Recipe2;