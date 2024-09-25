import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomeStore.css";
import "./MensApparelPage.css";
import "./JeweleryPage.css";

export default function JeweleryPage() {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error("Error:", error));
  }, []);
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
          <Link to="/jewelery" className="btn btn-primary">
            Shop Jewelery
          </Link>
        </div>
      </div>
      <div>
        <h1>Designer Jewelery</h1>
        <Link to="/jewelery"></Link>
      </div>
      <div className="card-container-jewelery">
        {searchResults.map((category: any) => (
          <div key={category.id} className="card-jewelery">
            <img
              src={category.image}
              className="card-image"
              alt={category.title}
            />
            <div className="card-body-jewelery">
              <h5 className="card-title-jewelery">{category.title}</h5>
              <p className="card-text-jewelery">{category.price}</p>
              {/* <p className="card-text-jewelery">{category.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
