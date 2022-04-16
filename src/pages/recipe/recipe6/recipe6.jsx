import React from "react";
import Navbar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import Ratings from "../../../component/rating/rating";
import "./recipe6.scss"



export default function Recipe6() {
    return (
        <>

            <Navbar />

            <div className="recipe6">

                <div className="recipe6-category">
                    <h5>Category: Breakfast</h5>
                </div> <br />

                <Ratings />

                <div className="recipe6-title">
                    <h1>Herb Omelette with Fried Tomatoes</h1>
                </div>  <br />
                <div className="recipe6-description">
                    <h5>Omelette Vegetables are foods that are simply prepared 
                        and can be prepared for breakfast and enjoy it. </h5>
                </div>  <br />
                <div className="recipe6-image">
                    <p><img src={require("../../assests/herb_omelette.jpg")} /></p>
                </div>  <br />
                <div className="recipe6-directions">
                    <h3><b>Time</b></h3>
                    <h5> <ul>
                        <li>Prep Time 05:00 </li>
                        <li>Cook Time 05:00 </li>                        
                        <li>Total Time 10:00 </li>
                    </ul> </h5> <br />
                    <h3><b>Ingredients</b></h3>
                    <h5><ol>
                        <li>1 tablespoon rapeseed oil</li>
                        <li>3 tomatoes, halved</li>
                        <li>4 large eggs</li>
                        <li>1 tablespoon chopped parsley</li>
                        <li>1 tablespoon chopped basil</li>                                    
                        </ol> </h5> <br />
                    <h3><b>Directions</b></h3>
                    <h5> <ol>
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
            1.	
2.	

            <Footer />

        </>
    );
};




