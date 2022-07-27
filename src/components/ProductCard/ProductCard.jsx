import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ _id, name, categories, description, image }) => {
  return (
    <Link to={`/products/${_id}`}>
      <Wrapper>
        <div
          style={{
            backgroundImage: `url('${image}')`,
          }}
          className="image"
        ></div>
        <h3 className="title">{name}</h3>
        <div className="categories">
          {categories ? categories.join(" - ") : "Nessuna categoria!"}
        </div>
        <p className="description">{description}</p>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  border-radius: 3px;
  padding: 2rem 0;

  .image {
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    background-size: cover;
    background-position: center;
  }
`;

export default ProductCard;
