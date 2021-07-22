import { Link } from "react-router-dom";

export default function RecipeCard({id,name,description,photo,date,alt}) {
    return (
      <div className="col-lg-4 col-md-8 col-sm-12 mb-md-0 mb-2 mt-2">
        <div className="card text-dark bg-ligth h-100">
          <div>
            <Link to={`/recipes/${id}`}>
              <img src={photo} className="card-img-top" alt={alt} style={{objectFit:'cover', width: '100%', height:'auto'}} />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}
            {Date.now() - new Date(date) < 172800000 && /* if recipe is from last 48 hours */
              <span className="badge rounded-pill bg-primary newlyAdded">new</span>
            }
            </h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer text-center">
            <div className="btn-group" role="group" aria-label="View or add to favorites">
              <Link to={`/recipes/${id}`} className="btn btn-primary" role="button" aria-pressed="true">View recipe</Link>
            </div>
          </div>
        </div>
      </div>
    )
}