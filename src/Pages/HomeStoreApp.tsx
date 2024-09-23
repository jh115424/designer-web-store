import "./HomeStore.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function HomeStoreApp() {
  const [searchResults, setSearchResults] = useState([]);

  const userUrl = "https://fakestoreapi.com/products";

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
        <h1>Elaine's Luxuries</h1>
        <p className="home-title">
          Welcome to Elaine's Luxuries, where luxury meets elegance. Explore{" "}
          <br /> our exquisite collection of high-end products, designed to{" "}
          <br /> elevate your lifestyle. Discover the perfect blend of style and
          sophistication.
        </p>

        <Link to="/home">Home</Link>
      </div>

      <h2 className="category">Categories</h2>
      <br />

      <div className="intro">
        <h5 className="introApparelTitle">Apparel</h5>
        <p className="introText">
          Explore our exquisite collection of high-end products, designed to
          elevate your lifestyle. Discover the perfect blend of style and
          sophistication.
        </p>
        <Link to="/apparel" className="btn btn-primary">
          Shop Apparel
        </Link>
      </div>
   

      {/* {categories.map((category, id) => (
                <div key={id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{category}</h5>
                        <p className="card-text">{category}</p>
                    </div>
                </div>
            ))} */}
    </>
  );
}
