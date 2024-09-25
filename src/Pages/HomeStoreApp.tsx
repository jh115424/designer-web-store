import "./HomeStore.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const userUrl = "https://fakestoreapi.com/products";

export default function HomeStoreApp() {
  const [searchResults, setSearchResults] = useState([]);

  const data = searchResults;

  const data_filter = data.filter(
    (filter: any) =>
      filter.category === "men's clothing" ||
      filter.category === "jewelery" ||
      filter.category === "women's clothing"
  );
  useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
  }, []);

  return (
    <>
      <div>
        <div className="topHome-Nav">
          <Link to="/home" className="home">
            Home
          </Link>
          <div className="topRightHome-Nav">
            <Link to="/apparel" className="btn btn-primary">
              Shop Men's
            </Link>
            <Link to="/jewelery" className="btn btn-primary">
              Shop Jewelery
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
        {data_filter.map((product: any) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              className="card-image"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              {/* <p className="card-text">{product.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
