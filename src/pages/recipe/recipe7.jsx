import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe7() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Clam Chowder']);

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
                    <h4>Category: Main Dishes</h4>
                </div> <br />

                <div className="main-title">
                    <p>Clam Chowder</p>
                </div>  <br />

                <div className="description">
                    <h4>Clam chowder is easier to make than you think -
                        and the homemade version is unbelievably creamy, flavourful and chockfull of clams. </h4>
                </div>  <br />

                <div className="recipe7-image">
                    <p><img src={require("../../assests/clam_chowder.jpg")} /></p>
                </div>  <br />

                <div><br />
                    <h3 className="title"><b>Time</b></h3>
                    <h5 className="title"> <ul>
                        <li>Prep Time 20:00 </li>
                        <li>Cook Time 06:00:00 </li>                        
                        <li>Total Time 06:20:00 </li>
                    </ul> </h5> <br /> <hr /><br />
                </div>

                <div>
                    <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title"><ol>
                        <li>1 (10.75 ounce) can condensed cream of celery soup</li>
                        <li>1 (10.75 ounce) can condensed cream of potato soup</li>
                        <li>1 (10.75 ounce) can New England clam chowder</li>
                        <li>2 (6.5 ounce) cans minced clams</li>
                        <li>1-quart half-and-half cream</li>
                        <li>1-pint heavy whipping cream</li>
                        </ol> </h5> <br /> <hr /><br />
                </div>

                <div>
                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"> <ol>
                        <li>Mix cream of celery soup, cream of potato soup, clam chowder, 
                            1 can undrained clams, 1 can drained clams, half-and-half cream, 
                            and whipping cream into a slow cooker.</li>
                        <li>Cover, and cook on low for 6 to 8 hours.</li>
                    </ol></h5>	
                </div>

            </div>
      
     

        </>
    );
};
export default Recipe7;



