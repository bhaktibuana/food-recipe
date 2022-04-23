import React, { useEffect, useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import {
  Modal,
  Input,
  Select,
  Divider,
  Typography,
  Space,
  InputNumber,
  Button,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const ModalCreate = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [newCategoryList, setNewCategoryList] = useState(categoryList);
  const [newCategory, setNewCategory] = useState("");
  const [ingredientInput, setIngredientInput] = useState([]);
  const [stepInput, setStepInput] = useState([]);
  const [recipeData, setRecipeData] = useState({
    category: null,
    name: null,
    description: null,
    cooking_time: 1,
    calories: 1,
    ingredients: [],
    steps: [],
    image_url: null,
  });

  const navigate = useNavigate();

  const handleOk = () => {
    createRecipe();
  };

  const handleCancel = () => {
    props.setVisible(false);
    setRecipeData({
      category: null,
      name: null,
      description: null,
      cooking_time: 1,
      calories: 1,
      ingredients: [],
      steps: [],
      image_url: null,
    });

    setIngredientInput([]);
    setStepInput([]);
    setCategoryList([]);
    setNewCategoryList(categoryList);
  };

  const handleAddIngredient = () => {
    const id = ingredientInput.length + 1;
    setIngredientInput([
      ...ingredientInput,
      <Input
        key={id}
        style={{ margin: "0 0 10px 0" }}
        placeholder={`Ingredient ${id}`}
        onChange={(e) =>
          (recipeData.ingredients[id - 1] = { name: e.target.value })
        }
      />,
    ]);
  };

  const handleAddStep = () => {
    const id = stepInput.length + 1;
    setStepInput([
      ...stepInput,
      <Input
        key={id}
        style={{ margin: "0 0 10px 0" }}
        placeholder={`Step ${id}`}
        onChange={(e) =>
          (recipeData.steps[id - 1] = {
            order_number: id,
            description: e.target.value,
          })
        }
      />,
    ]);
  };

  const fetchCategories = async () => {
    try {
      await axios
        .get(props.apiUrl.getCategories)
        .then((res) => {
          const temp = [];
          res.data.map((values) => temp.push(values.name));

          setCategoryList(temp);
          setNewCategoryList(temp);
        })
        .catch((err) => {
          setCategoryList([]);
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const createRecipe = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const bodyParams = {
      ...recipeData,
      ingredients: JSON.stringify(recipeData.ingredients),
      steps: JSON.stringify(recipeData.steps),
    };

    try {
      await axios
        .post(props.apiUrl.createRecipe, bodyParams, config)
        .then((res) => {
          const recipeId = res.data.recipe_id;
          setIsLoading(false);
          handleCancel();
          navigate(
            `/recipe/${recipeData.category}-${recipeId}-${recipeData.name}`
          );
        })
        .catch((err) => {
          if (
            err.response.status === 401 &&
            err.response.data.message === "Token expired."
          ) {
            localStorage.removeItem("access_token");
            window.location.reload();
          }

          alert("Failed to create recipe");
          setIsLoading(false);
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [props.visible]);

  return (
    <>
      <Modal
        title="Create Recipe"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <form action="#" className="create-recipe">
          <div className="item">
            <label htmlFor="category">Category</label>

            <div className="input-container">
              <Select
                style={{ width: "100%" }}
                placeholder="Select a category"
                onChange={(value) =>
                  setRecipeData({ ...recipeData, category: value })
                }
                value={recipeData.category}
                dropdownRender={(menu) => (
                  <>
                    {menu}

                    <Divider style={{ margin: "8px 0" }} />
                    <Space align="center" style={{ padding: "0 8px 4px" }}>
                      <Input
                        placeholder="add category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                      />
                      <Typography.Link
                        onClick={(e) => {
                          e.preventDefault();
                          if (newCategory !== "") {
                            setNewCategoryList([
                              ...newCategoryList,
                              newCategory,
                            ]);
                            setNewCategory("");
                          }
                        }}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <PlusOutlined /> Add item
                      </Typography.Link>
                    </Space>
                  </>
                )}
              >
                {newCategoryList.map((item, index) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="item">
            <label htmlFor="name">Name</label>

            <div className="input-container">
              <Input
                placeholder="Recipe name"
                onChange={(e) =>
                  setRecipeData({ ...recipeData, name: e.target.value })
                }
                value={recipeData.name}
              />
            </div>
          </div>

          <div className="item">
            <label htmlFor="Description">Description</label>

            <div className="input-container">
              <Input.TextArea
                placeholder="Description"
                onChange={(e) =>
                  setRecipeData({ ...recipeData, description: e.target.value })
                }
                value={recipeData.description}
              />
            </div>
          </div>

          <div className="item">
            <label htmlFor="cooking_time">Cooking Time</label>

            <div className="input-container">
              <InputNumber
                style={{ width: "100%" }}
                defaultValue={1}
                min={1}
                addonAfter="sec"
                onChange={(value) =>
                  setRecipeData({ ...recipeData, cooking_time: value })
                }
                value={recipeData.cooking_time}
              />
            </div>
          </div>

          <div className="item">
            <label htmlFor="calories">Calories</label>

            <div className="input-container">
              <InputNumber
                style={{ width: "100%" }}
                defaultValue={1}
                min={1}
                addonAfter="cal"
                onChange={(value) =>
                  setRecipeData({ ...recipeData, calories: value })
                }
                value={recipeData.calories}
              />
            </div>
          </div>

          <div className="item">
            <label htmlFor="ingredients">Ingredients</label>

            <div className="input-container">
              {ingredientInput}

              <Button
                type="dashed"
                style={{ width: "100%" }}
                icon={<PlusOutlined />}
                onClick={handleAddIngredient}
              >
                Add field
              </Button>
            </div>
          </div>

          <div className="item">
            <label htmlFor="steps">Steps</label>

            <div className="input-container">
              {stepInput}

              <Button
                type="dashed"
                style={{ width: "100%" }}
                icon={<PlusOutlined />}
                onClick={handleAddStep}
              >
                Add field
              </Button>
            </div>
          </div>

          <div className="item">
            <label htmlFor="image_url">Image</label>

            <div className="input-container">
              <Widget
                publicKey="598161a3fb4379f32ffa"
                crop="free, 16:9, 4:3, 5:4, 1:1"
                tabs="file camera url"
                onChange={(info) =>
                  setRecipeData({ ...recipeData, image_url: info.cdnUrl })
                }
                // clearable
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreate;
