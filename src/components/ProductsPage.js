import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductsPage = ({ match }) => {
  return (
    <>
      <div>Strona produktu</div>
      <Product id={match.params.id} />
      <Link to="/Products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductsPage;
