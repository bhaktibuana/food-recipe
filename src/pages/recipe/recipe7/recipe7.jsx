import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Ratings from "../../component/rating/rating";
import "./recipe7.scss"



export default function Recipe7() {
    return (
        <>

            <Navbar />

            <div className="recipe7">

                <div className="recipe7-category">
                    <h5>Category: Main Dishes</h5>
                </div> <br />

                <Ratings />

                <div className="recipe7-title">
                    <h1>Clam Chowder</h1>
                </div>  <br />
                <div className="recipe7-description">
                    <h5>Clam chowder is easier to make than you think -
                        and the homemade version is unbelievably creamy, flavourful and chockfull of clams. </h5>
                </div>  <br />
                <div className="recipe7-image">
                    <p><img src={require("../../assests/clam_chowder.jpg")} /></p>
                </div>  <br />
                <div className="recipe7-directions">
                    <h3><b>Time</b></h3>
                    <h5> <ul>
                        <li>Prep Time 20:00 </li>
                        <li>Cook Time 06:00:00 </li>                        
                        <li>Total Time 06:20:00 </li>
                    </ul> </h5> <br />
                    <h3><b>Ingredients</b></h3>
                    <h5><ol>
                        <li>1 (10.75 ounce) can condensed cream of celery soup</li>
                        <li>1 (10.75 ounce) can condensed cream of potato soup</li>
                        <li>1 (10.75 ounce) can New England clam chowder</li>
                        <li>2 (6.5 ounce) cans minced clams</li>
                        <li>1-quart half-and-half cream</li>
                        <li>1-pint heavy whipping cream</li>
                        </ol> </h5> <br />
                    <h3><b>Directions</b></h3>
                    <h5> <ol>
                        <li>Mix cream of celery soup, cream of potato soup, clam chowder, 
                            1 can undrained clams, 1 can drained clams, half-and-half cream, 
                            and whipping cream into a slow cooker.</li>
                        <li>Cover, and cook on low for 6 to 8 hours.</li>
                    </ol></h5>	
                </div>
            </div>
      
            <Footer />

        </>
    );
};




