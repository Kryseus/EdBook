import { Carousel } from "bootstrap";
import { Link } from "react-router-dom";
//import { Modal } from "bootstrap";
import '../style.css'



export default function MainPage(props) {
    console.log(Carousel);
    return (
      <div className="col bg-dark text-center">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner bg-dark">  
              <div className="carousel-item frame active">
                <img src="Pictures/balanced-diet-food-background-balanced-diet-food-background-organic-food-healthy-nutrition-superfoods-meat-fish-legumes-nuts-121936796.jpg" className="framed-img" alt="#" link="#"/>
              </div>
              <div className="carousel-item frame">
                <img src="Pictures/istockphoto-1155240408-612x612.jpg" className="framed-img" alt="#" link="#"/>
              </div>
              <div className="carousel-item frame">
                <img src="Pictures/pizza-beer-1200x628-facebook-1200x628.jpg" className="framed-img" alt="#" link="#"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        <div className="row p-5 text-center bg-dark">
            <div className="jumbotron jumbotron-fluid text-light">
                <h1 className="display-5">FoodFAQtory</h1>
                <p className="lead">Let us teach you all about the taste!</p>
                <hr className="my-4" />
                <p>Welcome to the FoodFAQtory! Let us provide you with all the recipes and informations you could ever ask for to become a real culinary expert!</p>
                <Link className="btn btn-light btn-lg" to="/" role="button">Learn more</Link>
              </div>
        </div>

        <div className="row px-3">
            <div className="card me-3 my-3 col-md-6 col-xl-8">
                <div className="card-body">
                  <h5 className="card-title">How to get started?</h5>
                  <h6 className="card-subtitle mb-2 text-muted">First Steps</h6>
                  <br />
                  <p className="card-text">You always wanted to impress you family, friends or lovers with a culinary adventure? We provide you with all the recipes you could ever ask for. 
                    </p>
                    <br />
                    <p>If you signe up for free you will receive access to additional information to not only be able to cook all the tasty dishes but also to know the how and why aswell as detailed instructions for different cooking techniques! 
                  </p>  
                <br />
                  <p>Sign up now to gain access to over 9.000 different dishes! Join our community today to become a great chef tomorrow!
                  </p>
                </div>
              </div>
            <div className="col">
                <div className="row my-3 row-xl-4">
                    <div className="card">
                        <img src="./images/ba-best-shrimp-cocktail-2.webp" className="card-img-top" alt="BA’s Best Shrimp Cocktail " />
                        <div className="card-body">
                          <h5 className="card-title">BA’s Best Shrimp Cocktail </h5>
                          <p className="card-text">Shrimp cocktail is all about the shrimp: big, fat, perfectly cooked gorgeous shrimp.</p>
                          <Link to="/showrecipe" className="btn btn-primary">Recipe</Link>
                        </div>
                      </div>
                </div>
                <div className="row my-3 row-xl-4">
                    <div className="card">
                        <img src="Pictures/balanced-diet-food-background-balanced-diet-food-background-organic-food-healthy-nutrition-superfoods-meat-fish-legumes-nuts-121936796.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <Link to="/" className="btn btn-primary">Recipe</Link>
                        </div>
                      </div>
                </div>
            </div>
          </div>
        </div>
    )
}