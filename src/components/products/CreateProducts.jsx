import React from "react";
import Header from "../layouts/Header";

function CreateProducts() {
  return (
    <>
      <Header />
      <div className="products">
        <div className="products-container">
                  <h2>Add Product</h2>
                  <div className="form product">
                    <label>Product Id</label>
                    <input type="text" placeholder="Enter Product Id"/>
                  </div>
                  <div className="form product">
                    <label>Product Name</label>
                    <input type="text" placeholder="Enter Product Name"/>
                  </div>
                  <div className="form product">
                    <label>Description</label>
                    <br/>
                    <textarea rows={10} placeholder="Give Your Description for your product" />
                  </div>
                  <div className="form product">
                    <label>Seller Name</label>
                    <input type="text" placeholder="Enter Seller Name"/>
                  </div>
                  <div className="form product">
                    <label>Stock</label>
                    <input type="number" placeholder="Give Stock"/>
                  </div>
                  <div className="btn">
                    <button>Create</button>
                  </div>
        </div>
      </div>
    </>
  );
}

export default CreateProducts;
