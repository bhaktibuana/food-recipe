import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe5() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Avocado Toast']);

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
                    <h4>Category: Breakfast</h4>
                </div> <br />

                <div className="main-title">
                    <h1>Avocado Toast</h1>
                </div>  <br />

                <div className="description">
                    <h4>Mashed avocado spread over crusty whole-wheat bread, finished with olive oil,
                        red pepper flakes, and flaky sea salt—does it get much better than that? </h4>
                </div>  <br />

                <div className="recipe5-image">
                    <p><img src={require("../../assests/avocado_toast.jpg")} /></p>
                </div>  <br />

                <div><br />
                    <h3 className="title"><b>Time</b></h3>
                    <h5 className="title"> <ul>
                        <li>Prep Time 05:00 </li>
                        <li>Total Time 05:00 </li>
                    </ul> </h5> <br /> <hr/><br /> 
                </div>

                <div>
                    <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title"><ol>
                        <li>½ small avocado</li>
                        <li>½ teaspoon fresh lemon juice</li>
                        <li>⅛ teaspoon Kosher salt</li>
                        <li>⅛ teaspoon freshly ground black pepper</li>
                        <li>1 (1 oz.) slice whole grain bread, toasted</li>
                        <li>½ teaspoon extra-virgin olive oil</li>
                        <li>Toppings: Maldon sea salt flakes, red pepper flakes</li>
                    </ol> </h5> <br /> <hr/><br /> 
                </div>

                <div>
                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"> <ol>
                        <li>In a small bowl, combine avocado, lemon juice, salt, and pepper.
                            Gently mash with the back of a fork.</li>
                        <li>Top toasted bread with mashed avocado mixture.
                            Drizzle with olive oil and sprinkle over desired toppings.</li>
                    </ol></h5>
                </div>
            </div>



        </>
    );
};

export default Recipe5;


