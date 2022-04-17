import React from "react";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';
import Home from "./pages/home/home";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Recipe1 from "./pages/recipe/recipe1";
import Recipe2 from "./pages/recipe/recipe2";
import Recipe3 from "./pages/recipe/recipe3";
import Recipe4 from "./pages/recipe/recipe4";
import Recipe5 from "./pages/recipe/recipe5";
import Recipe6 from "./pages/recipe/recipe6";
import Recipe7 from "./pages/recipe/recipe7";
import Recipe8 from "./pages/recipe/recipe8";
import "./App.css";


const App = () => {
  return (
    <>

    <Navbar/>

    <BrowserRouter>
      <Routes>
  
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />     

      </Routes>
      </BrowserRouter>
      
      <Footer/>

      </>
  )
}

export default App;