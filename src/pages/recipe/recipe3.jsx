import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe3() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Shrimp Salad']);

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
                    <h4>Category: Healthy</h4>
                </div> <br />

                <div className="main-title">
                    <p>Shrimp, Avocado, and Egg Chopped Salad</p>
                </div>  <br />

                <div className="description">
                    <h4>Shrimp is high in protein and low in calories,
                        making it an ideal alternative to beef and chicken. </h4>
                </div>  <br />

                <div className="recipe3-image">
                    <p><img src={require("../../assests/shrimp_salad.png")} /></p>
                </div>  <br />

                <div><br />
                    <h3 className="title"><b>Time</b></h3>
                    <h5 className="title"> <ul>
                        <li>Prep Time 15:00 </li>
                        <li>Total Time 15:00 </li>
                    </ul> </h5> <br /> <hr/> <br />
                </div>        

                <div>
                    <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title"><ol>
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
                    </ol> </h5> <br /> <hr/> <br />
                </div>

                <div>
                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"> <ol>
                        <li>In a large bowl, toss onion with lime juice and ½ tablespoon oil and let sit for 5 minutes.</li>
                        <li>Heat 1/2 tablespoon oil in a large skillet on medium high.
                            Season shrimp with 1/4 teaspoon each salt and pepper and cook until opaque throughout, 2 to 3 minutes per side.</li>
                        <li>Toss tomatoes with onions, then toss with lettuce and cilantro. Divide among bowls and top with shrimp, avocado and egg.</li>
                    </ol></h5>
                </div>

            </div>


        </>
    );
};



export default Recipe3;
