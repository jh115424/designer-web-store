import "./HomeStore.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const userUrl = "https://fakestoreapi.com/products";

export default function HomeStoreApp() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(userUrl);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log(searchResults); // Added this line to use searchResults

  return (
    <>
      <div>
        <div className="topHome-Nav">
          <Link to="/home" className="home">
            Home
          </Link>
          <div className="topRightHome-Nav">
            <Link to="/apparel" className="btn btn-primary">
              Shop Apparel
            </Link>
            <Link to="/shoes" className="btn btn-primary">
              Shop Shoes
            </Link>
          </div>
        </div>
        <h1 className="storeName">Elaine's Luxuries</h1>

        <p className="home-title">
          Welcome to Elaine's Luxuries, where luxury meets elegance. Explore{" "}
          <br /> our exquisite collection of high-end products, designed to{" "}
          <br /> elevate your lifestyle. Discover the perfect blend of style and
          sophistication.
        </p>
      </div>

      <h2 className="category"></h2>
      <br />

      <div className="intro">
        <h5 className="introApparelTitle"></h5>
        <p className="introText">
          Explore our exquisite collection of high-end products, designed to
          elevate your lifestyle. Discover the perfect blend of style and
          sophistication.
        </p>
      </div>

      <div className="card-container">
        {searchResults.map((product: any) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              className="card-image"
              alt={product.title}
            />
            {/* <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div> */}
          </div>
        ))}
      </div>
    </>
  );
}
