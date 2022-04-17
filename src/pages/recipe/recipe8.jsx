import React, { useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/breadcrumbs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from "../../component/ratings/ratings";
import "../recipe/recipe.scss";


function Recipe8() {

    // Breadcrumbs 
    const [crumbs, setCrumbs] = useState(['Home', 'Fettuccine Alfredo']);

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
                    <h4>Category: Main Dishes</h4>
                </div> <br />

                <div className="main-title">
                    <p>Fettuccine Alfredo</p>
                </div>  <br />

                <div className="description">
                    <h4>Fettuccine Alfredo is perfect for any and all occasions,
                        from busy weeknights to romantic dinners.
                        It's simple, elegant, and totally delicious.</h4>
                </div>  <br />

                <div className="recipe8-image">
                    <p><img src={require("../../assests/fettuccine_alfredo.jpg")} /></p>
                </div>  <br />

                <div><br />
                    <h3 className="title" ><b>Time</b></h3>
                    <h5 className="title" > <ul>
                        <li>Prep Time 10:00 </li>
                        <li>Cook Time 20:00 </li>
                        <li>Total Time 30:00 </li>
                    </ul> </h5> <br />  <hr /><br />
                </div>

                <div>
                    <br /> <h3 className="title"><b>Ingredients</b></h3>
                    <h5 className="title"><ol>
                        <li>12 ounces cauliflower florets, (1 small cauliflower)</li>
                        <li>½ cup grated Parmesan cheese, more for serving</li>
                        <li>¼ cup extra-virgin olive oil</li>
                        <li>2 garlic cloves</li>
                        <li>½ teaspoon Dijon mustard</li>
                        <li>3 tablespoons unsalted butter</li>
                        <li>2 tablespoons fresh lemon juice</li>
                        <li>1 teaspoon sea salt</li>
                        <li>Freshly ground black pepper</li>
                        <li>16 ounces fettuccine pasta</li>
                        <li>1 to 1½ cups reserved pasta cooking water</li>
                        <li>Chopped fresh parsley</li>
                    </ol> </h5> <br /> <hr /> <br />
                </div>

                <div>
                    <h3 className="title"><b>Directions</b></h3>
                    <h5 className="title"> <ol>
                        <li>Bring a large pot of salted water to a boil.
                            Add the cauliflower and boil until the cauliflower is fork tender, 8 to 10 minutes.
                            Drain and place the cauliflower in a blender.
                            Add the Parmesan cheese, olive oil, garlic, mustard, butter, lemon juice, salt, and several grinds of pepper.</li>
                        <li>Cook the pasta in a large pot of salted boiling water according to package directions or until al dente.
                            Drain the pasta, reserving 1½ cups of the starchy pasta water.
                            Add 1 cup of the pasta water to the blender and blend the sauce until creamy.</li>
                        <li>Transfer the pasta to a large bowl or skillet.
                            Add the sauce and toss to coat. If the sauce is too thick,
                            add the remaining ½ cup pasta water and toss again to loosen the sauce and make it a bit creamier.</li>
                        <li>Sprinkle with parsley and season to taste. Serve with grated cheese on the side.</li>
                    </ol></h5>
                </div>

            </div>




        </>
    );
};

export default Recipe8;



