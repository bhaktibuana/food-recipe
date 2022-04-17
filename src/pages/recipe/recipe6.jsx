import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe6() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Herb Omelette']);

    const selected = crumb => {
    console.log(crumb);
    }
    return (
        <>

<div className="breadcrumbs container">
        <Breadcrumbs crumbs={crumbs} selected={selected}  />
    </div>
    
    <div className="recipe">

        <div className="ratings"> 
            <Ratings />
            </div> <br/>

                <div className="category">
                    <h4>Category: Breakfast</h4>
                </div> <br />

                <div className="main-title">
                    <p>Herb Omelette with Fried Tomatoes</p>
                </div>  <br />

                <div className="description">
                    <h4>Omelette Vegetables are foods that are simply prepared 
                        and can be prepared for breakfast and enjoy it. </h4>
                </div>  <br />

                <div className="recipe6-image">
                    <p><img src={require("../../assests/herb_omelette.jpg")} /></p>
                </div>  <br />

                <div><br />
                    <h3 className="title"><b>Time</b></h3>
                    <h5 className="title"> <ul>
                        <li>Prep Time 05:00 </li>
                        <li>Cook Time 05:00 </li>                        
                        <li>Total Time 10:00 </li>
                    </ul> </h5> <br /> <hr/>  <br />
                    </div>
                <div>
                    
                    <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title"><ol>
                        <li>1 tablespoon rapeseed oil</li>
                        <li>3 tomatoes, halved</li>
                        <li>4 large eggs</li>
                        <li>1 tablespoon chopped parsley</li>
                        <li>1 tablespoon chopped basil</li>                                    
                        </ol> </h5> <br /><br /> <hr/>  <br />
                        </div>
                <div>

                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"> <ol>
                        <li>Heat the oil in a small non-stick frying pan, 
                            then cook the tomatoes cut-side down until starting to soften and colour. 
                            Meanwhile, beat the eggs with the herbs and plenty of freshly ground black pepper in a small bowl.</li>
                        <li>Scoop the tomatoes from the pan and put them on two serving plates. 
                            Pour the egg mixture into the pan and stir gently with a wooden spoon so the egg that 
                            sets on the base of the pan moves to enable uncooked egg to flow into the space. 
                            Stop stirring when it's nearly cooked to allow it to set into an omelette. 
                            Cut into four and serve with the tomatoes.</li>
                    </ol></h5>
                </div>
            </div>


      

        </>
    );
};

export default Recipe6;


