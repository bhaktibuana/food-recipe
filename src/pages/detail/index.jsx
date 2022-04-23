import React, { useState, useEffect } from "react";
import { NavigationStateContext } from "../../App";
import { useParams } from "react-router-dom";
import { MdAccessTime, MdStar } from "react-icons/md";
import SideNavbar from "../../components/navigation/sideNav";
import TopNavbar from "../../components/navigation/topNav";
import Footer from "../../components/footer";
import axios from "axios";

import "./style.scss";

const RecipeDetail = (props) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [recipeData, setRecipeData] = useState({});

  const { id } = useParams();

  const timeFormater = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;

    return `${minutes}m ${seconds}s`;
  };

  const fetchRecipe = async () => {
    try {
      await axios
        .get(props.apiUrl.getRecipeById + id)
        .then((res) => {
          setRecipeData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <div className="recipe-detail-container">
        <NavigationStateContext.Provider
          value={[showSideNavbar, setShowSideNavbar, props.apiUrl]}
        >
          <SideNavbar />
          <TopNavbar />
        </NavigationStateContext.Provider>

        <div className="page-container">
          <div className="page-content">
            <div className="content-body">
              <div className="card-content">
                <div className="card-header">
                  <div className="img-container">
                    <img src={recipeData.image_url} alt="" />
                  </div>

                  <div className="name-container">
                    <h1>{recipeData.name}</h1>
                    <p>Category: {recipeData.category}</p>
                    <p>Created by: {recipeData.username}</p>
                    <p>Calories: {recipeData.calories}</p>

                    <div className="name-footer">
                      <div className="time">
                        <MdAccessTime />
                        <p className="time">
                          {timeFormater(recipeData.cooking_time)}
                        </p>
                      </div>

                      <div className="rating">
                        <MdStar />
                        <p className="rating">
                          {recipeData.rating ? recipeData.rating : 0}/5
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
