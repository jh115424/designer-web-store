import { Link } from "react-router-dom";
import "./HomeStore.css";
import "./MensApparelPage.css";
// import "./JewelryPage.css";
import { useEffect, useState } from "react";

const userUrl = "https://fakestoreapi.com/products/category/men's clothing";

export default function ApparelPage() {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing", {
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
          <Link to="/jewelry" className="btn btn-primary">
            Shop Jewelry
          </Link>
        </div>
      </div>

      <div>
        <h1>Mens Apparel</h1>
      </div>


      <div className="card-container-mens">
        
        {searchResults.map((category: any) => (
          <div key={category.id} className="card-mens">
            <img
              src={category.image}
              className="card-image"
              alt={category.title}
            />
            <div className="card-body-mens">
              <h5 className="card-title-mens">{category.title}</h5>
              <p className="card-text-mens">{category.price}</p>

              <p className="card-text-mens">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
// function setSearchResults(_arg0: any[]): any {

//   throw new Error("Function not implemented.");
// }
