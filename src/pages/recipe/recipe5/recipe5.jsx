import React from "react";
import Navbar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import Ratings from "../../../component/rating/rating";
import "./recipe5.scss"



export default function Recipe5() {
    return (
        <>

            <Navbar />

            <div className="recipe5">

                <div className="recipe5-category">
                    <h5>Category: Breakfast</h5>
                </div> <br />

                <Ratings />

                <div className="recipe5-title">
                    <h1>Avocado Toast</h1>
                </div>  <br />
                <div className="recipe5-description">
                    <h5>Mashed avocado spread over crusty whole-wheat bread, finished with olive oil, 
                        red pepper flakes, and flaky sea salt—does it get much better than that? </h5>
                </div>  <br />
                <div className="recipe5-image">
                    <p><img src={require("../../assests/avocado_toast.jpg")} /></p>
                </div>  <br />
                <div className="recipe5-directions">
                    <h3><b>Time</b></h3>
                    <h5> <ul>
                        <li>Prep Time 05:00 </li>                        
                        <li>Total Time 05:00 </li>
                    </ul> </h5> <br />
                    <h3><b>Ingredients</b></h3>
                    <h5><ol>
                        <li>½ small avocado</li>
                        <li>½ teaspoon fresh lemon juice</li>
                        <li>⅛ teaspoon Kosher salt</li>
                        <li>⅛ teaspoon freshly ground black pepper</li>
                        <li>1 (1 oz.) slice whole grain bread, toasted</li>
                        <li>½ teaspoon extra-virgin olive oil</li>
                        <li>Toppings: Maldon sea salt flakes, red pepper flakes</li>                  
                    </ol> </h5> <br />
                    <h3><b>Directions</b></h3>
                    <h5> <ol>
                        <li>In a small bowl, combine avocado, lemon juice, salt, and pepper. 
                            Gently mash with the back of a fork.</li>
                        <li>Top toasted bread with mashed avocado mixture. 
                            Drizzle with olive oil and sprinkle over desired toppings.</li>                       
                    </ol></h5>
                </div>
            </div>

            <Footer />

        </>
    );
};




