import React from "react";
import Product from "../product/Product";
import { products } from "../../data";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list__text">
        <h1 className="product-list__title">Create & inspire.It's Lama</h1>
        <p className="product-list__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          reprehenderit facere, consectetur porro consequuntur dolor dignissimos
          eligendi minima. A, distinctio quas et obcaecati non quisquam.
        </p>
      </div>
      <div className="product-list__item">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
