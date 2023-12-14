import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const menuShow = () => {
    document.querySelector(".list").classList.toggle("hidden");
  };
  return (
    <>
      <div className="logo-content">
        <h2>Benzimart</h2>
        <div className="search-box">
          <form>
            <input
              type="text"
              placeholder="Search for Products...."
              spellCheck="false"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
      </div>
      <nav>
        <div className="logo">
          <div onClick={menuShow}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>

              <li>
                <Link to={"/admin/products/create"}>Add Products</Link>
              </li>
            </ul>
          </div>
        </div>

        <ul>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <div>
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </ul>
      </nav>
      <div className="icons">
        <div>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div>
          <i class="fa-brands fa-x-twitter x"></i>
        </div>
        <div>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
