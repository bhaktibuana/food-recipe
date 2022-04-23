import React from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

const RecipeDetail = () => {

  const { id } = useParams();

  return (
    <>
      <div>RecipeDetail {id}</div>
    </>
  );
};

export default RecipeDetail;
