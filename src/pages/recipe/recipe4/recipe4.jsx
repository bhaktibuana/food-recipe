import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Ratings from "../../component/rating/rating";
import "./recipe4.scss"



export default function Recipe4() {
    return (
        <>

            <Navbar />

            <div className="recipe4">

                <div className="recipe4-category">
                    <h5>Category: Healthy</h5>
                </div> <br />

                <Ratings />

                <div className="recipe4-title">
                    <h1>Vanilla Berry Smoothie Bowl</h1>
                </div>  <br />
                <div className="recipe4-description">
                    <h5>Thick and creamy berry protein smoothies served in a bowl, 
                        topped with fresh fruit and granola. </h5>
                </div>  <br />
                <div className="recipe4-image">
                    <p><img src={require("../../assests/smoothie_bowl.jpg")} /></p>
                </div>  <br />
                <div className="recipe4-directions">
                    <h3><b>Time</b></h3>
                    <h5> <ul>
                        <li>Prep Time 10:00 </li>                        
                        <li>Total Time 10:00 </li>
                    </ul> </h5> <br />
                    <h3><b>Ingredients</b></h3>
                    <h5><ol>
                        <li>2 cups frozen mixed berries</li>
                        <li>1 banana sliced</li>
                        <li>1 ½ cups almond milk or skim milk</li>
                        <li>½ cup vanilla Greek yogurt</li>
                        <li>2 scoops whey protein vanilla flavour</li>
                        <li>Low-calorie sweetener to taste (option)</li>
                        <li>1 cup fresh berries such as raspberries, blueberries, and/or strawberries</li>
                        <li>¼ cup low-fat granola</li>                 
                    </ol> </h5> <br />
                    <h3><b>Directions</b></h3>
                    <h5> <ol>
                        <li>Place the berries, banana, almond milk, Greek yogurt, and protein concentrate in the blender and blend until a thick and smooth mixture forms. 
                            You may need to add a bit more of the milk to thin to desired consistency.</li>
                        <li>Taste and add sweetener if desired.</li>
                        <li>Divide the smoothie evenly between two bowls and top with fresh berries and granola. Serve immediately.</li>
                    </ol></h5>
                </div>
            </div>

            <Footer />

        </>
    );
};




