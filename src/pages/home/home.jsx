import React from "react";
import * as ReactDOM from "react-dom";
import Footer from "../../component/footer/footer";
import Card from "../../component/card/card";
import Slider from "../../component/slider/slider";
import SearchBox from "../../component/search-box/search-box";
import "./home.scss"

export default function Home () {
      return (
          <>     

             <Slider />

             <SearchBox/>
             
            <div className="home-wrapper">
       
            <Card img src={require("../../assests/carrot_juice.jpg")}
        title="Gerson Therapy Carrot Juice" 
        description="Organic, fresh-pressed carrot juice is one of the main recipes 
        used in the cancer-fighting Gerson Therapy diet."/>

        <Card img="../../assests/carrot_juice.jpg"  
        title="Sweet Pea Microgreen Smoothie" 
        description="This tasty green smoothie is packed with an amazing amount
        of nutrients courtesy of its star ingredient, sweet pea microgreens." />    

        <Card img="../../assests/carrot_juice.jpg"  
        title="Shrimp, Avocado, and Egg Chopped Salad" 
        description="Shrimp is high in protein and low in calories,
        making it an ideal alternative to beef and chicken. " /> 

        <Card img="../../assests/carrot_juice.jpg"          
        title="Vanilla Berry Smoothie Bowle" 
        description="Thick and creamy berry protein smoothies served in a bowl, 
        topped with fresh fruit and granola" /> 

        <Card img="../../assests/carrot_juice.jpg"  
        title="Avocado Toast" 
        description="Mashed avocado spread over crusty whole-wheat bread, finished with olive oil, 
        red pepper flakes, and flaky sea salt—does it get much better than that?" /> 

        <Card img="../../assests/carrot_juice.jpg"  
        title="Herb Omelette with Fried Tomatoes" 
        description="Omelette Vegetables are foods that are simply prepared 
        and can be prepared for breakfast and enjoy it." /> 

        <Card img="../../assests/carrot_juice.jpg"  
        title="Clam Chowder" 
        description="Clam chowder is easier to make than you think -
        and the homemade version is unbelievably creamy, flavourful and chockfull of clams." /> 

            <Card img="../../assests/carrot_juice.jpg"      
        title="Fettuccine Alfredo" 
        description="Fettuccine Alfredo is perfect for any and all occasions, 
        from busy weeknights to romantic dinners.  
        It's simple, elegant, and totally delicious." /> 

            </div>

                 </>  
        )
     }

     
  

