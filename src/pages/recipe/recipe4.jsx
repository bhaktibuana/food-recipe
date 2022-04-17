import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe4() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Smoothie Bowl']);

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
            <o>Vanilla Berry Smoothie Bowl</o>
                </div>  <br />

            <div className="description">
                    <h4>Thick and creamy berry protein smoothies served in a bowl, 
                        topped with fresh fruit and granola. </h4>
                </div>  <br />

            <div className="recipe4-image">
                <p><img src={require("../../assests/smoothie_bowl.jpg")} /></p>
            </div>  <br />

            <div><br />
                <h3 className="title"><b>Time</b></h3>                   
                        <h5 className="title"> <ul>
                            <li>Prep Time 10:00 </li>                        
                            <li>Total Time 10:00 </li>
                        </ul> </h5><br /> <hr /><br />
                    </div>

            <div>
                <h3 className="title"><b>Ingredients</b></h3>                
                    <h5 className="title"><ol>
                        <li>2 cups frozen mixed berries</li>
                        <li>1 banana sliced</li>
                        <li>1 ½ cups almond milk or skim milk</li>
                        <li>½ cup vanilla Greek yogurt</li>
                        <li>2 scoops whey protein vanilla flavour</li>
                        <li>Low-calorie sweetener to taste (option)</li>
                        <li>1 cup fresh berries such as raspberries, blueberries, and/or strawberries</li>
                        <li>¼ cup low-fat granola</li>                 
                    </ol> </h5><hr /> <br /> <hr /><br />
            </div>

            <div>
                <h3 className="title"><b>Directions</b></h3>                      
                    <h5 className="title"> <ol>
                        <li>Place the berries, banana, almond milk, Greek yogurt, and protein concentrate in the blender and blend until a thick and smooth mixture forms. 
                            You may need to add a bit more of the milk to thin to desired consistency.</li>
                        <li>Taste and add sweetener if desired.</li>
                        <li>Divide the smoothie evenly between two bowls and top with fresh berries and granola. Serve immediately.</li>
                    </ol></h5>
            </div>
            </div>
            

             </>
    );
};

export default Recipe4;


