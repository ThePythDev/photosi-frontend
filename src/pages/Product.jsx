import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";
import { deleteProduct } from "../redux/productsSlice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => {
    return state.products;
  });

  const product = products && products.list.find((el) => el._id === id);

  const removeItem = () => {
    dispatch(
      deleteProduct({
        _id: product._id,
      })
    );

    navigate("/");
  };

  return (
    <Wrapper>
      <div className="left">
        <div
          className="image"
          style={{ backgroundImage: `url('${product && product.image}')` }}
        ></div>
      </div>
      <div className="right">
        <h1>{product && product.name}</h1>
        <p>
          {product && product.categories
            ? product.categories.join(" - ")
            : "Nessuna categoria!"}
        </p>
        <p>{product && product.description}</p>
        <div className="button-wrapper">
          <Link to={`/products/add/${product && product._id}`}>
            <Button color="blue">Modifica</Button>
          </Link>
        </div>
        <div className="button-wrapper">
          <Button onClick={() => removeItem()} color="red">
            Elimina
          </Button>
        </div>
        <div className="button-wrapper">
          <Button onClick={() => navigate('/')} color="gray">
            Annulla
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 10rem;

  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    height: 30rem;
    width: 30rem;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }

  .right {
    flex: 2;
  }

  .button-wrapper {
    padding: 1rem 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export default Product;
