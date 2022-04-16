import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Ratings from "../../component/rating/rating";
import "./recipe2.scss"



export default function Recipe2() {
    return (
        <>

            <Navbar />

            <div className="recipe2">

                <div className="recipe2-category">
                    <h5>Category: Beverage</h5>
                </div> <br />

                <Ratings />

                <div className="recipe2-title">
                    <h1>Sweet Pea Microgreen Smoothie</h1>
                </div>  <br />
                <div className="recipe2-description">
                    <h5>This tasty green smoothie is packed with an amazing amount
                        of nutrients courtesy of its star ingredient, sweet pea microgreens.</h5>
                </div>  <br />
                <div className="recipe2-image">
                    <p><img src={require("../../assests/microgreen_smoothie.jpg")} /></p>
                </div>  <br />
                <div className="recipe2-directions">
                    <h3><b>Time</b></h3>
                    <h5><ul>
                        <li>Prep Time 03:00 </li>
                        <li>Blend Time 01:00 </li>
                        <li>Total Time 04:00 </li>
                    </ul></h5>  <br />
                    <h3><b>Ingredients</b></h3>
                    <h5><ol>
                        <li>1/4 small avocado</li>
                        <li>1/2 cup coconut water</li>
                        <li>½ cup frozen pineapple</li>
                        <li>1/3 cup orange juice</li>
                        <li>½ cup pea shoots</li>
                        <li>1/3 cup chopped kale</li>
                        <li>1 tablespoon agave nectar</li>
                        <li>6 mint leaves</li>
                        <li>	¼ cup ice</li>
                    </ol> </h5>  <br />
                    <h3><b>Directions</b></h3>
                    <h5><ol>
                        <li>Cold press the oranges to make the orange juice ingredient.</li>
                        <li>Peel and deseed the avocado.</li>
                        <li>Add all of the ingredients to a high-speed blender and blend until smooth, about 1 minute.</li>
                    </ol>  </h5>
                </div>
            </div>

            <Footer />

        </>
    );
};




