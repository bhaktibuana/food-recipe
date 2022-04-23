import React, { useEffect, useState } from "react";
import { NavigationStateContext } from "../../App";
import Footer from "../../components/footer";
import SideNavbar from "../../components/navigation/sideNav";
import TopNavbar from "../../components/navigation/topNav";
import ThumbnailCard from "./thumbnailCard";
import CustomCarousel from "./customCarousel";
import { Pagination, Spin } from "antd";
import axios from "axios";

import "./style.scss";

const HomePage = (props) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchRecipes = async (page) => {
    setIsLoading(true);

    const queryParams = {
      params: {
        offset: page,
        limit: pageSize,
      },
    };

    try {
      await axios
        .get(props.apiUrl.getAllRecipes, queryParams)
        .then((res) => {
          const data = res.data.results;

          setRecipesData(
            data.map((values) => (
              <ThumbnailCard
                key={values.id}
                recipeId={values.id}
                name={values.name}
                category={values.category}
                cookingTime={values.cooking_time}
                calories={values.calories}
                rating={values.rating}
                imageUrl={values.image_url}
              />
            ))
          );

          setTotalPages(res.data.count);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setTotalPages(0);
            setIsLoading(false);
            setRecipesData([]);
          }
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes(0);
  }, []);

  return (
    <>
      <div className="home-page-container">
        <NavigationStateContext.Provider
          value={[showSideNavbar, setShowSideNavbar, props.apiUrl]}
        >
          <SideNavbar />
          <TopNavbar />
        </NavigationStateContext.Provider>

        <div className="page-container">
          <div className="page-content">
            <div className="content-header">
              <CustomCarousel />
            </div>

            <div className="content-body">
              {isLoading ? (
                <div className="spinner-container">
                  <Spin tip="Loading product..." size="large" />
                </div>
              ) : (
                <div className="card-list">{recipesData}</div>
              )}

              <div className="pagination-container">
                <Pagination
                  showSizeChanger={true}
                  defaultCurrent={1}
                  defaultPageSize={pageSize}
                  total={totalPages}
                  onChange={(page) => {
                    fetchRecipes((page - 1) * pageSize);
                  }}
                  onShowSizeChange={(current, size) => {
                    setPageSize(size);
                  }}
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
