import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="row text-center bg-secondary text-lg-start text-white">
          <section className="mt-4">
          <p className="d-flex justify-content-center bg- align-items-center">
              <span className="me-3">Register for free</span>
              <button type="button" className="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>
     
     <div className="text-center bg-dark p-3">
        <p>© 2020 Copyright:</p>
        <Link className="text-white" to="/">FoodFAQtory.com</Link>
    </div>
    
    </footer>
    )
}