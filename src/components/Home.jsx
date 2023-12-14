import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-content">
          <div className="home-1">
            <div className="first-home">
              <h2>Winter sale 50% off</h2>
              <h1>Design For Beauty</h1>
              <p>You can Have Anything You Want In Life You Dress For It.</p>
              <div>
                <Link to={"products"}>
                  <button>All Collections</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-2">
            <div>
              <img src="./images/shopping.png"   alt="shopping image" />
            </div>
          </div>
        </div>
      </div>
      <div className="collection-img">
        <div className="collection">
          <div className="collection-item">
            <img src="./images/clothes.jpg" alt="clothes" />
          </div>
          <div className="collection-item">
            <img src="./images/girls.jpg" alt="girls" />
          </div>
          <div className="collection-item">
            <img src="./images/mens.jpg" alt="mens" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={"/products"}>
          <button>View Collections</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
