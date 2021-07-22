import 'bootstrap/scss/bootstrap.scss'
import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Recipes from './components/Recipes';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container-md bg-dark">
        <div className="row flex-nowrap p-5 bg-dark">
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route exact path="/recipes/:recipeId" component={RecipePage}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
