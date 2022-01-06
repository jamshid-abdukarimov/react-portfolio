import React from "react";
import "./product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <a href={product.link} target="_blank" rel="noreferrer">
        <img className="product-img" src={product.img} alt="img" />
      </a>
    </div>
  );
};

export default Product;
