import React from "react";
import Navbar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import Ratings from "../../../component/rating/rating";
import "./recipe1.scss"



export default function Recipe1 () {
  return (
<>  

<Navbar/ > 

<div className="recipe1">

    <div className="recipe1-category">
        <h5>Category: Beverage</h5> 
    </div> <br/>

<Ratings/>   

        <div className="recipe1-title">
            <h1>Gerson Therapy Carrot Juice</h1>
        </div>  <br/>
            <div className="recipe1-description">
                <h5>Organic, fresh-pressed carrot juice is one of the main recipes 
                    used in the cancer-fighting Gerson Therapy diet.</h5>
            </div>  <br/>
                <div className="recipe1-image">
                    <p><img src={require("../../assests/carrot_juice.jpg")} />     </p>
                </div>  <br/>
                    <div className="recipe1-directions">                           
                        <h3><b>Time</b></h3>  
                            <h5><ul>
                            <li>Prep Time 01:00 </li>
                            <li>Juice Time 03:00 </li>
                            <li>Total Time 04:00 </li>
                            </ul> </h5> <br/>         
                            <h3><b>Ingredients</b></h3> 
                            <h5>  <ul>Carrot 539 g (5-6 medium carrots)</ul></h5>  <br/>                    
                            <h3><b>Directions</b></h3>  
                            <h5> <ol>
                                <li>Wash the carrots. </li>
                                <li>Cut the tops and bottoms off of the carrots. </li>
                                <li>Grind and press. </li>
                                </ol>    </h5>                              
                    </div>             
</div>

<Footer/>    

    </>
  );
};


    

