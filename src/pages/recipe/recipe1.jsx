import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe1() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Sweet Pea Microgreen Smoothie']);

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
                    <h5>Category: Beverage</h5>
                </div> <br />

                <div className="main-title">
                    <p>Gerson Therapy Carrot Juice</p>
                </div>  <br />

                <div className="description">
                    <h5>Organic, fresh-pressed carrot juice is one of the main recipes
                        used in the cancer-fighting Gerson Therapy diet.</h5>
                </div>  <br />

                <div className="recipe1-image">
                    <p><img src={require("../../assests/carrot_juice.jpg")} />     </p>
                </div>  <br />

                <div><br/>
                    <h3 className="title"><b>Time</b></h3>
                    <h5 className="title"><ul>
                        <li>Prep Time 01:00 </li>
                        <li>Juice Time 03:00 </li>
                        <li>Total Time 04:00 </li>
                    </ul> </h5> <br /><hr/><br />
                </div>

                <div>
                    <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title">  
                    <ul>Carrot 539 g (5-6 medium carrots)</ul></h5>   
                    <br /><hr/><br />
                </div>

                <div>
                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"> <ol>
                        <li>Wash the carrots. </li>
                        <li>Cut the tops and bottoms off of the carrots. </li>
                        <li>Grind and press. </li>
                    </ol> </h5>
                </div>
            </div>
        

    </>
  );
};

export default Recipe1;


