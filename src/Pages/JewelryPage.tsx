import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomeStore.css";
import "./MensApparelPage.css";
import "./JewelryPage.css";

const userUrl = "https://fakestoreapi.com/products/category/jewelry";

export default function JewelryPage() {
  const [searchResults, setSearchResults] = useState([]);
   useEffect(() => {
     fetch("https://fakestoreapi.com/products/category/jewelry", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     })
       .then((response) => response.json())
       .then((data) => setSearchResults(data))
       .catch((error) => console.error("Error:", error));
   }, [])
  return (
    <>
      <div className="topHome-Nav">
        <Link to="/home" className="home">
          Home
        </Link>
        <div className="topRightHome-Nav">
          <Link to="/apparel" className="btn btn-primary">
            Shop Mens Apparel
          </Link>
          <Link to="/jewelry" className="btn btn-primary">
            Shop Jewelry
          </Link>
        </div>
      </div>
      <div>
        <h1>Designer Jewelry</h1>
        {/* <Link to="/jewelry"></Link> */}
      </div>
      <div className="card-container-jewelry">
        {searchResults.map((category: any) => (
          <div key={category.id} className="card-jewelry">
            <img
              src={category.image}
              className="card-image"
              alt={category.title}
            />
            <div className="card-body-jewelry">
              <h5 className="card-title-jewelry">{category.title}</h5>
              <p className="card-text-jewelry">{category.price}</p>
              <p className="card-text-jewelry">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
