import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "./navbar2.scss";

export default function Navbar2() {

    return(

// Home - Register //
<nav class="navbar navbar-expand-lg" >  

    <div class="navbar-brand logo">MealMe</div>   
     
    <div className="search-box">
        <form class="d-flex">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-warning" type="submit">Search</button>
        </form>
    </div>

    <div class="collapse navbar-collapse navbar-menu">
        <ul class="navbar-nav">
            <Link to="/" className="home">
                <li class="nav-item">Home</li>
            </Link>           
            <Link to="/register" className="register"> 
                <li class="nav-item"><button type="button" class="btn btn-light">Register</button></li>
            </Link>  
        </ul>
    </div>
                         
</nav>

    )
}