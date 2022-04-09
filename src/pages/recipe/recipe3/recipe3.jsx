import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Ratings from "../../component/rating/rating";
import "./recipe3.scss"



export default function Recipe3() {
    return (
        <>

            <Navbar />

            <div className="recipe3">

                <div className="recipe3-category">
                    <h5>Category: Healthy</h5>
                </div> <br />

                <Ratings />

                <div className="recipe3-title">
                    <h1>Shrimp, Avocado, and Egg Chopped Salad</h1>
                </div>  <br />
                <div className="recipe3-description">
                    <h5>Shrimp is high in protein and low in calories,
                        making it an ideal alternative to beef and chicken. </h5>
                </div>  <br />
                <div className="recipe3-image">
                    <p><img src={require("../../assests/shrimp_salad.png")} /></p>
                </div>  <br />
                <div className="recipe3-directions">
                    <h3><b>Time</b></h3>
                    <h5> <ul>
                        <li>Prep Time 15:00 </li>                        
                        <li>Total Time 15:00 </li>
                    </ul> </h5> <br />
                    <h3><b>Ingredients</b></h3>
                    <h5><ol>
                        <li>1/4 small red onion, thinly sliced</li>
                        <li>2 tablespoon fresh lime juice</li>
                        <li>1 tablespoon olive oil</li>
                        <li>12 oz. large peeled and deveined shrimp</li>
                        <li>Kosher salt and pepper</li>
                        <li>1 c. grape tomatoes, halved</li>
                        <li>8 c. butter lettuce</li>
                        <li>1/2 c. fresh cilantro leaves</li>
                        <li>1/2 avocado, diced</li>
                        <li>2 hard boiled eggs, cut into pieces</li>
                    </ol> </h5> <br />
                    <h3><b>Directions</b></h3>
                    <h5> <ol>
                        <li>In a large bowl, toss onion with lime juice and ½ tablespoon oil and let sit for 5 minutes.</li>
                        <li>Heat 1/2 tablespoon oil in a large skillet on medium high. 
                            Season shrimp with 1/4 teaspoon each salt and pepper and cook until opaque throughout, 2 to 3 minutes per side.</li>
                        <li>Toss tomatoes with onions, then toss with lettuce and cilantro. Divide among bowls and top with shrimp, avocado and egg.</li>
                    </ol></h5>
                </div>
            </div>

            <Footer />

        </>
    );
};




