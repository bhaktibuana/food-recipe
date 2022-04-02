import React from "react";
import "./recipe_content1.css"

export default function RecipeContent1 () {
  return (
<>     
  <div className="recipe1-container">

    <div className="recipe1-head">                  
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/login">Login</a></li>
        </ol>
      </nav>
    </div>
        
    <div className="recipe1-card-container">         
      <div className="recipe1-card-content">
        <div className="recipe1-content">

          <div className="recipe1-title">
            <h1>Gerson Therapy Carrot Juice</h1>
          </div>

            <div className="recipe1-image">
              <img src={require("../../assests/carrot_juice.jpg")} />     
            </div>   

              <div className="recipe1-description">
                <br/><p>Organic, fresh-pressed carrot juice is one of the main recipes 
                    used in the cancer-fighting Gerson Therapy diet.</p>
              </div> 

                <div className="recipe1-ingredients">
                  <p><b>Ingredients</b> <br/>
                        Carrot 539 g (5-6 medium carrots)</p>
                </div>   

                  <div className="recipe1-directions">
                    <p><b>Directions</b>  <br/>
                      1.	Wash the carrots. <br/>
                      2.	Cut the tops and bottoms off of the carrots.  <br/>
                      3.	Grind and press.
                    </p>
                  </div>

            </div>
          </div>
        </div>

      </div>
      
    </>
  );
};


    

